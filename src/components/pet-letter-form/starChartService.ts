
import astronomyApiClient from "@/utils/astronomyApi";
import { FormData } from "./types";

export const fetchStarChart = async (formData: FormData) => {
  try {
    if (!formData.passingDate) {
      return "";
    }
    
    const date = formData.passingDate.toISOString().split('T')[0];
    const latitude = formData.location?.latitude || 37.7749;
    const longitude = formData.location?.longitude || -122.4194;
    
    console.log(`Fetching star chart for date: ${date}, lat: ${latitude}, long: ${longitude}`);
    
    const starChartUrl = await astronomyApiClient.getStarChart({
      observer: {
        latitude,
        longitude,
        date
      },
      style: {
        backgroundStyle: "stars",
        backgroundColor: "black",
        starStyle: "default"
      },
      view: {
        type: "constellation"
      }
    });
    
    return starChartUrl;
  } catch (error) {
    console.error("Error fetching star chart:", error);
    return "";
  }
};
