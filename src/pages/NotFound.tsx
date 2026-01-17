import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import { ArrowLeft } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center pt-20">
      <div className="text-center">
        <h1 className="text-8xl font-bold text-primary glow-text mb-4">404</h1>
        <p className="text-xl text-muted-foreground mb-8">
          Pagina non trovata
        </p>
        <Link
          to="/"
          className="bg-primary hover:bg-primary/90 text-primary-foreground px-6 py-3 rounded-full font-medium transition-all inline-flex items-center gap-2"
          data-cursor="spotlight"
        >
          <ArrowLeft size={18} />
          Torna alla Home
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
