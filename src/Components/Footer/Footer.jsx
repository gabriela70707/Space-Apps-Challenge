import Style from "./Footer.module.css";
import logo from '../../assets/logo.png';

export function Footer() {
	return (
		<footer className={Style.footer}>
			<section>
				<img src={logo} alt="Logo" />
				<nav>
					<p>For more information on the topic</p>
					<ol>
						<li><a href="https://www2.inpe.br/climaespacial/portal/pt/" target="_blank">Brazilian Space Weather Study and Monitoring Program</a></li>
						<li><a href="https://svs.gsfc.nasa.gov/12640/" target="_blank">How Solar Flares Affect Earth</a></li>
						<li><a href="https://svs.gsfc.nasa.gov/12593/" target="_blank">Human Activity Impacted Space Weather</a></li>
						<li><a href="https://svs.gsfc.nasa.gov/10959/" target="_blank">NASA | Scientists Answer Top Space Weather Questions</a></li>
					</ol>
				</nav>
				<nav>
					<p>For more information on the topic</p>
					<ol>
						<li><a href="https://science.nasa.gov/sun/solar-storms-and-flares/" target="_blank">Solar Storms and Flares - NASA</a></li>
						<li><a href="https://www.asc-csa.gc.ca/eng/sciences/space-weather.asp" target="_blank">Space Weather over Canada</a></li>
						<li><a href="https://svs.gsfc.nasa.gov/11179/" target="_blank">Space Weather Vocabulary</a></li>
						<li><a href="https://www.youtube.com/watch?v=oOXVZo7KikE" target="_blank">X-Class: A Guide to Solar Flares</a></li>
					</ol>
				</nav>
			</section>
			<section>
				<p>Project developed for the Hackathon Space Apps Challenge</p>
			</section>
		</footer>
	)
}