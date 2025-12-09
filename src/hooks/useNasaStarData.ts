import { useState, useEffect } from "react";
import { getMemorialStar, CatalogStar } from "@/data/starCatalog";
import { getMoonPhase, getSunTimes, getSeason, formatCoordinates, MoonPhaseData, SunTimes, SeasonalInfo } from "@/utils/astronomy";
import { fetchAstronomyData, WeatherData } from "@/utils/publicAstronomyApis";
import { PetData } from "@/components/star-map/PetMemorialForm";

export interface StarMemorialData {
  starName: string;
  constellation: string;
  magnitude: number;
  spectralType: string;
  temperature: number;
  coordinates: {
    ra: string;
    dec: string;
  };
  moonPhase: MoonPhaseData;
  sunTimes: SunTimes;
  season: SeasonalInfo;
  weather?: WeatherData;
}

interface UseNasaStarDataResult {
  starMemorialData: StarMemorialData | null;
  isLoading: boolean;
  error: string | null;
  refetch: () => void;
}

export function useNasaStarData(petData: PetData): UseNasaStarDataResult {
  const [starMemorialData, setStarMemorialData] = useState<StarMemorialData | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const calculateStarData = async () => {
    if (!petData.dateOfPassing) {
      setStarMemorialData(null);
      return;
    }

    setIsLoading(true);
    setError(null);

    try {
      const passingDate = new Date(petData.dateOfPassing);
      
      // Get memorial star based on date
      const star = getMemorialStar(passingDate);
      
      // Calculate astronomical data
      const moonPhase = getMoonPhase(passingDate);
      const sunTimes = getSunTimes(passingDate);
      const season = getSeason(passingDate);
      const coords = formatCoordinates(star.ra, star.dec);

      // Try to fetch weather data (optional, may fail)
      let weather: WeatherData | undefined;
      try {
        const weatherData = await fetchAstronomyData(40, -74, passingDate);
        if (weatherData) {
          weather = weatherData;
        }
      } catch (e) {
        // Weather data is optional, continue without it
        console.log("Weather data unavailable");
      }

      setStarMemorialData({
        starName: star.name,
        constellation: star.constellation,
        magnitude: star.magnitude,
        spectralType: star.spectralType,
        temperature: star.temperature,
        coordinates: coords,
        moonPhase,
        sunTimes,
        season,
        weather,
      });
    } catch (err) {
      setError(err instanceof Error ? err.message : "Failed to calculate star data");
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    calculateStarData();
  }, [petData.dateOfPassing]);

  return {
    starMemorialData,
    isLoading,
    error,
    refetch: calculateStarData,
  };
}
