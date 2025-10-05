import { useState, useRef } from "react";
import styles from "../Historia/Historia.module.css";
import { Link } from 'react-router-dom';
import Button from "../../Components/Button/Button";

export function Historia() {
  const [terraVisivel, setTerraVisivel] = useState(false);
  const [coronaldaTerminou, setCoronaldaTerminou] = useState(false);
  const [astroTerminou, setAstroTerminou] = useState(false); // Novo estado
  const [indiceCoronalda, setIndiceCoronalda] = useState(0);
  const [indiceAstro, setIndiceAstro] = useState(0);

  const astroSectionRef = useRef(null);
  const terraRef = useRef(null);

  const nome = localStorage.getItem("userName");

  const falasCoronalda = [
    `Olá ${nome}, eu sou a Coronalda! Nasci em uma mancha solar no nosso Sol quentinho. Pense em uma mancha solar como um lugar onde a energia do Sol fica toda enrolada, como um elástico.`,
    "Às vezes, esse elástico se estica tanto que... POW! Ele arrebenta! Foi assim que eu nasci, de uma explosão gigante chamada Ejeção de Massa Coronal, ou CME.",
    "Sou uma nuvem gigante de partículas e energia, e estou pronta para a minha maior aventura: viajar até a Terra!"
  ];

  const falasAstro = [
    "E lá foi a Coronalda, viajando super-rápida pelo espaço!",
    "Ela é tão veloz que levaria apenas alguns dias para chegar ao nosso planeta.",
    "No caminho, ela dança com o vento solar, um fluxo constante de partículas que o Sol sopra o tempo todo.",
    "A Terra ainda está longe, mas eu já consigo ver um pontinho azul brilhante...",
    "Cheguei! Mas... o que é isso? A Terra tem um escudo mágico chamado campo magnético. Ele nos protege da maior parte da minha energia. Quando eu encontro esse escudo, a mágica acontece! Parte da minha energia desliza por ele em direção aos polos Norte e Sul do planeta. É como um grande show de luzes!"
  ];

  // Avançar falas da Coronalda
  const avancarCoronalda = () => {
    if (indiceCoronalda < falasCoronalda.length - 1) {
      setIndiceCoronalda(indiceCoronalda + 1);
    } else {
      setCoronaldaTerminou(true);
      setTimeout(() => {
        astroSectionRef.current?.scrollIntoView({ behavior: "smooth" });
      }, 600);
    }
  };

  // Avançar falas do Astro
  const avancarAstro = () => {
    if (indiceAstro < falasAstro.length - 1) {
      setIndiceAstro(indiceAstro + 1);
    } else {
      setTerraVisivel(true);
      setAstroTerminou(true); // Conteúdo só aparece depois
      setTimeout(() => {
        terraRef.current?.scrollIntoView({ behavior: "smooth", block: "center" });
      }, 100);
    }
  };

  return (
    <div className={styles.conteudoMain}>
      {/* Seção da Coronalda */}
      <div className={styles.divImgCoronalda}>
        <figure>
          <img
            src="../src/assets/Coronalda.png"
            alt="image-Coronalda"
            className={styles.imgCoronalda}
          />
        </figure>

        <div className={styles.divBalaoFala}>
          <h2 className={styles.title}>História da Coronalda</h2>
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
                src="../src/assets/AstroWithDialog.png"
                alt="astro-personagem"
              />
            </figure>

            {terraVisivel && (
              <div ref={terraRef} className={`${styles.divImageTerra} ${styles.slideIn}`}>
                <figure>
                  <img
                    src="../src/assets/TerraComProtecao.png"
                    alt="terra-image"
                    className={styles.terraComProtecao}
                  />
                </figure>
              </div>
            )}
          </div>
        </div>
      )}

      {/* Conteúdo só aparece depois do Astro terminar */}
      {astroTerminou && (
        <div className={styles.sessaoAuroraBoreal}>
          <div className={styles.sessao1}>
            <div className={styles.dialogoAstro}>
              <div className={styles.divImageAstro}>
                <figure>
                  <img src="../src/assets/imagemAstro2.png" alt="Astro2" />
                </figure>
              </div>
              <div className={styles.dialogoAStro2}>
                <p>
                  Essa interação cria as luzes mais lindas que você pode imaginar: as Auroras Boreal e Austral! Mas a minha chegada também pode causar algumas coisinhas interessantes na Terra.
                </p>
              </div>
            </div>
            <div className={styles.imgAuroraBoreal}>
              <figure>
                <img src="../src/assets/auroraBorealFundoTransparente.png" alt="imagem-aurora-boreal" className={styles.imgAuroraBoreal} />
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
