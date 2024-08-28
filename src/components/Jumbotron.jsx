import { Container } from "react-bootstrap";
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
        <h2 className="text-body-emphasis">Hello there! My name is</h2>
        <h1 className="text-body-emphasis">Phillip Burleigh</h1>
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
