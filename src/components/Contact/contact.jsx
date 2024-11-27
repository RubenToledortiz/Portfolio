import React from "react";
import { getImageUrl } from "../../utils"
import styles from "./Contact.module.css"

export const Contact = () => {
    return (
        <footer id="Contact" className={styles.container}>
            <div className={styles.text}>
                <h2>Contact</h2>
                <p>Feel free to reach out!</p>
            </div>
            <ul className={styles.links}>
                <li className={styles.link}> <img src={getImageUrl("contact/emailIcon.png")} alt="email icon" />
                    <a href="mailto:codedeveloperr@gmail.com">codedeveloperr@gmail.com</a>
                </li>
                <li className={styles.link}> <img src={getImageUrl("contact/instagramIcon.png")} alt="Instagram icon" />
                    <a href="https://www.instagram.com/codeveloperr">Instagram</a>
                </li>
                <li className={styles.link}> <img src={getImageUrl("contact/githubIcon.png")} alt="github icon" />
                    <a href="https://github.com/RubenToledortiz">github.com/RubenToledortiz</a>
                </li>
            </ul>

        </footer>
    )
}