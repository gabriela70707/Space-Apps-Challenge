import { Footer } from "../../Components/Footer/Footer";
import styles from "./Third-Page.module.css";
import question from '../../assets/question.png';
import Button from "../../Components/Button/Button";

export function ThirdPage() {
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
							<p>Any questions left? Talk to Astro, our Astronaut Buddy! 🚀👨‍🚀</p>
							<Link to="/astro">
								<Button text="Talk to Astro" />
							</Link>
						</div>
					</div>
					<img src={question} alt="Question" />
				</section>
			</main>
			<Footer />
		</>
	)
}