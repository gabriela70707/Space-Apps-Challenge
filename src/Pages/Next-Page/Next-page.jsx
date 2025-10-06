import Astro from '../../../public/images/AstroWithDialog.png';
import Button from '../../Components/Button/Button';
import styles from './Next-Page.module.css';

import { Link, useNavigate } from 'react-router-dom';
import { useEffect, useRef, useState } from 'react';
// import star from '../../assets/Star.png';
// import img from '../../assets/space-icon.png';

export function NextPage() {
    const secondSection = useRef(null);
    const [countdown, setCountdown] = useState(10);
    const [name, setName] = useState("");
    const [mensagem, setMensagem] = useState("");

    const navigate = useNavigate();

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
        }, 10000);

        return () => {
            clearInterval(interval);
            clearTimeout(timer);
        }
    }, []);

    const handleStart = () => {
        if (name.trim() === '') {
            setMensagem('Please enter your name before proceeding.');
            return;
        }

        localStorage.setItem('userName', name);
        navigate('/Historia');
    }

    return (
        <main className={styles.main}>

            {/* <img src={star} alt="Star" /> */}
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

            {/* <div className={styles.earthImg}>
                <img src={img} alt="Space Icon"/>
            </div> */}

            <section className={styles.secondSection} ref={secondSection}>
                <div>
                    <img src={Astro} alt="Astro" />
                </div>
                <div className={styles.texts}>
                    <h2>What's your name?</h2>
                    <input
                        type="text"
                        placeholder="Type your name here..."
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        onKeyDown={(e) => {
                            if (e.key === 'Enter') {
                                handleStart();
                            }
                        }}
                    />

                    <Button text={"Let's Start"} functionOnClick={handleStart} />
                    {mensagem &&
                        <p className={styles.mesageError}>{mensagem}</p>
                    }
                </div>
            </section>
        </main>
    );
}
