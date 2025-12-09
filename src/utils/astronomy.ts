// Client-side astronomy calculations

export interface MoonPhaseData {
  phase: string;
  illumination: number;
  emoji: string;
}

export interface SunTimes {
  sunrise: string;
  sunset: string;
}

export interface SeasonalInfo {
  season: string;
  hemisphere: string;
}

// Calculate moon phase for a given date
export function getMoonPhase(date: Date): MoonPhaseData {
  // Synodic month is ~29.53 days
  const synodicMonth = 29.530588853;
  
  // Known new moon: January 6, 2000
  const knownNewMoon = new Date(2000, 0, 6, 18, 14, 0);
  
  const daysSinceNew = (date.getTime() - knownNewMoon.getTime()) / (1000 * 60 * 60 * 24);
  const lunations = daysSinceNew / synodicMonth;
  const phase = lunations - Math.floor(lunations);
  
  // Calculate illumination (0-100%)
  const illumination = Math.round((1 - Math.cos(phase * 2 * Math.PI)) / 2 * 100);
  
  // Determine phase name and emoji
  let phaseName: string;
  let emoji: string;
  
  if (phase < 0.0625) {
    phaseName = "New Moon";
    emoji = "🌑";
  } else if (phase < 0.1875) {
    phaseName = "Waxing Crescent";
    emoji = "🌒";
  } else if (phase < 0.3125) {
    phaseName = "First Quarter";
    emoji = "🌓";
  } else if (phase < 0.4375) {
    phaseName = "Waxing Gibbous";
    emoji = "🌔";
  } else if (phase < 0.5625) {
    phaseName = "Full Moon";
    emoji = "🌕";
  } else if (phase < 0.6875) {
    phaseName = "Waning Gibbous";
    emoji = "🌖";
  } else if (phase < 0.8125) {
    phaseName = "Last Quarter";
    emoji = "🌗";
  } else if (phase < 0.9375) {
    phaseName = "Waning Crescent";
    emoji = "🌘";
  } else {
    phaseName = "New Moon";
    emoji = "🌑";
  }
  
  return { phase: phaseName, illumination, emoji };
}

// Calculate approximate sunrise/sunset times
export function getSunTimes(date: Date, latitude: number = 40): SunTimes {
  const dayOfYear = Math.floor(
    (date.getTime() - new Date(date.getFullYear(), 0, 0).getTime()) / 86400000
  );
  
  // Approximate equation of time correction
  const b = (360 / 365) * (dayOfYear - 81);
  const eot = 9.87 * Math.sin(2 * b * Math.PI / 180) - 
              7.53 * Math.cos(b * Math.PI / 180) - 
              1.5 * Math.sin(b * Math.PI / 180);
  
  // Solar declination
  const declination = 23.45 * Math.sin((360 / 365) * (dayOfYear - 81) * Math.PI / 180);
  
  // Hour angle at sunrise/sunset
  const latRad = latitude * Math.PI / 180;
  const decRad = declination * Math.PI / 180;
  const cosHa = -Math.tan(latRad) * Math.tan(decRad);
  
  // Clamp to valid range
  const clampedCosHa = Math.max(-1, Math.min(1, cosHa));
  const ha = Math.acos(clampedCosHa) * 180 / Math.PI;
  
  // Calculate times (approximate, in hours from midnight)
  const noonOffset = 12 - eot / 60;
  const sunriseHour = noonOffset - ha / 15;
  const sunsetHour = noonOffset + ha / 15;
  
  const formatTime = (hours: number): string => {
    const h = Math.floor(hours);
    const m = Math.round((hours - h) * 60);
    const period = h >= 12 ? 'PM' : 'AM';
    const displayH = h > 12 ? h - 12 : (h === 0 ? 12 : h);
    return `${displayH}:${m.toString().padStart(2, '0')} ${period}`;
  };
  
  return {
    sunrise: formatTime(sunriseHour),
    sunset: formatTime(sunsetHour),
  };
}

// Get season based on date and hemisphere
export function getSeason(date: Date, latitude: number = 40): SeasonalInfo {
  const month = date.getMonth();
  const isNorthern = latitude >= 0;
  
  let season: string;
  
  if (month >= 2 && month <= 4) {
    season = isNorthern ? "Spring" : "Autumn";
  } else if (month >= 5 && month <= 7) {
    season = isNorthern ? "Summer" : "Winter";
  } else if (month >= 8 && month <= 10) {
    season = isNorthern ? "Autumn" : "Spring";
  } else {
    season = isNorthern ? "Winter" : "Summer";
  }
  
  return {
    season,
    hemisphere: isNorthern ? "Northern" : "Southern",
  };
}

// Get zodiac constellation for a date
export function getZodiacConstellation(date: Date): string {
  const month = date.getMonth() + 1;
  const day = date.getDate();
  
  const zodiacs = [
    { name: "Capricornus", start: [12, 22], end: [1, 19] },
    { name: "Aquarius", start: [1, 20], end: [2, 18] },
    { name: "Pisces", start: [2, 19], end: [3, 20] },
    { name: "Aries", start: [3, 21], end: [4, 19] },
    { name: "Taurus", start: [4, 20], end: [5, 20] },
    { name: "Gemini", start: [5, 21], end: [6, 20] },
    { name: "Cancer", start: [6, 21], end: [7, 22] },
    { name: "Leo", start: [7, 23], end: [8, 22] },
    { name: "Virgo", start: [8, 23], end: [9, 22] },
    { name: "Libra", start: [9, 23], end: [10, 22] },
    { name: "Scorpius", start: [10, 23], end: [11, 21] },
    { name: "Sagittarius", start: [11, 22], end: [12, 21] },
  ];
  
  for (const zodiac of zodiacs) {
    const [startMonth, startDay] = zodiac.start;
    const [endMonth, endDay] = zodiac.end;
    
    if (startMonth === 12 && endMonth === 1) {
      // Handle Capricorn spanning year end
      if ((month === 12 && day >= startDay) || (month === 1 && day <= endDay)) {
        return zodiac.name;
      }
    } else if (
      (month === startMonth && day >= startDay) ||
      (month === endMonth && day <= endDay) ||
      (month > startMonth && month < endMonth)
    ) {
      return zodiac.name;
    }
  }
  
  return "Sagittarius"; // Default fallback
}

// Format coordinates to RA/Dec string
export function formatCoordinates(ra: number, dec: number): { ra: string; dec: string } {
  // Convert RA from degrees to hours/minutes/seconds
  const raHours = ra / 15;
  const raH = Math.floor(raHours);
  const raM = Math.floor((raHours - raH) * 60);
  const raS = Math.round(((raHours - raH) * 60 - raM) * 60);
  
  // Format Dec to degrees/minutes/seconds
  const decSign = dec >= 0 ? '+' : '-';
  const absDec = Math.abs(dec);
  const decD = Math.floor(absDec);
  const decM = Math.floor((absDec - decD) * 60);
  const decS = Math.round(((absDec - decD) * 60 - decM) * 60);
  
  return {
    ra: `${raH}h ${raM}m ${raS}s`,
    dec: `${decSign}${decD}° ${decM}' ${decS}"`,
  };
}
