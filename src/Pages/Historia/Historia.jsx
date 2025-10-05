import { useState, useRef, useEffect } from "react";
import styles from "../Historia/Historia.module.css";

export function Historia() {
  // 🧠 Falas da Coronalda
  const falasCoronalda = [
    "Olá *insira o nome*, eu sou a Coronalda! Nasci em uma mancha solar no nosso Sol quentinho. Pense em uma mancha solar como um lugar onde a energia do Sol fica toda enrolada, como um elástico.",
    "Às vezes, esse elástico se estica tanto que... POW! Ele arrebenta! Foi assim que eu nasci, de uma explosão gigante chamada Ejeção de Massa Coronal, ou CME.",
    "Sou uma nuvem gigante de partículas e energia, e estou pronta para a minha maior aventura: viajar até a Terra!"
  ];

  // 🧠 Falas do Astro
  const falasAstro = [
    "E lá foi a Coronalda, viajando super-rápida pelo espaço!",
    "Ela é tão veloz que levaria apenas alguns dias para chegar ao nosso planeta.",
    "No caminho, ela dança com o vento solar, um fluxo constante de partículas que o Sol sopra o tempo todo.",
    "A Terra ainda está longe, mas eu já consigo ver um pontinho azul brilhante..."
  ];

  // Índices das falas
  const [indiceCoronalda, setIndiceCoronalda] = useState(0);
  const [indiceAstro, setIndiceAstro] = useState(0);

  // Estado para controlar se Coronalda terminou
  const [coronaldaTerminou, setCoronaldaTerminou] = useState(false);

  // Referência para a parte do Astro (para scroll automático)
  const astroSectionRef = useRef(null);

  // 👉 Avançar falas da Coronalda
  const avancarCoronalda = () => {
    if (indiceCoronalda < falasCoronalda.length - 1) {
      setIndiceCoronalda(indiceCoronalda + 1);
    } else {
      // Quando terminar as falas → muda estado e scrolla para Astro
      setCoronaldaTerminou(true);
      setTimeout(() => {
        astroSectionRef.current?.scrollIntoView({ behavior: "smooth" });
      }, 600);
    }
  };

  // 👉 Avançar falas do Astro
  const avancarAstro = () => {
    if (indiceAstro < falasAstro.length - 1) {
      setIndiceAstro(indiceAstro + 1);
    } else {
      console.log("História completa 🎉");
      // Aqui você pode redirecionar para próxima tela, habilitar um botão, etc.
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
          </div>
        </div>
      )}

      <div className={styles.divImageTerra}>
        <figure>
            <img src="../src/assets/space-icon.png" alt="space-icon" className={styles.imgTerra}/>
        </figure>
      </div>
    </div>
  );
}
