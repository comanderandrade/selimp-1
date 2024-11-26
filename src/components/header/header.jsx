
import styles from './header.module.css';
function Header() {
  return (
    <header className={styles.header}>
      <img className={styles.logo} src="https://drive.google.com/file/d/14jtTZVYaSNAlFUTOGoGfwg83ilLzhPbX/view?usp=sharing" alt="Logo Selimp" />
      <nav className={styles.nav}>
        <ul>
          <li>
            <a href="#home">Home</a>
          </li>
          <li>
            <a href="#nossos-servicos">Nossos Serviços</a>
          </li>
          <li>
            <a href="#sobre">Sobre</a>
          </li>
          <li>
            <a href="#contato">Contato</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
export default Header;
