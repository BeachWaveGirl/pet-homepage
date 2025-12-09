import { useEffect, useRef } from "react";
import * as d3 from "d3";
import { BRIGHT_STARS, CONSTELLATION_LINES, getMemorialStar, CatalogStar } from "@/data/starCatalog";

interface AstronomicalStarMapProps {
  date: Date;
  width?: number;
  height?: number;
  selectedStar?: string;
  petName?: string;
  memorialMessage?: string;
  dateOfPassing?: string;
  ownerName?: string;
}

export const AstronomicalStarMap = ({
  date,
  width = 600,
  height = 800,
  selectedStar,
  petName,
}: AstronomicalStarMapProps) => {
  const svgRef = useRef<SVGSVGElement>(null);

  useEffect(() => {
    if (!svgRef.current) return;

    const svg = d3.select(svgRef.current);
    svg.selectAll("*").remove();

    // Get memorial star
    const memorialStar = selectedStar 
      ? BRIGHT_STARS.find(s => s.name === selectedStar) || getMemorialStar(date)
      : getMemorialStar(date);

    // Create projection centered on memorial star
    const projection = d3.geoStereographic()
      .scale(Math.min(width, height) * 0.8)
      .center([memorialStar.ra, memorialStar.dec])
      .translate([width / 2, height / 2])
      .clipAngle(90);

    // Background gradient
    const defs = svg.append("defs");
    
    const radialGradient = defs.append("radialGradient")
      .attr("id", "skyGradient")
      .attr("cx", "50%")
      .attr("cy", "50%")
      .attr("r", "70%");
    
    radialGradient.append("stop")
      .attr("offset", "0%")
      .attr("stop-color", "#0a1628");
    
    radialGradient.append("stop")
      .attr("offset", "100%")
      .attr("stop-color", "#000000");

    // Background
    svg.append("rect")
      .attr("width", width)
      .attr("height", height)
      .attr("fill", "url(#skyGradient)");

    // Add subtle nebula effect
    const nebulaGradient = defs.append("radialGradient")
      .attr("id", "nebulaGradient")
      .attr("cx", "30%")
      .attr("cy", "40%")
      .attr("r", "50%");
    
    nebulaGradient.append("stop")
      .attr("offset", "0%")
      .attr("stop-color", "#1a0a2e")
      .attr("stop-opacity", "0.3");
    
    nebulaGradient.append("stop")
      .attr("offset", "100%")
      .attr("stop-color", "transparent");

    svg.append("ellipse")
      .attr("cx", width * 0.3)
      .attr("cy", height * 0.4)
      .attr("rx", width * 0.4)
      .attr("ry", height * 0.3)
      .attr("fill", "url(#nebulaGradient)");

    // Star glow filter
    const glowFilter = defs.append("filter")
      .attr("id", "starGlow")
      .attr("x", "-50%")
      .attr("y", "-50%")
      .attr("width", "200%")
      .attr("height", "200%");
    
    glowFilter.append("feGaussianBlur")
      .attr("in", "SourceGraphic")
      .attr("stdDeviation", "2")
      .attr("result", "blur");
    
    glowFilter.append("feMerge")
      .selectAll("feMergeNode")
      .data(["blur", "SourceGraphic"])
      .enter()
      .append("feMergeNode")
      .attr("in", d => d);

    // Memorial star special glow
    const memorialGlow = defs.append("filter")
      .attr("id", "memorialGlow")
      .attr("x", "-100%")
      .attr("y", "-100%")
      .attr("width", "300%")
      .attr("height", "300%");
    
    memorialGlow.append("feGaussianBlur")
      .attr("in", "SourceGraphic")
      .attr("stdDeviation", "4")
      .attr("result", "blur");
    
    memorialGlow.append("feMerge")
      .selectAll("feMergeNode")
      .data(["blur", "blur", "SourceGraphic"])
      .enter()
      .append("feMergeNode")
      .attr("in", d => d);

    // Get star color based on temperature
    const getStarColor = (temp: number): string => {
      if (temp >= 25000) return "#9bb0ff";
      if (temp >= 10000) return "#aabfff";
      if (temp >= 7500) return "#cad7ff";
      if (temp >= 6000) return "#f8f7ff";
      if (temp >= 5000) return "#fff4e8";
      if (temp >= 3500) return "#ffd2a1";
      return "#ffaa77";
    };

    // Draw constellation lines first (behind stars)
    CONSTELLATION_LINES.forEach(constellation => {
      constellation.stars.forEach(([star1Name, star2Name]) => {
        const star1 = BRIGHT_STARS.find(s => s.name === star1Name);
        const star2 = BRIGHT_STARS.find(s => s.name === star2Name);
        
        if (star1 && star2) {
          const pos1 = projection([star1.ra, star1.dec]);
          const pos2 = projection([star2.ra, star2.dec]);
          
          if (pos1 && pos2) {
            svg.append("line")
              .attr("x1", pos1[0])
              .attr("y1", pos1[1])
              .attr("x2", pos2[0])
              .attr("y2", pos2[1])
              .attr("stroke", "rgba(255,255,255,0.15)")
              .attr("stroke-width", 0.5);
          }
        }
      });
    });

    // Draw background stars (random dim stars)
    const bgStarCount = 200;
    for (let i = 0; i < bgStarCount; i++) {
      const x = Math.random() * width;
      const y = Math.random() * height;
      const size = Math.random() * 1 + 0.3;
      const opacity = Math.random() * 0.5 + 0.2;
      
      svg.append("circle")
        .attr("cx", x)
        .attr("cy", y)
        .attr("r", size)
        .attr("fill", "#ffffff")
        .attr("opacity", opacity);
    }

    // Draw catalog stars
    BRIGHT_STARS.forEach(star => {
      const pos = projection([star.ra, star.dec]);
      if (!pos) return;

      const isMemorial = star.name === memorialStar.name;
      const size = Math.max(1, 4 - star.magnitude * 0.8);
      const color = getStarColor(star.temperature);

      if (isMemorial) {
        // Draw pulsing rings for memorial star
        for (let i = 3; i >= 1; i--) {
          svg.append("circle")
            .attr("cx", pos[0])
            .attr("cy", pos[1])
            .attr("r", size * (2 + i))
            .attr("fill", "none")
            .attr("stroke", "#ffd700")
            .attr("stroke-width", 0.5)
            .attr("opacity", 0.3 / i)
            .attr("class", "memorial-ring");
        }

        // Memorial star
        svg.append("circle")
          .attr("cx", pos[0])
          .attr("cy", pos[1])
          .attr("r", size * 2)
          .attr("fill", "#ffd700")
          .attr("filter", "url(#memorialGlow)")
          .attr("class", "memorial-star");

        // Label for memorial star
        if (petName) {
          svg.append("text")
            .attr("x", pos[0])
            .attr("y", pos[1] + size * 2 + 15)
            .attr("text-anchor", "middle")
            .attr("fill", "#ffd700")
            .attr("font-size", "12px")
            .attr("font-family", "serif")
            .attr("font-style", "italic")
            .text(`${petName}'s Star`);
        }

        svg.append("text")
          .attr("x", pos[0])
          .attr("y", pos[1] + size * 2 + (petName ? 28 : 15))
          .attr("text-anchor", "middle")
          .attr("fill", "rgba(255,255,255,0.7)")
          .attr("font-size", "9px")
          .attr("font-family", "serif")
          .text(star.name);
      } else {
        // Regular star
        svg.append("circle")
          .attr("cx", pos[0])
          .attr("cy", pos[1])
          .attr("r", size)
          .attr("fill", color)
          .attr("filter", star.magnitude < 1.5 ? "url(#starGlow)" : undefined)
          .attr("opacity", Math.min(1, 1.5 - star.magnitude * 0.2));
      }
    });

    // Add CSS animation for memorial star
    const style = document.createElement("style");
    style.textContent = `
      .memorial-star {
        animation: pulse 2s ease-in-out infinite;
      }
      .memorial-ring {
        animation: expand 3s ease-out infinite;
      }
      @keyframes pulse {
        0%, 100% { opacity: 1; }
        50% { opacity: 0.7; }
      }
      @keyframes expand {
        0% { transform: scale(1); opacity: 0.3; }
        100% { transform: scale(1.5); opacity: 0; }
      }
    `;
    document.head.appendChild(style);

    return () => {
      document.head.removeChild(style);
    };
  }, [date, width, height, selectedStar, petName]);

  return (
    <svg
      ref={svgRef}
      width="100%"
      height="100%"
      viewBox={`0 0 ${width} ${height}`}
      preserveAspectRatio="xMidYMid slice"
      className="rounded-lg"
    />
  );
};
