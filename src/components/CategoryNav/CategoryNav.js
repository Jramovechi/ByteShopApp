import { Link } from "react-router-dom";

const CategoryType = () => {
  return (
    <nav className="Navigation">
      <ul className="List-ul">
        <Link to="/CategoryType" className="Link">
          Procesador
        </Link>
        <Link to="/CategoryType" className="Link">
          Motherboard
        </Link>
        <Link to="/CategoryType" className="Link">
          Gabinete
        </Link>
        <Link to="/CategoryType" className="Link">
          PCs
        </Link>
      </ul>
    </nav>
  );
};

export default CategoryType;
