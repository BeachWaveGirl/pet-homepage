// Real star data from Hipparcos catalog - brightest stars visible from Earth
export interface CatalogStar {
  name: string;
  hip: number; // Hipparcos catalog number
  ra: number; // Right ascension in degrees
  dec: number; // Declination in degrees
  magnitude: number; // Apparent magnitude (lower = brighter)
  spectralType: string;
  constellation: string;
  temperature: number; // Kelvin
}

export const BRIGHT_STARS: CatalogStar[] = [
  { name: "Sirius", hip: 32349, ra: 101.287, dec: -16.716, magnitude: -1.46, spectralType: "A1V", constellation: "Canis Major", temperature: 9940 },
  { name: "Canopus", hip: 30438, ra: 95.988, dec: -52.696, magnitude: -0.72, spectralType: "F0Ib", constellation: "Carina", temperature: 7350 },
  { name: "Arcturus", hip: 69673, ra: 213.915, dec: 19.182, magnitude: -0.05, spectralType: "K1.5III", constellation: "Boötes", temperature: 4286 },
  { name: "Vega", hip: 91262, ra: 279.235, dec: 38.784, magnitude: 0.03, spectralType: "A0V", constellation: "Lyra", temperature: 9602 },
  { name: "Capella", hip: 24608, ra: 79.172, dec: 45.998, magnitude: 0.08, spectralType: "G8III", constellation: "Auriga", temperature: 4970 },
  { name: "Rigel", hip: 24436, ra: 78.634, dec: -8.202, magnitude: 0.13, spectralType: "B8Ia", constellation: "Orion", temperature: 12100 },
  { name: "Procyon", hip: 37279, ra: 114.826, dec: 5.225, magnitude: 0.34, spectralType: "F5IV", constellation: "Canis Minor", temperature: 6530 },
  { name: "Achernar", hip: 7588, ra: 24.429, dec: -57.237, magnitude: 0.46, spectralType: "B6V", constellation: "Eridanus", temperature: 14500 },
  { name: "Betelgeuse", hip: 27989, ra: 88.793, dec: 7.407, magnitude: 0.50, spectralType: "M2Iab", constellation: "Orion", temperature: 3500 },
  { name: "Hadar", hip: 68702, ra: 210.956, dec: -60.373, magnitude: 0.61, spectralType: "B1III", constellation: "Centaurus", temperature: 25000 },
  { name: "Altair", hip: 97649, ra: 297.696, dec: 8.868, magnitude: 0.77, spectralType: "A7V", constellation: "Aquila", temperature: 7550 },
  { name: "Acrux", hip: 60718, ra: 186.650, dec: -63.099, magnitude: 0.76, spectralType: "B0.5IV", constellation: "Crux", temperature: 28000 },
  { name: "Aldebaran", hip: 21421, ra: 68.980, dec: 16.509, magnitude: 0.85, spectralType: "K5III", constellation: "Taurus", temperature: 3910 },
  { name: "Antares", hip: 80763, ra: 247.352, dec: -26.432, magnitude: 0.96, spectralType: "M1.5Iab", constellation: "Scorpius", temperature: 3400 },
  { name: "Spica", hip: 65474, ra: 201.298, dec: -11.161, magnitude: 0.97, spectralType: "B1V", constellation: "Virgo", temperature: 22400 },
  { name: "Pollux", hip: 37826, ra: 116.329, dec: 28.026, magnitude: 1.14, spectralType: "K0III", constellation: "Gemini", temperature: 4666 },
  { name: "Fomalhaut", hip: 113368, ra: 344.413, dec: -29.622, magnitude: 1.16, spectralType: "A3V", constellation: "Piscis Austrinus", temperature: 8590 },
  { name: "Deneb", hip: 102098, ra: 310.358, dec: 45.280, magnitude: 1.25, spectralType: "A2Ia", constellation: "Cygnus", temperature: 8525 },
  { name: "Mimosa", hip: 62434, ra: 191.930, dec: -59.689, magnitude: 1.25, spectralType: "B0.5III", constellation: "Crux", temperature: 27000 },
  { name: "Regulus", hip: 49669, ra: 152.093, dec: 11.967, magnitude: 1.35, spectralType: "B7V", constellation: "Leo", temperature: 12460 },
  { name: "Adhara", hip: 33579, ra: 104.656, dec: -28.972, magnitude: 1.50, spectralType: "B2II", constellation: "Canis Major", temperature: 22900 },
  { name: "Castor", hip: 36850, ra: 113.650, dec: 31.888, magnitude: 1.58, spectralType: "A1V", constellation: "Gemini", temperature: 10286 },
  { name: "Gacrux", hip: 61084, ra: 187.791, dec: -57.113, magnitude: 1.63, spectralType: "M3.5III", constellation: "Crux", temperature: 3626 },
  { name: "Shaula", hip: 85927, ra: 263.402, dec: -37.104, magnitude: 1.63, spectralType: "B2IV", constellation: "Scorpius", temperature: 25000 },
  { name: "Bellatrix", hip: 25336, ra: 81.283, dec: 6.350, magnitude: 1.64, spectralType: "B2III", constellation: "Orion", temperature: 22000 },
  { name: "Elnath", hip: 25428, ra: 81.573, dec: 28.608, magnitude: 1.65, spectralType: "B7III", constellation: "Taurus", temperature: 13824 },
  { name: "Miaplacidus", hip: 45238, ra: 138.300, dec: -69.717, magnitude: 1.68, spectralType: "A1III", constellation: "Carina", temperature: 9100 },
  { name: "Alnilam", hip: 26311, ra: 84.053, dec: -1.202, magnitude: 1.69, spectralType: "B0Ia", constellation: "Orion", temperature: 27500 },
  { name: "Alnitak", hip: 26727, ra: 85.190, dec: -1.943, magnitude: 1.77, spectralType: "O9.5Ib", constellation: "Orion", temperature: 31000 },
  { name: "Regor", hip: 39953, ra: 122.383, dec: -47.337, magnitude: 1.78, spectralType: "WC8", constellation: "Vela", temperature: 35000 },
  { name: "Alhena", hip: 31681, ra: 99.428, dec: 16.399, magnitude: 1.93, spectralType: "A0IV", constellation: "Gemini", temperature: 9260 },
  { name: "Peacock", hip: 100751, ra: 306.412, dec: -56.735, magnitude: 1.94, spectralType: "B2IV", constellation: "Pavo", temperature: 17711 },
  { name: "Mirzam", hip: 30324, ra: 95.675, dec: -17.956, magnitude: 1.98, spectralType: "B1II", constellation: "Canis Major", temperature: 25000 },
  { name: "Alphard", hip: 46390, ra: 141.897, dec: -8.659, magnitude: 1.98, spectralType: "K3III", constellation: "Hydra", temperature: 4120 },
  { name: "Hamal", hip: 9884, ra: 31.793, dec: 23.463, magnitude: 2.00, spectralType: "K2III", constellation: "Aries", temperature: 4480 },
  { name: "Polaris", hip: 11767, ra: 37.954, dec: 89.264, magnitude: 2.02, spectralType: "F7Ib", constellation: "Ursa Minor", temperature: 6015 },
  { name: "Diphda", hip: 3419, ra: 10.897, dec: -17.987, magnitude: 2.02, spectralType: "K0III", constellation: "Cetus", temperature: 4797 },
  { name: "Menkent", hip: 68933, ra: 211.671, dec: -36.370, magnitude: 2.06, spectralType: "K0III", constellation: "Centaurus", temperature: 4980 },
  { name: "Nunki", hip: 92855, ra: 283.816, dec: -26.297, magnitude: 2.05, spectralType: "B2V", constellation: "Sagittarius", temperature: 18890 },
  { name: "Mirfak", hip: 15863, ra: 51.081, dec: 49.861, magnitude: 1.79, spectralType: "F5Ib", constellation: "Perseus", temperature: 6350 },
  { name: "Saiph", hip: 27366, ra: 86.939, dec: -9.670, magnitude: 2.09, spectralType: "B0.5Ia", constellation: "Orion", temperature: 26500 },
  { name: "Kochab", hip: 72607, ra: 222.676, dec: 74.156, magnitude: 2.08, spectralType: "K4III", constellation: "Ursa Minor", temperature: 4030 },
  { name: "Rasalhague", hip: 86032, ra: 263.734, dec: 12.561, magnitude: 2.07, spectralType: "A5III", constellation: "Ophiuchus", temperature: 8000 },
  { name: "Algol", hip: 14576, ra: 47.042, dec: 40.956, magnitude: 2.12, spectralType: "B8V", constellation: "Perseus", temperature: 13000 },
  { name: "Almach", hip: 9640, ra: 30.975, dec: 42.330, magnitude: 2.17, spectralType: "K3II", constellation: "Andromeda", temperature: 4250 },
  { name: "Denebola", hip: 57632, ra: 177.265, dec: 14.572, magnitude: 2.14, spectralType: "A3V", constellation: "Leo", temperature: 8500 },
  { name: "Naos", hip: 39429, ra: 120.896, dec: -40.003, magnitude: 2.25, spectralType: "O5Ia", constellation: "Puppis", temperature: 42000 },
  { name: "Wezen", hip: 34444, ra: 107.098, dec: -26.393, magnitude: 1.84, spectralType: "F8Ia", constellation: "Canis Major", temperature: 6100 },
  { name: "Sargas", hip: 86228, ra: 264.330, dec: -42.998, magnitude: 1.87, spectralType: "F1II", constellation: "Scorpius", temperature: 7268 },
  { name: "Kaus Australis", hip: 90185, ra: 276.043, dec: -34.385, magnitude: 1.85, spectralType: "B9.5III", constellation: "Sagittarius", temperature: 9960 },
  { name: "Avior", hip: 41037, ra: 125.629, dec: -59.509, magnitude: 1.86, spectralType: "K3III", constellation: "Carina", temperature: 4050 },
  { name: "Alkaid", hip: 67301, ra: 206.885, dec: 49.313, magnitude: 1.86, spectralType: "B3V", constellation: "Ursa Major", temperature: 15540 },
  { name: "Menkalinan", hip: 28360, ra: 89.882, dec: 44.947, magnitude: 1.90, spectralType: "A2IV", constellation: "Auriga", temperature: 9200 },
  { name: "Atria", hip: 82273, ra: 252.166, dec: -69.028, magnitude: 1.92, spectralType: "K2II", constellation: "Triangulum Australe", temperature: 4150 },
  { name: "Alhena", hip: 31681, ra: 99.428, dec: 16.399, magnitude: 1.93, spectralType: "A1IV", constellation: "Gemini", temperature: 9260 },
  { name: "Delta Velorum", hip: 42913, ra: 131.176, dec: -54.709, magnitude: 1.96, spectralType: "A1V", constellation: "Vela", temperature: 9440 },
  { name: "Scheat", hip: 113881, ra: 345.944, dec: 28.083, magnitude: 2.42, spectralType: "M2III", constellation: "Pegasus", temperature: 3689 },
  { name: "Markab", hip: 113963, ra: 346.190, dec: 15.205, magnitude: 2.49, spectralType: "A0IV", constellation: "Pegasus", temperature: 10100 },
  { name: "Algenib", hip: 1067, ra: 3.309, dec: 15.183, magnitude: 2.83, spectralType: "B2IV", constellation: "Pegasus", temperature: 21000 },
  { name: "Alpheratz", hip: 677, ra: 2.097, dec: 29.090, magnitude: 2.06, spectralType: "B9p", constellation: "Andromeda", temperature: 13000 },
];

