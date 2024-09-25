import React from 'react';
import { getImageUrl } from '../../utils';
import styles from "./Hero.module.css";

export const Hero = () => {
    return (
        <section className={styles.container}>
        <div className={styles.content}>
            <h1 className={styles.title}>Hi, I'm Ruaa</h1>
            <p className={styles.description}>I'm an aspiring machine learning engineer in 
                my third year at UC Berkeley studying data science. 
                Reach out if you'd like to learn more!</p>
                <a href="mailto:rushar@berkeley.edu" className={styles.contactBtn}>Contact Me</a>
        </div>
        <img src={getImageUrl("hero/heroImage.png")} alt="Hero image of me" className={styles.heroImg}/>
            <div className={styles.topBlur}/>
            <div className={styles.bottomBlur}/>
    </section>
    );

};
