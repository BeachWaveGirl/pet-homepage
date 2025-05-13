
export const calculateTimeSincePassing = (passingDate: Date | undefined) => {
  if (!passingDate) return "";
  
  const now = new Date();
  const passed = new Date(passingDate);
  
  const diffTime = Math.abs(now.getTime() - passed.getTime());
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
  const diffMonths = Math.floor(diffDays / 30);
  const diffYears = Math.floor(diffDays / 365);
  
  if (diffYears > 0) {
    return diffYears === 1 ? "1 year" : `${diffYears} years`;
  } else if (diffMonths > 0) {
    return diffMonths === 1 ? "1 month" : `${diffMonths} months`;
  } else {
    return diffDays === 1 ? "1 day" : `${diffDays} days`;
  }
};
