import { Container } from "react-bootstrap";
import TypewriterComponent from "typewriter-effect";
import Logo from "./svgs/Logo";

const Jumbotron = () => {
  return (
    <Container className="jumbotron">
      <div className="p-5 text-center bg-body-tertiary rounded-3">
        <div
          className="pb-3 mx-auto text-body-emphasis"
          style={{ maxWidth: "10rem" }}
        >
          <Logo />
        </div>
        <h1 className="text-body-emphasis">
          <TypewriterComponent
            options={{
              strings: ["Hello there! I'm", "Phillip Burleigh"],
              autoStart: true,
              loop: true,
              deleteSpeed: 20,
              delay: 70,
              cursor: "_",
            }}
          />
        </h1>
        <p className="col-lg-8 mx-auto fs-5 text-muted">
          Welcome to my developer portfolio built with{" "}
          <code>
            <a className="code-link" href="https://react.dev/" target="_blank">
              React
            </a>
          </code>
          ,{" "}
          <code>
            <a className="code-link" href="https://vitejs.dev/" target="_blank">
              Vite
            </a>
          </code>
          , and{" "}
          <code>
            <a
              className="code-link"
              href="https://react-bootstrap.netlify.app/"
              target="_blank"
            >
              React Bootstrap
            </a>
          </code>
          .
        </p>
      </div>
    </Container>
  );
};

export default Jumbotron;
