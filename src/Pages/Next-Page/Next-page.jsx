import styles from './Next-Page.module.css';
import { Link } from 'react-router-dom';
import star from '../../assets/Star.png';
import img from '../../assets/space-icon.png';
import Astro from '../../assets/AstroWithDialog.png';
import { useEffect, useRef, useState } from 'react';

export function NextPage() {
    const secondSection = useRef(null);
    const [countdown, setCountdown] = useState(10);

    useEffect(() => {
        const interval = setInterval(() => {
            setCountdown(prev => {
                if (prev <= 1) {
                    clearInterval(interval);
                    return 0;
                }
                return prev - 1;
            });
        }, 1000);

        const timer = setTimeout(() => {
            secondSection.current?.scrollIntoView({ behavior: 'smooth' });
        }, 100000);

        return () => {
            clearInterval(interval);
            clearTimeout(timer);
        } 
    }, []);

    return (
        <main className={styles.main}>

            <img src={star} alt="Star" />
            <section className={styles.firstSection}>
                <div className="">
                    <p>
                        Get into a unbelievable journey to find out how these “Sneezes” travel through
                        the space and how they can affect our day here, in the Earth. Let’s meet Coronalda,
                        a very Spacial Wave!
                    </p>
                    <p>Next part in: {countdown}s</p>
                </div>

                {/* tem que colocar a setinha pra baixo aqui */}
            </section>

            <div className={styles.earthImg}>
                <img src={img} alt="Space Icon"/>
            </div>

            <section ref={secondSection}>
                <div><img src={Astro} alt="Astro"/></div>
                <h2>What's your name?</h2>
                <input type="text" placeholder="Type your name here..."/>
                <button><Link to="/First-Part">Let's Start</Link></button>
            </section>

        </main>
    );
}
