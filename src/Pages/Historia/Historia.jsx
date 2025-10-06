import { useState, useRef, useEffect } from "react";
import styles from "../Historia/Historia.module.css";
import { Link } from 'react-router-dom';
import Button from "../../Components/Button/Button";

export function Historia() {
  const [terraVisivel, setTerraVisivel] = useState(false);
  const [coronaldaTerminou, setCoronaldaTerminou] = useState(false);
  const [astroTerminou, setAstroTerminou] = useState(false);
  const [mostrarAurora, setMostrarAurora] = useState(false);
  const [indiceCoronalda, setIndiceCoronalda] = useState(0);
  const [indiceAstro, setIndiceAstro] = useState(0);

  const astroSectionRef = useRef(null);
  const terraRef = useRef(null);
  const auroraSectionRef = useRef(null);

  const nome = localStorage.getItem("userName");

  const falasCoronalda = [
    `Hello ${nome}, I'm Coronalda! I was born in a sunspot on our warm and cozy Sun. Think of a sunspot as a place where the Sun's energy gets all tangled up, like a rubber band.`,
    "Sometimes, that rubber band stretches so much that... POW! It snaps! That's how I was born—from a giant explosion called a Coronal Mass Ejection, or CME.",
    "I'm a massive cloud of particles and energy, and I'm ready for my greatest adventure: traveling all the way to Earth!"
  ];

  const falasAstro = [
    "And off went Coronalda, speeding through space!",
    "She's so fast that it would take only a few days to reach our planet.",
    "Along the way, she dances with the solar wind—a constant stream of particles that the Sun blows out all the time.",
    "Earth is still far away, but I can already see a bright blue dot...",
    "I've arrived! But... what's this? Earth has a magical shield called the magnetic field. It protects us from most of my energy. When I hit that shield, the magic happens! Part of my energy slides along it toward the planet's North and South Poles. It's like a giant light show!"
  ];

  // Efeito para rolar quando a Coronalda terminar
  useEffect(() => {
    if (coronaldaTerminou) {
      setTimeout(() => {
        astroSectionRef.current?.scrollIntoView({
          behavior: "smooth",
          block: "start"
        });
      }, 500);
    }
  }, [coronaldaTerminou]);

  // Efeito para controlar o fluxo quando o Astro terminar
  useEffect(() => {
    if (astroTerminou) {
      // Primeiro: mostrar a Terra
      setTerraVisivel(true);

      // Esperar a animação da Terra completar (1.5 segundos)
      setTimeout(() => {
        terraRef.current?.scrollIntoView({
          behavior: "smooth",
          block: "center"
        });

        // Esperar mais 3 segundos para ver a Terra, depois mostrar Aurora
        setTimeout(() => {
          setMostrarAurora(true);

          // Esperar um pouco antes de rolar para a Aurora
          setTimeout(() => {
            auroraSectionRef.current?.scrollIntoView({
              behavior: "smooth",
              block: "start"
            });
          }, 800);
        }, 1000);
      }, 500); // Tempo para a animação da Terra
    }
  }, [astroTerminou]);

  // Avançar falas da Coronalda
  const avancarCoronalda = () => {
    if (indiceCoronalda < falasCoronalda.length - 1) {
      setIndiceCoronalda(indiceCoronalda + 1);
    } else {
      setCoronaldaTerminou(true);
    }
  };

  // Avançar falas do Astro
  const avancarAstro = () => {
    if (indiceAstro < falasAstro.length - 1) {
      setIndiceAstro(indiceAstro + 1);
    } else {
      setAstroTerminou(true);
    }
  };

  return (
    <div className={styles.conteudoMain}>
      {/* Seção da Coronalda */}
      <div className={styles.divImgCoronalda}>
        <figure>
          <img
            src="/images/Coronalda.png"
            alt="image-Coronalda"
            className={styles.imgCoronalda}
          />
        </figure>

        <div className={styles.divBalaoFala}>
          <h2 className={styles.title}>Coronalda History</h2>
          <hr className={styles.linhaDivisoria} />
          <div className={styles.balaofala}>
            <p>{falasCoronalda[indiceCoronalda]}</p>
            <button onClick={avancarCoronalda} className={styles.buttonSkip}>
              Skip
            </button>
          </div>
        </div>
      </div>

      {/* Seção do Astro */}
      {coronaldaTerminou && (
        <div className={styles.divPersonagem} ref={astroSectionRef}>
          <div className={styles.balaoFalaPersonagem}>
            <p>{falasAstro[indiceAstro]}</p>
            <button onClick={avancarAstro} className={styles.buttonSkip}>
              Skip
            </button>
          </div>
          <div className={styles.divImgPersonagem}>
            <figure>
              <img
                src="/images/AstroWithDialog.png"
                alt="astro-personagem"
              />
            </figure>

            {terraVisivel && (
              <div ref={terraRef} className={`${styles.divImageTerra} ${styles.slideIn}`}>
                <figure>
                  <img
                    src="/images/TerraComProtecao.png"
                    alt="terra-image"
                    className={styles.terraComProtecao}
                  />
                </figure>
                <figure>
                  <img src="/images/CoronaldaVirada.png" alt="" />
                </figure>
              </div>
            )}
          </div>
        </div>
      )}

      {/* Conteúdo só aparece depois da pausa */}
      {mostrarAurora && (
        <div className={styles.sessaoAuroraBoreal} ref={auroraSectionRef}>
          <div className={styles.sessao1}>
            <div className={styles.dialogoAstro}>
              <div className={styles.divImageAstro}>
                <figure>
                  <img src="../../../public/images/imagemAstro2.png" alt="Astro2" />
                </figure>
              </div>
              <div className={styles.dialogoAStro2}>
                <p>
                  This interaction creates the most beautiful lights you can imagine: the Northern and Southern Auroras!",
                  "But my arrival can also cause a few interesting things on Earth.
                </p>
              </div>
            </div>
            <div className={styles.imgAuroraBoreal}>
              <figure>
                <img src="/images/auroraBorealFundoTransparente.png" alt="imagem-aurora-boreal" className={styles.imgAuroraBoreal} />
              </figure>
            </div>
          </div>
          <div className={styles.buttonEstelar}>
            <Link to="/impact">
              <Button text="CONTINUE" />
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}