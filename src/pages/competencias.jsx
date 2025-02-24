import { Icon } from "@iconify/react";

function Competencias() {
  return (
    <div>
      <h1 className="title" style={{ marginBottom: "20px" }}>
        Technical Skills
      </h1>
      <div className="grid-parents ">
        <div className="containerGrid size-max">
          <a
            href="https://en.wikipedia.org/wiki/C_(programming_language)"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Icon icon="devicon:c" width="100" height="100" />
          </a>
          <a
            href="https://developer.mozilla.org/en-US/docs/Web/JavaScript"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Icon icon="skill-icons:javascript" width="100" height="100" />
          </a>
          <a
            href="https://www.haskell.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Icon icon="skill-icons:haskell-light" width="100" height="100" />
          </a>
          <a
            href="https://www.linux.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Icon icon="skill-icons:linux-light" width="100" height="100" />
          </a>
          <a
            href="https://tailwindcss.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Icon
              icon="skill-icons:tailwindcss-dark"
              width="100"
              height="100"
            />
          </a>
          <a
            href="https://developer.mozilla.org/en-US/docs/Web/CSS"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Icon icon="skill-icons:css" width="100" height="100" />
          </a>
          <a
            href="https://developer.mozilla.org/en-US/docs/Web/HTML"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Icon icon="skill-icons:html" width="100" height="100" />
          </a>
          <a
            href="https://react.dev/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Icon icon="skill-icons:react-dark" width="100" height="100" />
          </a>
          <a
            href="https://reactnative.dev/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Icon
              icon="devicon:reactnative-wordmark"
              width="100"
              height="100"
            />
          </a>
          <a
            href="https://www.sqlite.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Icon icon="devicon:sqlite-wordmark" width="100" height="100" />
          </a>
          <a
            href="https://www.gnu.org/software/bash/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Icon icon="skill-icons:bash-dark" width="100" height="100" />
          </a>
          <a
            href="https://git-scm.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Icon icon="devicon:git" width="100" height="100" />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Competencias;
