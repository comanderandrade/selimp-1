import React from 'react';
import styles from './contato.module.css';
import atendente from "../../assets/atendente.png";
import button from "../../assets/button.png";
const Contato = () => {
    return (
        <div className={styles.container}>
            <div className={styles.wpp}>
                <img src={atendente} alt="" />
                <h2>Fale agora<br />com um especialista</h2>
                <a href="">
                    <img src={button} alt="" />
                </a>
            </div>

            <div className={styles.espacer}>
                <p></p>
            </div>

            <form className={styles.form}>
                <div className={styles.formGroup}>
                    <label htmlFor="name">Nome:</label>
                    <input type="text" id="name" name="name" required />
                </div>

                <div className={styles.formGroup}>
                    <label htmlFor="email">E-mail:</label>
                    <input type="email" id="email" name="email" required />
                </div>

                <div className={styles.formGroup}>
                    <label htmlFor="telefone">Telefone:</label>
                    <input type="tel" id="telefone" name="telefone" required />
                </div>

                <div className={styles.formGroup}>
                    <label htmlFor="message">Mensagem:</label>
                    <textarea id="message" name="message" rows="4" required></textarea>
                </div>

                <button type="submit" className={styles.submitBtn}>Enviar</button>
            </form>
        </div>
    );
};

export default Contato;
