import styles from './Inicial.module.css';
import { Link } from 'react-router-dom';
import Button from '../../Components_FIX/Button/Button'
import Earth from '../../Components_FIX/Earth';

export function Inicial() {
    return (
        <main className={styles.main}>

            <section className={styles.section}>
                <h1>Explore the Space</h1>
                <hr />
                <p>Did you know that the sun, our giant star, 
                    sometimes has energy “burps” and “sneezes”? 
                    It is called Space Weather! 
                </p>
            <Link to="/next-page"><Button text={"Continue"}/></Link>
            </section>

            <Earth />

        </main>
    );
}
