
/**
 * Gets the appropriate icon for a tribute type
 */
export const getTributeIcon = (tributeType: "candle" | "flower" | "toy") => {
  switch (tributeType) {
    case "candle":
      return "🕯️";
    case "flower":
      return "💐";
    case "toy":
      return "🧸";
    default:
      return "🌟";
  }
};
