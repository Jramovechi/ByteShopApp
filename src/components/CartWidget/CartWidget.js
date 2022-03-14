import "./CartWidget.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartArrowDown } from "@fortawesome/free-solid-svg-icons";

const CartWidget = () => {
  return (
    <div className="Cart mx-2">
      <FontAwesomeIcon icon={faCartArrowDown} />
    </div>
  );
};

export default CartWidget;
