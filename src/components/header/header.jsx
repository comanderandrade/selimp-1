import React, { useState, useEffect, useRef } from 'react';
import styles from './header.module.css';

function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [menuActive, setMenuActive] = useState(false);
  const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth <= 770); // Detectar se a tela é pequena

  // Detectar rolagem da página
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Atualizar estado ao redimensionar a janela
  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth <= 770); // Atualiza para true ou false
      if (window.innerWidth > 770 && menuActive) {
        setMenuActive(false); // Fecha o menu ao sair do modo "small screen"
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [menuActive]);

  // Fecha o menu ao clicar fora dele
  const menuRef = useRef(null);
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setMenuActive(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Alternar o menu
  const toggleMenu = () => {
    setMenuActive((prev) => !prev);
  };

  return (
    <header className={`${styles.header} ${isScrolled ? styles.scrolled : ''}`}>
      <a href="#home">
        <img
          className={styles.logo}
          src="https://drive.google.com/uc?id=14jtTZVYaSNAlFUTOGoGfwg83ilLzhPbX"
          alt="Logo Selimp"
        />
      </a>
      <nav className={styles.nav} ref={menuRef}>
        {/* Botão de Hambúrguer (só aparece em telas pequenas) */}
        {isSmallScreen && (
          <div className={styles.menuToggle} onClick={toggleMenu}>
            {menuActive ? '✖' : '☰'}
          </div>
        )}
        {/* Menu Responsivo */}
        <ul className={`${menuActive ? styles.active : ''} ${styles.menu}`}>
          <li><a href="#home" onClick={toggleMenu}>Home</a></li>
          <li><a href="#nossos-servicos" onClick={toggleMenu}>Nossos Serviços</a></li>
          <li><a href="#sobre" onClick={toggleMenu}>Sobre</a></li>
          <li><a href="#contato" onClick={toggleMenu}>Contato</a></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
