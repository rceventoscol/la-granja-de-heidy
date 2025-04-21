
import { Link } from "react-router-dom";

export const Logo = ({ onClick }: { onClick?: () => void }) => {
  return (
    <Link to="/" className="flex items-center space-x-4" onClick={onClick}>
      <img
        src="/lovable-uploads/7ef70d47-84b6-4535-8d05-2d6d174e8616.png"
        alt="La Granja De Heidy"
        className="h-20 w-auto" // Increased from h-14 to h-20
      />
      <span className="font-montserrat font-bold text-3xl text-organic-green">
        La Granja De Heidy
      </span>
    </Link>
  );
};
