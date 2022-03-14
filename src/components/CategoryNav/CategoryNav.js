//Import CSS
import "./CategoryNav.css";

//BOOTSTRAP
import { ButtonGroup, DropdownButton, Dropdown } from "react-bootstrap";

//LINK ROUTER DOM
import { Link } from "react-router-dom";

const CategoryType = () => {
  return (
    <ButtonGroup className="mt-5 mb-5">
      <DropdownButton as={ButtonGroup} title="Categorias" id="btnCard">
        <Dropdown.Item eventKey="1">
          <Link to={`/category/pc`} className="Link dropdownItem">
            PCs
          </Link>
        </Dropdown.Item>
        <Dropdown.Item eventKey="2">
          <Link to={`/category/gabinete`} className="Link dropdownItem">
            Gabinete
          </Link>
        </Dropdown.Item>
        <Dropdown.Item eventKey="3">
          <Link to={`/category/procesador`} className="Link dropdownItem">
            Procesador
          </Link>
        </Dropdown.Item>
        <Dropdown.Item eventKey="4">
          <Link to={`/category/motherboard`} className="Link dropdownItem">
            Motherboard
          </Link>
        </Dropdown.Item>
      </DropdownButton>
    </ButtonGroup>
  );
};

export default CategoryType;
