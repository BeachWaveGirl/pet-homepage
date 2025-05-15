
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { AspectRatio } from "@/components/ui/aspect-ratio";

interface CategoryCardProps {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  link: string;
}

const CategoryCard = ({ id, title, description, imageUrl, link }: CategoryCardProps) => {
  return (
    <Card className="overflow-hidden transition-all hover:shadow-lg">
      <Link to={link} className="block h-full">
        <AspectRatio ratio={16/9} className="bg-gray-100">
          <img
            src={imageUrl}
            alt={title}
            className="object-cover w-full h-full"
          />
        </AspectRatio>
        <CardContent className="p-4">
          <h3 className="text-xl font-medium mb-2 font-playfair">{title}</h3>
          <p className="text-sm text-gray-600">{description}</p>
        </CardContent>
      </Link>
    </Card>
  );
};

export default CategoryCard;
