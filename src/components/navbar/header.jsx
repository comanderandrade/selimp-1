

function Header() {
  return (
    <header>
      <h1 className="navbar-header">Meu App</h1>
      <nav className="navbar navbar-inverse">
        <div className="container-fluid">
          <div className="navbar-header">
            <a className="navbar-brand" href="#home">Selimp</a>
          </div>
          <ul className="nav navbar-nav">
            <li className="active"><a href="#home">Home</a></li>
            <li><a href="#o-que-fazemos">Link</a></li>
            <li><a href="#sobre-nos">Link</a></li>
          </ul>
          <button className="btn btn-danger navbar-btn">Button</button>
        </div>
      </nav>
    </header>
  );
}
export default Header;