// Constellation line connections (using star names)
export const CONSTELLATION_LINES: { constellation: string; stars: string[][] }[] = [
  {
    constellation: "Orion",
    stars: [
      ["Betelgeuse", "Bellatrix"],
      ["Betelgeuse", "Alnilam"],
      ["Bellatrix", "Alnilam"],
      ["Alnilam", "Alnitak"],
      ["Alnilam", "Saiph"],
      ["Alnitak", "Saiph"],
      ["Alnitak", "Rigel"],
      ["Saiph", "Rigel"],
    ],
  },
  {
    constellation: "Ursa Major",
    stars: [
      ["Alkaid", "Mizar"],
      ["Dubhe", "Merak"],
    ],
  },
  {
    constellation: "Scorpius",
    stars: [
      ["Antares", "Shaula"],
      ["Antares", "Sargas"],
    ],
  },
  {
    constellation: "Crux",
    stars: [
      ["Acrux", "Gacrux"],
      ["Mimosa", "Gacrux"],
    ],
  },
  {
    constellation: "Gemini",
    stars: [
      ["Castor", "Pollux"],
      ["Castor", "Alhena"],
      ["Pollux", "Alhena"],
    ],
  },
  {
    constellation: "Canis Major",
    stars: [
      ["Sirius", "Adhara"],
      ["Sirius", "Mirzam"],
      ["Adhara", "Wezen"],
    ],
  },
  {
    constellation: "Leo",
    stars: [
      ["Regulus", "Denebola"],
    ],
  },
  {
    constellation: "Cygnus",
    stars: [
      ["Deneb", "Albireo"],
    ],
  },
  {
    constellation: "Pegasus",
    stars: [
      ["Markab", "Scheat"],
      ["Scheat", "Alpheratz"],
      ["Alpheratz", "Algenib"],
      ["Algenib", "Markab"],
    ],
  },
];

