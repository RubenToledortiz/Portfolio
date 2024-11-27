import React from 'react';
import skills from "../../data/skills.json"
import { getImageUrl } from "../../utils"
import history from "../../data/history.json"
import styles from "./Experience.module.css"

export const Experience = () => {
    return (
        <section className={styles.container} id="Experciente">
            <h2 className={styles.title}>Experience</h2>
            <div className={styles.content}>
                <div className={styles.skills}>
                    {skills.map((skill, id) => {
                        return (
                            <div key={id} className={styles.skill}>
                                <div className={styles.skillImageContainer}>
                                    <img
                                        src={getImageUrl(skill.imageSrc)} //Agarramos la imagen segun la ruta del fichero JSON
                                        alt={skill.title}
                                    />
                                </div>
                                <p>{skill.title}</p>
                            </div>
                        );
                    })
                    }</div>
                <ul className={styles.history}>
                    {
                        history.map((historyItem, id) => {
                            return <li key={id} className={styles.historyItem}>
                                <img
                                    src={getImageUrl(historyItem.imageSrc)}
                                    alt={`${historyItem.organisation} logo`}
                                />
                                <div className={styles.historyItemDetails}>
                                    <h3>{`${historyItem.role}, ${historyItem.organisation}`}</h3>  {/* Cogemos todos los valores de las propiedades de un menu JSON que conitene los datos*/}
                                    <p>{`${historyItem.startDate} - ${historyItem.endDate}`}</p> 
                                    <ul>{historyItem.experiences.map((expercience, id) => {
                                        return <li key={id}>{expercience}</li>;

                                    })}</ul>
                                </div>
                            </li>
                        })
                    }
                </ul>
            </div>
        </section>
    );
};