import { Link } from "react-router-dom";

const CategoryType = () => {
  return (
    <nav className="Navigation">
      <ul className="List-ul">
        <Link to={`/category/procesador`} className="Link">
          Procesador
        </Link>
        <Link to={`/category/motherboard`} className="Link">
          Motherboard
        </Link>
        <Link to={`/category/gabinete`} className="Link">
          Gabinete
        </Link>
        <Link to={`/category/pc`} className="Link">
          PCs
        </Link>
      </ul>
    </nav>
  );
};

export default CategoryType;
