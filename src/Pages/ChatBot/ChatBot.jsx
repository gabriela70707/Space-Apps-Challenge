import styles from './ChatBot.module.css';
import Coronalda from '../../assets/Coronalda.png'
import { Link } from 'react-router-dom';
import Button from '../../Components/Button/Button'
import Earth from '../../Components/Earth';

export function ChatBot() {
    return (
        <main className={styles.main}>

            <section className={styles.section}>
                <section className={styles.character}>
                    <button>voltar</button>
                    <img src={Coronalda} alt="character image" />
                </section>

                <section className={styles.chat}>
                    <p>dahjsdhasjkdhas</p>
                    <p>dahjsdhasjkdhas</p>
                    <p>dahjsdhasjkdhas</p>
                    <p>dahjsdhasjkdhas</p>
                </section>
            </section>

        </main>
    );
}
