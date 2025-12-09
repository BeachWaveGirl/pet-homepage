import { AstronomicalStarMap } from "./AstronomicalStarMap";
import { PetData } from "./PetMemorialForm";
import { getMemorialStar } from "@/data/starCatalog";
import { getMoonPhase, formatCoordinates } from "@/utils/astronomy";

interface MemorialPreviewCardProps {
  petData: PetData;
  photoPreview?: string | null;
}

export const MemorialPreviewCard = ({ petData, photoPreview }: MemorialPreviewCardProps) => {
  const passingDate = petData.dateOfPassing ? new Date(petData.dateOfPassing) : new Date();
  const memorialStar = getMemorialStar(passingDate);
  const moonPhase = getMoonPhase(passingDate);
  const coords = formatCoordinates(memorialStar.ra, memorialStar.dec);

  const formatDate = (dateString: string) => {
    if (!dateString) return "";
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    }).toUpperCase();
  };

  const getYearRange = () => {
    if (!petData.dateOfFirstMeeting || !petData.dateOfPassing) return "";
    const meetYear = new Date(petData.dateOfFirstMeeting).getFullYear();
    const passYear = new Date(petData.dateOfPassing).getFullYear();
    return `${meetYear} - ${passYear}`;
  };

  return (
    <div className="sticky top-8">
      <div className="mb-4 text-center">
        <div className="inline-flex items-center gap-2 text-sm text-muted-foreground bg-card/50 rounded-full px-3 py-1 border">
          <div className="w-2 h-2 bg-primary rounded-full animate-pulse" />
          Live Preview
        </div>
      </div>

      {/* Memorial Star Map Poster */}
      <div
        data-memorial-card
        className="relative w-full aspect-[3/4] rounded-xl overflow-hidden shadow-2xl bg-black border-4 border-border/20"
      >
        {/* Star Map Background */}
        <div className="absolute inset-0">
          <AstronomicalStarMap
            date={passingDate}
            width={600}
            height={800}
            selectedStar={memorialStar.name}
            petName={petData.name}
            memorialMessage={petData.memorialMessage}
            dateOfPassing={petData.dateOfPassing}
            ownerName={petData.ownerName}
          />
        </div>

        {/* Overlay Content */}
        <div className="absolute inset-0 flex flex-col p-4 pointer-events-none">
          {/* Header */}
          <div className="text-center space-y-1 relative z-20">
            <h1 className="text-white font-serif text-xl lg:text-2xl tracking-wide font-light">
              Forever in the Stars
            </h1>
            {petData.name && (
              <div className="text-white/90 text-sm lg:text-base tracking-wider font-light">
                {petData.name}
              </div>
            )}
            {getYearRange() && (
              <div className="text-white/80 text-xs tracking-wider font-light">
                {getYearRange()}
              </div>
            )}
          </div>

          {/* Pet Photo */}
          {photoPreview && (
            <div className="absolute left-1/2 top-[120px] transform -translate-x-1/2 z-10">
              <img
                src={photoPreview}
                alt={petData.name}
                className="w-16 h-16 object-cover rounded-full border-2 border-white/20"
              />
            </div>
          )}

          {/* Footer Info */}
          <div className="mt-auto space-y-2 text-center">
            {petData.memorialMessage && (
              <p className="text-white/80 text-xs italic px-4 line-clamp-2">
                "{petData.memorialMessage}"
              </p>
            )}
            
            <div className="text-white/60 text-xs space-y-1">
              <div>{formatDate(petData.dateOfPassing)}</div>
              <div className="flex items-center justify-center gap-2">
                <span>{moonPhase.emoji}</span>
                <span>{moonPhase.phase}</span>
              </div>
              <div className="text-white/40 text-[10px]">
                {coords.ra} | {coords.dec}
              </div>
              <div className="text-white/40 text-[10px]">
                Memorial Star: {memorialStar.name} • {memorialStar.constellation}
              </div>
            </div>

            {petData.ownerName && (
              <div className="text-white/50 text-xs pt-2">
                With love from {petData.ownerName}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Star Info */}
      <div className="mt-4 p-4 bg-card/50 rounded-lg border text-sm space-y-2">
        <h3 className="font-medium text-foreground">Memorial Star Details</h3>
        <div className="grid grid-cols-2 gap-2 text-xs text-muted-foreground">
          <div>
            <span className="font-medium">Star:</span> {memorialStar.name}
          </div>
          <div>
            <span className="font-medium">Constellation:</span> {memorialStar.constellation}
          </div>
          <div>
            <span className="font-medium">Magnitude:</span> {memorialStar.magnitude.toFixed(2)}
          </div>
          <div>
            <span className="font-medium">Type:</span> {memorialStar.spectralType}
          </div>
        </div>
      </div>
    </div>
  );
};
