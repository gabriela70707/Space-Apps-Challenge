import styles from './Inicial.module.css';
import img from '../../assets/space-icon.png';
import { Link } from 'react-router-dom';

export function Inicial() {
    return (
        <>
            <main className={styles.main}>

            <section className={styles.section}>
                <h1>Explore the Space</h1>
                <p>Did you know that the sun, our giant star, 
                    sometimes has energy “burps” and “sneezes”? It is called Space Weather! 
                </p>
                <button><Link to="/next-page">CONTINUE</Link></button>
            </section>

            <img src={img} alt="Space Icon"/>

            </main>
        </>
    );
}
