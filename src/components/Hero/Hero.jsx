import React from 'react';
import { getImageUrl } from "../../utils";
import styles from "./Hero.module.css";

export const Hero = () => {

    // Función para manejar la descarga de ambos archivos
    const handleDownload = () => {
        // Rutas de los archivos a descargar
        const file1 = '/assets/CV/RubenCV.pdf';  // CV
        const file2 = '/assets/CV/RubenCoverLetter.pdf';  // CoverLetter

        // Crear un enlace invisible para el primer archivo y disparar la descarga
        const link1 = document.createElement('a');
        link1.href = file1;
        link1.download = 'RubenCV.pdf'; // Nombre del archivo descargado
        link1.click();

        // Crear un enlace invisible para el segundo archivo y disparar la descarga
        const link2 = document.createElement('a');
        link2.href = file2;
        link2.download = 'RubenCoverLetter.pdf'; // Nombre del archivo descargado
        link2.click();
    };

    return (
        <section className={styles.cont}>
            <div className={styles.content}>
                <h1 className={styles.title}>Hi, I´m Ruben</h1>
                <p className={styles.description}>I´m a Full stack developer that´s currently starting his career into the programming world.</p>
                <p className={styles.description}>Reach out if you´d like to learn more!</p>
                {/* Envia un email al mail indicado */}
                <a href="mailto:codedeveloperr@gmail.com" className={styles.contactBtn}>Contact Me</a>

                {/* Usamos onClick para ejecutar la función de descarga */}
                <a href="#" className={styles.cvBtn} onClick={handleDownload}>
                    Download my CV and Cover Letter
                </a>
            </div>

            <img src={getImageUrl("hero/heroImage.png")} alt="Image of me" className={styles.Heroimg} />

            <div className={styles.topBlur}></div>
            <div className={styles.bottomBlur}></div>
        </section>
    );
};