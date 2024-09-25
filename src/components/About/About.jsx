import React from "react";
import styles from "./About.module.css";
import { getImageUrl } from "../../utils";

export const About = () => {
    return (
        <section className={styles.container} id="about">
            <h2 className={styles.title}>About</h2>
            <div className={styles.content}>
                <img src={getImageUrl("about/aboutImage.png")} 
                alt="Me sitting with a laptop" 
                className={styles.aboutImage}
                />
                <ul className={styles.aboutItems}>
                    <li className={styles.aboutItem}>
                        <img src={getImageUrl("about/cursorIcon.png")} 
                        alt="Cursor icon" />
                        <div className={styles.aboutItemText}>
                            <h3>Machine Learning Engineer</h3>
                            <p>I'm a ML Engineer with experience 
                                in AI models for NLP, classification, and regression tasks.</p>
                        </div>
                    </li>
                    <li className={styles.aboutItem}>
                        <img src={getImageUrl("about/serverIcon.png")} 
                        alt="Server icon" />
                        <div className={styles.aboutItemText}>
                            <h3>Back-end Developer</h3>
                            <p>I have experience building fast and optimized back end systems and APIs.</p>
                        </div>
                    </li>
                    <li className={styles.aboutItem}>
                        <img src={getImageUrl("about/cursorIcon.png")} 
                        alt="UI icon" />
                        <div className={styles.aboutItemText}>
                            <h3>Front-end Developer</h3>
                            <p>I'm a front-end developer with experience in building responsive and optimzed sites.</p>
                        </div>
                    </li>
                </ul>
            </div>
        </section>
    );
}