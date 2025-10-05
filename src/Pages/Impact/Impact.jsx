import styles from './Impact.module.css';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import Button from '../../Components/Button/Button'
import Card from '../../Components/Card/Card'
import AnaImageCard from '../../assets/ana-card.png'
import PedroImageCard from '../../assets/pedro-card.png'
import JoaoImageCard from '../../assets/joao-card.png'
import LuciaImageCard from '../../assets/lucia-card.png'
import Coronalda from "../../assets/Coronalda.png"

export function Impact() {
    const name = localStorage.getItem("userName");

    const falasAstro = [
        `E você, ${name}? A Coronalda pode te afetar também! Sabe o GPS do celular que sua família usa para viajar? Ele pode ficar um pouquinho impreciso. Os sinais de TV e internet via satélite também podem ter pequenas falhas.`,
        "Mas a melhor parte é que, se você morar bem no norte ou no sul do planeta, pode ter a chance de ver um show de luzes incrível no céu: as auroras! O clima espacial nos mostra como estamos todos conectados ao nosso Sol e ao universo.",
    ];

    const [indiceAstro, setIndiceAstro] = useState(0);


    const avancarAstro = () => {
        if (indiceAstro < falasAstro.length - 1) {
            setIndiceAstro(indiceAstro + 1);
        } else {
            console.log("História completa 🎉");
            setTerraVisivel(true);
            setTimeout(() => {
                terraRef.current?.scrollIntoView({ behavior: "smooth", block: "center" });
            }, 100);
        }
    };

    return (
        <main className={styles.main}>

            <section className={styles.section}>
                <h1>The impact of Coronalda</h1>
                <hr />

                <section className={styles.coronalda}>
                    <img src={Coronalda} alt="Image coronalda" />
                    <div className={styles.balaoFalaPersonagem}>
                        <p>Quer saber como eu afeto a vida de diferentes pessoas? Clique nos cards abaixo para descobrir!</p>
                    </div>
                </section>

                <section className={styles.cards}>
                    <Card backgroundImage={AnaImageCard} title={"Ana"} hoverText={"Hello! I'm Ana. I live and work here at the Space Station. When a Coronalda arrives, we astronauts need to protect ourselves! Its energy is so strong that it can be dangerous for us and for the station's equipment. That's why, when scientists on Earth warn us that a 'wave' like the Coronalda is coming, we move to safer areas of the station and even cancel our spacewalks. It's like preparing for a storm—except it's a space storm!"} />
                    <Card backgroundImage={PedroImageCard} title={"Pedro"} hoverText={"Hi, I'm Pedro! I'm an airplane pilot and I fly routes that pass near the poles. When a Coronalda arrives, radio communication can get really 'static-y' and navigation systems like GPS can become a bit confused. To keep everyone safe, we sometimes need to change our route and fly away from the poles during these space storms. The Coronalda makes us take a different, safer path!"} />
                    <Card backgroundImage={JoaoImageCard} title={"João"} hoverText={"Hey there, folks! I'm João, a farmer. These days, we use technology for almost everything on the farm. My tractor uses GPS to plant seeds in perfectly straight lines, without wasting space. But when a Coronalda messes with satellite signals, my GPS can be off by a few meters! That can throw off my entire planting. That's why we keep an eye on space weather forecasts to know the best time to use our high-precision machines."} />
                    <Card backgroundImage={LuciaImageCard} title={"Lúcia"} hoverText={"Hi, I'm Lúcia. My job is to make sure electricity reaches your home so you can turn on the TV and play video games. The energy from a Coronalda can travel through the long wires of our power grid and cause overloads—like an excess of electricity. This can damage transformers and even cause blackouts in entire cities! When we know a solar storm is on the way, we work to protect the grid and prevent power outages for everyone."} />
                </section>

                <section className={styles.dialog}>
                    <div className={styles.conteudoMain}>
                        <div className={styles.divPersonagem}>
                            <div className={styles.balaoFalaPersonagem}>
                                <p>{falasAstro[indiceAstro]}</p>
                                <button onClick={avancarAstro} className={styles.buttonSkip}>
                                    Skip
                                </button>
                            </div>
                            <div className={styles.divImgPersonagem}>
                                <figure>
                                    <img
                                        src="../src/assets/astronauta.png"
                                        alt="astro-personagem"
                                    />
                                </figure>

                            </div>
                        </div>
                    </div>
                </section>

                <Link to="/end"><Button text={"Continue"} /></Link>
            </section>



        </main>
    );
}
