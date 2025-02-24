import { useState } from "react";
import "../CSS/pages.css";
import { Icon } from "@iconify/react";

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
          <p className="text ">
            Hello, my name is Diogo👋
            <br /> <br />
            I am a Computer Engineering student at the University of Minho, and
            programming has sparked my curiosity since the 9th grade. I live in
            Braga, in the parish of Palmeira, and I like to divide my time
            between studying and other activities that motivate me. Besides
            programming, running is one of my greatest passions, helping me
            maintain a balance between focus and well-being.
            <br />
            <a
              href="https://github.com/DIOGO4810"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Icon icon="devicon:github" width="25" height="25" />
            </a>
            <a
              href="https://mail.google.com/mail/u/0/?tab=rm&ogbl#inbox?compose=GTvVlcRwRrkDpKgLLTzWVvcqGNDRxBTlTdTXnLWJTKkThVPzLKlNGBDHPzsXjmqcVNFQgSSFrxcJC"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Icon icon="logos:google-gmail" width="25" height="25" />
            </a>
            <a
              href="https://www.linkedin.com/in/diogo-ribeiro-71742420b"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Icon icon="logos:linkedin-icon" width="25" height="25" />
            </a>
          </p>
          <img src="DiogoV2.jpeg" className="imagem" alt="Diogo" />
        </div>

        <div className="row">
          <div className="container size-2">
            <h2 className="title">Interests in low-level programming</h2>
            <p className="text">
              Programming has always fascinated me, especially when it involves
              understanding how things work behind the scenes. I have a great
              interest in low-level programming because I enjoy the idea of
              optimizing code and working close to hardware architecture,
              exploring languages like C and Assembly.
            </p>
          </div>
          <div className="container size-2">
            <h2 className="title">Interests in learning CUDA</h2>
            <p className="text">
              Nowadays, I want to learn more about CUDA because I find it
              interesting how GPUs can be used to accelerate parallel
              computations. Although I haven't started studying it in depth yet,
              it is an area that sparks my curiosity and one that I intend to
              explore in the future.
            </p>
          </div>
          <div className="container size-2">
            <h2 className="title">
              Interests in learning more about infrastructure
            </h2>
            <p className="text">
              I also have an interest in infrastructure, from configuring and
              managing servers to system scalability. Understanding how
              large-scale applications are implemented and maintained is
              something I haven't had the chance to explore as much as I would
              like.
            </p>
          </div>
          <div className="container size-2">
            <h2 className="title">Interests in developing apps and websites</h2>
            <p className="text">
              And of course, like many programmers, I am also curious about
              developing applications and websites, exploring different
              technologies and frameworks to create functional and intuitive
              interfaces. Whether in web or mobile development, I like the idea
              of building something from scratch and seeing the final result
              working.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Homepage;
