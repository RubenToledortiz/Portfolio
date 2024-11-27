import React from 'react';
import { getImageUrl } from "../../utils"
import styles from "./About.module.css"

export const About = () => {

    return (
        <section className={styles.container} id='About'>

            <h2 className={styles.title}>About</h2>

            <div className={styles.content}>
                <img
                    src={getImageUrl("about/aboutImage.png")}
                    alt="Me sitting with laptop"
                    className={styles.aboutImage}
                />
                <ul className={styles.aboutItems}>
                    <li className={styles.aboutItem}>
                        <img
                            src={getImageUrl("about/cursorIcon.png")} //Agarramos la imagen segun la ruta
                            alt="Cursor icon"
                        />
                        <div className={styles.aboutItemText}>
                            <h3>Full stack Developer</h3>
                            <p>
                                I am 22 years old guy os looking for new challenges.
                                I am at a pivotal  moment in my life, seeking to make a signicant leap both professionally and personally.
                            </p>
                        </div>
                    </li>

                    <li className={styles.aboutItem}>
                        <img
                            src={getImageUrl("about/serverIcon.png")}
                            alt="Server icon"

                        />
                        <div className={styles.aboutItemText}>
                            <h3>Backend Developer</h3>
                            <p>
                                I have expericence developing fast and optimised API´s.
                            </p>
                        </div>
                    </li>

                    <li className={styles.aboutItem}>
                        <img
                            src={getImageUrl("about/cursorIcon.png")}
                            alt="UI icon"
                        />
                        <div className={styles.aboutItemText}>
                            <h3>UI Designer</h3>
                            <p>
                                I have designed multiple landing pages.
                            </p>
                        </div>
                    </li>
                </ul>
            </div>
        </section>
    );
};