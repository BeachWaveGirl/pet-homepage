// NASA and Open-Meteo astronomy API integrations

export interface NasaImageResult {
  url: string;
  title: string;
  description: string;
}

export interface WeatherData {
  temperature: number;
  conditions: string;
  cloudCover: number;
}

// Fetch a space-related image from NASA's Image API
export async function fetchNasaImage(query: string = "stars galaxy"): Promise<NasaImageResult | null> {
  try {
    const response = await fetch(
      `https://images-api.nasa.gov/search?q=${encodeURIComponent(query)}&media_type=image`
    );
    
    if (!response.ok) return null;
    
    const data = await response.json();
    const items = data.collection?.items;
    
    if (!items || items.length === 0) return null;
    
    // Get a random image from results
    const randomItem = items[Math.floor(Math.random() * Math.min(items.length, 10))];
    const imageData = randomItem.data?.[0];
    const imageLink = randomItem.links?.[0]?.href;
    
    if (!imageData || !imageLink) return null;
    
    return {
      url: imageLink,
      title: imageData.title || "NASA Image",
      description: imageData.description || "",
    };
  } catch (error) {
    console.error("Failed to fetch NASA image:", error);
    return null;
  }
}

// Fetch weather/astronomy data from Open-Meteo (free, no API key needed)
export async function fetchAstronomyData(
  latitude: number,
  longitude: number,
  date: Date
): Promise<WeatherData | null> {
  try {
    const dateStr = date.toISOString().split('T')[0];
    
    const response = await fetch(
      `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&daily=sunrise,sunset,uv_index_max&current=temperature_2m,cloud_cover,weather_code&timezone=auto&start_date=${dateStr}&end_date=${dateStr}`
    );
    
    if (!response.ok) return null;
    
    const data = await response.json();
    
    return {
      temperature: data.current?.temperature_2m ?? 20,
      conditions: getWeatherCondition(data.current?.weather_code ?? 0),
      cloudCover: data.current?.cloud_cover ?? 0,
    };
  } catch (error) {
    console.error("Failed to fetch astronomy data:", error);
    return null;
  }
}

function getWeatherCondition(code: number): string {
  if (code === 0) return "Clear sky";
  if (code <= 3) return "Partly cloudy";
  if (code <= 49) return "Foggy";
  if (code <= 69) return "Rainy";
  if (code <= 79) return "Snowy";
  if (code <= 99) return "Stormy";
  return "Variable";
}

// Astronomy Picture of the Day (APOD) - requires API key
// Using a fallback approach without key
export async function fetchAPOD(date?: Date): Promise<NasaImageResult | null> {
  // For now, return a constellation search result
  return fetchNasaImage("constellation stars night sky");
}

// Get star visibility conditions
export function getStarVisibilityRating(cloudCover: number): {
  rating: string;
  description: string;
} {
  if (cloudCover <= 10) {
    return { rating: "Excellent", description: "Perfect conditions for stargazing" };
  } else if (cloudCover <= 30) {
    return { rating: "Good", description: "Most stars visible" };
  } else if (cloudCover <= 50) {
    return { rating: "Fair", description: "Brightest stars visible" };
  } else if (cloudCover <= 70) {
    return { rating: "Poor", description: "Limited visibility" };
  } else {
    return { rating: "Very Poor", description: "Overcast skies" };
  }
}
