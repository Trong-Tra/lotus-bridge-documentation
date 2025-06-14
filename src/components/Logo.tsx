
import { Flower } from "lucide-react";
import { Link } from "react-router-dom";

export const Logo = () => {
  return (
    <Link to="/" className="flex items-center gap-3">
      <div className="w-8 h-8 rounded-full lotus-gradient flex items-center justify-center">
        <Flower className="w-4 h-4 text-white" />
      </div>
      <span className="font-bold text-lg bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
        Lotus Bridge
      </span>
    </Link>
  );
};