// Get stars visible at a given date/time and location
export function getVisibleStars(
  date: Date,
  latitude: number = 40, // Default to mid-northern latitude
  longitude: number = -74 // Default to NYC
): CatalogStar[] {
  // Calculate Local Sidereal Time
  const jd = getJulianDate(date);
  const lst = getLocalSiderealTime(jd, longitude);
  
  return BRIGHT_STARS.filter(star => {
    // Calculate hour angle
    const ha = lst - star.ra;
    
    // Calculate altitude
    const latRad = latitude * Math.PI / 180;
    const decRad = star.dec * Math.PI / 180;
    const haRad = ha * Math.PI / 180;
    
    const sinAlt = Math.sin(latRad) * Math.sin(decRad) + 
                   Math.cos(latRad) * Math.cos(decRad) * Math.cos(haRad);
    const altitude = Math.asin(sinAlt) * 180 / Math.PI;
    
    // Star is visible if above horizon
    return altitude > 0;
  });
}

function getJulianDate(date: Date): number {
  const y = date.getUTCFullYear();
  const m = date.getUTCMonth() + 1;
  const d = date.getUTCDate() + 
            date.getUTCHours() / 24 + 
            date.getUTCMinutes() / 1440 + 
            date.getUTCSeconds() / 86400;
  
  const a = Math.floor((14 - m) / 12);
  const y2 = y + 4800 - a;
  const m2 = m + 12 * a - 3;
  
  return d + Math.floor((153 * m2 + 2) / 5) + 365 * y2 + 
         Math.floor(y2 / 4) - Math.floor(y2 / 100) + 
         Math.floor(y2 / 400) - 32045;
}

function getLocalSiderealTime(jd: number, longitude: number): number {
  const t = (jd - 2451545.0) / 36525;
  let lst = 280.46061837 + 360.98564736629 * (jd - 2451545.0) + 
            0.000387933 * t * t - t * t * t / 38710000;
  lst = lst + longitude;
  lst = ((lst % 360) + 360) % 360;
  return lst;
}

// Get the brightest star visible on a given date
export function getBrightestVisibleStar(date: Date): CatalogStar {
  const visible = getVisibleStars(date);
  if (visible.length === 0) return BRIGHT_STARS[0]; // Fallback to Sirius
  return visible.reduce((brightest, star) => 
    star.magnitude < brightest.magnitude ? star : brightest
  );
}

// Get a memorial star based on date (deterministic selection)
export function getMemorialStar(date: Date): CatalogStar {
  const dayOfYear = Math.floor(
    (date.getTime() - new Date(date.getFullYear(), 0, 0).getTime()) / 86400000
  );
  const index = dayOfYear % BRIGHT_STARS.length;
  return BRIGHT_STARS[index];
}
