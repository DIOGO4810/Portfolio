import { useState } from "react";
import "../CSS/pages.css";
import { Icon } from "@iconify/react";
function Projetos() {
  const [clicked, setClicked] = useState(false);

  const handleClick = () => {
    setClicked((prev) => !prev);
  };

  return (
    <div className="body">
      <h1 className="title">Projetos</h1>
      <div className="grid-parent">
        <div className="row">
          <div className="container size-2">
            <h2 className="title">Donkey Kong em haskell</h2>
            <p className="text">
              Este projeto recriou o jogo Donkey Kong usando Haskell e a
              biblioteca Gloss para gráficos. O objetivo foi aprender
              programação funcional, aplicando conceitos como funções puras e
              gestão de estados imutáveis. Utilizou-se Gloss para desenhar
              gráficos 2D e animar o jogo, e o projeto permitiu explorar os
              desafios de implementar jogos sem usar loops imperativos, típicos
              de linguagens imperativas.br
            </p>
            <br />
            <a href="https://github.com/DIOGO4810/LI1">
              <Icon
                icon="devicon:github"
                width="25"
                height="25"
                className="centraIcons"
              />
            </a>
          </div>

          <div className="container size-2">
            <h2 className="title">Backend do spotify</h2>
            <p className="text">
              Projeto em C que envolveu ler arquivos CSV e armazenar informações
              em estruturas de dados eficientes. O foco foi criar queries que
              permitissem acessar dados de maneira rápida e eficiente, como
              buscar músicas, artistas ou informações de usuários. O projeto
              proporcionou um grande aprendizado sobre eficiência de algoritmos
              e o uso de estruturas de dados para manipular grandes volumes de
              dados.
            </p>
            <a href="https://github.com/DIOGO4810/LI3">
              <Icon
                icon="devicon:github"
                width="25"
                height="25"
                className="centraIcons"
              />
            </a>
          </div>

          <div className="container size-2">
            <h2 className="title">Gerenciador de Recursos</h2>
            <p className="text">
              Projeto em C que centraliza informações do PC em uma única
              ferramenta. Em vez de precisar abrir várias aplicações para
              verificar dados como consumo de bateria, uso de RAM, memória
              disponível, utilização do processador e tempo ligado, o projeto
              fornece acesso a todos esses recursos em uma interface simples. A
              ferramenta visa facilitar o monitoramento do desempenho e consumo
              do sistema, sem a necessidade de múltiplas aplicações.
            </p>
            <a href="https://github.com/DIOGO4810/Gerenciador-de-Recursos">
              <Icon
                icon="devicon:github"
                width="25"
                height="25"
                className="centraIcons"
              />
            </a>
          </div>

          <div className="container size-2">
            <h2 className="title">Portfólio</h2>
            <p className="text">
              Site criado com React, JavaScript, HTML e CSS, com a intenção de
              ser uma extensão do meu CV. O objetivo foi oferecer uma visão mais
              completa sobre quem sou, destacando minhas habilidades e projetos
              de forma interativa. Além disso, o projeto me permitiu aprender e
              aplicar o processo de deploy de uma aplicação web, garantindo que
              o site estivesse acessível online para qualquer visitante.
            </p>
            <a href="https://github.com/DIOGO4810/Portfolio">
              <Icon
                icon="devicon:github"
                width="25"
                height="25"
                className="centraIcons"
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projetos;
