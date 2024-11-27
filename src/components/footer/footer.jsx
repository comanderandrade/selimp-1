import React from 'react';
import styles from './footer.module.css';

function Footer() {
  return (
    <footer className={styles.footer}>
      {/* Seção de Informações */}
      <div className={styles.info}>
        <div className={styles.infoItem}>
          <span role="img" aria-label="Phone" className={styles.icon}>
            📞
          </span>
          <p>21 2605-5923 | 21 2614-0308</p>
        </div>
        <div className={styles.infoItem}>
          <span role="img" aria-label="Email" className={styles.icon}>
            ✉️
          </span>
          <p>contato@selimp.com.br</p>
        </div>
        <div className={styles.infoItem}>
          <span role="img" aria-label="Location" className={styles.icon}>
            📍
          </span>
          <p>São Gonçalo - RJ</p>
        </div>
        <div className={styles.socialIcons}>
          <a href="#http://instagram.com/selimprj" aria-label="Instagram">
            <img
              src="https://via.placeholder.com/24/FFFFFF?text=I"
              alt="Instagram"
            />
          </a>
          <a href="https://www.facebook.com/people/Selimp/61564228050595/" aria-label="Facebook">
            <img
              src="https://via.placeholder.com/24/FFFFFF?text=F"
              alt="Facebook"
            />
          </a>
        </div>
      </div>

      {/* Direitos Autorais */}
      <div className={styles.copyright}>
        <p>SELIMP © 1999. Site Criado por Andarilho Studio / B.A Tech Fast</p>
      </div>
    </footer>
  );
}

export default Footer;
