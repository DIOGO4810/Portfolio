import { motion } from "framer-motion";
import { Icon } from "@iconify/react";

const skills = [
  { icon: "devicon:c", link: "https://en.wikipedia.org/wiki/C_(programming_language)" },
  { icon: "skill-icons:javascript", link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript" },
  { icon: "skill-icons:haskell-light", link: "https://www.haskell.org/" },
  { icon: "skill-icons:linux-light", link: "https://www.linux.org/" },
  { icon: "skill-icons:tailwindcss-dark", link: "https://tailwindcss.com/" },
  { icon: "devicon:python", link: "https://www.python.org/" },
  { icon: "skill-icons:html", link: "https://developer.mozilla.org/en-US/docs/Web/HTML" },
  { icon: "skill-icons:react-dark", link: "https://react.dev/" },
  { icon: "devicon:reactnative-wordmark", link: "https://reactnative.dev/" },
  { icon: "devicon:sqlite-wordmark", link: "https://www.sqlite.org/" },
  { icon: "skill-icons:bash-dark", link: "https://www.gnu.org/software/bash/" },
  { icon: "devicon:git", link: "https://git-scm.com/" },
  { icon: "skill-icons:css", link: "https://developer.mozilla.org/en-US/docs/Web/CSS" },
  { icon: "devicon:mysql-wordmark", link: "https://www.mysql.com" },
  { icon: "devicon:java", link: "https://dev.java/" }

];

function getRandomMotion() {
  return {
    y: [0, Math.random() * 40 - 20, Math.random() * 40 - 20, 0], // Movimento vertical aleatório
    x: [0, Math.random() * 40 - 20, Math.random() * 40 - 20, 0], // Movimento horizontal aleatório
    duration: Math.random() * 4 + 2 // Tempo de animação entre 2s e 6s
  };
}

function Competencias() {
  return (
    <div>
      <h1 className="title" style={{ marginBottom: "20px" }}>
        Technical Skills
      </h1>
      <div className="grid-parents">
        <div className="containerGrid size-max">
          {skills.map((skill, index) => {
            const motionConfig = getRandomMotion(); // Cada ícone recebe uma animação aleatória

            return (
              <motion.a
                key={index}
                href={skill.link}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 1 }}
                animate={{
                  y: motionConfig.y,
                  x: motionConfig.x
                }}
                transition={{
                  duration: motionConfig.duration,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                whileHover={{ scale: 1.2 }}
              >
                <Icon icon={skill.icon} width="100" height="100" />
              </motion.a>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Competencias;
