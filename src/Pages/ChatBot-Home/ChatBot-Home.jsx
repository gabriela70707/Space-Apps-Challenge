import styles from './ChatBot-Home.module.css';
import { Link } from 'react-router-dom';
import Button from '../../Components/Button/Button'
import Earth from '../../Components/Earth';

export function ChatBotHome() {
    return (
        <main className={styles.main}>

            <section className={styles.section}>
                <h1>Astro</h1>
                <hr />
                <p>Astro is that old friend of yours, full of knowledge to share. Ask him anything you want. 
                </p>
            <Link to="/astro-chat"><Button text={"Talk to Astro"}/></Link>
            </section>

            <Earth />

        </main>
    );
}
