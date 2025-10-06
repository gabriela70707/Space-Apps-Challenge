import { Footer } from "../../Components/Footer/Footer";
import { useEffect } from "react";
import styles from "./Third-Page.module.css";
import question from '../../assets/question.png';
import Button from "../../Components/Button/Button";
import { Link } from "react-router-dom";

export function ThirdPage() {
	useEffect(() => {
		// Garante que ao entrar nesta página, o scroll volte ao topo
		window.scrollTo(0, 0);
	}, []);
	return (
		<>
			<main className={styles.main}>
				<section className={styles.section_first}>
					<h1>Journey Ends...</h1>
					<p>You traveled with me, Coronalda, all the way from the Sun to Earth and discovered how powerful and fascinating Space Weather can be.</p>
				</section>
				<section className={styles.section_second}>
					<div className={styles.divBalaoFala}>
						<div className={styles.balaofala}>
							<img src={question} alt="Question" />
							<p>Any questions left? Talk to Astro, our Astronaut Buddy!</p>
							<Link to="/astro">
								<Button text="Talk to Astro" />
							</Link>
						</div>
					</div>
				</section>
			</main>
			<Footer />
		</>
	)
}