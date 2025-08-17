import { Link } from "react-router-dom";
const Header = () => {
  return (
    <>
      <div className="container">
        <nav className="navigation">
          <Link to={"/"} className="logo">Ticketing App</Link>
          <Link to={"/add-ticket"} className="btn">Add New</Link>
        </nav>
      </div>
    </>
  );
};

export default Header;
