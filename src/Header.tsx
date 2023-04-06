import logo from './joelmovielogo.png';

function Header(props: any) {
  return (
    <header className="row">
      <div className="col-4">
        <img src={logo} alt="logo"></img>
      </div>
      <div className="col">
        <h3>{props.slogan}</h3>
      </div>
    </header>
  );
}

export default Header;
