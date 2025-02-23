import { useState } from "react";
import "../CSS/pages.css";

function Homepage() {
  const [clicked, setClicked] = useState(false);

  const handleClick = () => {
    setClicked((prev) => !prev);
  };

  return (
    <div>
      <h2 className="title">Home</h2>
      <div className="grid-parent">
        <div className="containerAbout size-1">
          <h1 className="title titleAbout">About me</h1>
          <p className="text ">Olá, chamo-me Diogo  👋<br /> <br />
            Sou estudante de Engenharia Informática na Universidade do Minho e
            desde o 9º ano que a programação desperta a minha curiosidade. Vivo
            em Braga, na freguesia de Palmeira, e gosto de dividir o meu tempo
            entre os estudos e outras atividades que me motivam. Para além da
            programação, correr é uma das minhas grandes paixões, ajudando-me a
            manter o equilíbrio entre o foco e o bem-estar.
          </p>
          <img src="Diogo.jpg" className="imagem" alt="Diogo" />
        </div>

        <div className="row">
          <div className="container size-2">
            <h2 className="title">Interests in low-level programming</h2>
            <p className="text">
              A programação sempre me fascinou, especialmente quando envolve
              entender como as coisas funcionam nos bastidores. Tenho um grande
              interesse por low-level programming, pois gosto da ideia de
              otimizar código e trabalhar próximo da arquitetura do hardware,
              explorando linguagens como C e Assembly.
            </p>
          </div>
          <div className="container size-2">
            <h2 className="title">Interests in learning CUDA</h2>
            <p className="text">
              Hoje me dia quero aprender mais sobre CUDA, pois acho interessante
              como é possível utilizar GPUs para acelerar cálculos paralelos.
              Embora ainda não tenha começado a estudar a fundo, é uma área que
              me desperta bastante curiosidade e que pretendo explorar no
              futuro.
            </p>
          </div>
          <div className="container size-2">
            <h2 className="title">
              Interests in learning more about infrastructure
            </h2>
            <p className="text">
              Também tenho um interesso por infraestrutura, desde a configuração
              e gestão de servidores até a escalabilidade de sistemas.
              Compreender como grandes aplicações são implementadas e mantidas
              embora seja algo que ainda n tenha tido oportunidade de explorar
              tanto quanto queria.
            </p>
          </div>
          <div className="container size-2">
            <h2 className="title">Interests in developing apps and websites</h2>
            <p className="text">
              E como não podia faltar, como muitos programadores, também tenho
              curiosidade em desenvolver aplicações e sites, explorando
              diferentes tecnologias e frameworks para criar interfaces
              funcionais e intuitivas. Seja no desenvolvimento web ou mobile,
              gosto da ideia de construir algo do zero e ver o resultado final a
              funcionar.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Homepage;
