
import astronomyApiClient from "@/utils/astronomyApi";

interface StarMapOptions {
  date: string; // Format: YYYY-MM-DD
  location: string;
  coordinates?: {
    latitude: number;
    longitude: number;
  };
  title?: string;
}

export async function generateStarMap(options: StarMapOptions): Promise<{ 
  starMapUrl: string;
  formattedCoordinates: string;
}> {
  try {
    // Default to Charlotte, NC coordinates if not provided
    const latitude = options.coordinates?.latitude || 35.2271;
    const longitude = options.coordinates?.longitude || -80.8431;
    
    console.log(`Generating star map for: ${options.date} at ${options.location}`);
    
    // Format the date to YYYY-MM-DD if it's not already
    let formattedDate = options.date;
    if (formattedDate.includes('/')) {
      const [month, day, year] = formattedDate.split('/');
      formattedDate = `${year}-${month.padStart(2, '0')}-${day.padStart(2, '0')}`;
    }
    
    const starMapUrl = await astronomyApiClient.getStarChart({
      observer: {
        latitude,
        longitude,
        date: formattedDate
      },
      style: {
        backgroundStyle: "stars",
        backgroundColor: "black",
        starStyle: "default"
      },
      view: {
        type: "constellation",
        parameters: {
          position: {
            constellation: "ori" // Orion constellation as default view
          }
        }
      }
    });
    
    // Format the coordinates in the desired format
    const formattedCoordinates = astronomyApiClient.formatCoordinates(latitude, longitude);
    
    return {
      starMapUrl,
      formattedCoordinates
    };
  } catch (error) {
    console.error("Error generating star map:", error);
    return {
      starMapUrl: "",
      formattedCoordinates: ""
    };
  }
}
