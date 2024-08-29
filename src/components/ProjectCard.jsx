import { Card, Row, Col } from "react-bootstrap";
import { getRepoLanguages } from "../services/projectService";
import { useState, useEffect } from "react";

const ProjectCard = ({ project }) => {
  const { id, title, description, img, projLanguage, src } = project;
  const trimmedDesc = description.substring(0, 500);
  const [language, setLanguage] = useState(projLanguage || "Unspecified");
  const [colors, setColors] = useState();

  const urlColors =
    "https://raw.githubusercontent.com/ozh/github-colors/master/colors.json";

  useEffect(() => {
    if (id > 50) {
      getRepoLanguages(
        title.substring(0, title.indexOf("/")),
        title.substring(title.indexOf("/") + 1)
      )
        .then((result) => {
          setLanguage(
            Object.entries(result.data).sort(([, a], [, b]) => b - a)[0][0]
          );
        })
        .catch();
    }

    fetch(urlColors)
      .then((response) => response.json())
      .then((data) => {
        setColors(data);
      });
  }, []);

  return (
    <>
      <Card
        className="p-0 mx-auto proj-scale proj-card"
        style={{ textAlign: "left" }}
      >
        <Card.Link
          className="link-underline link-underline-opacity-0 link-body-emphasis"
          href={src}
          target="_blank"
        >
          <div style={{ height: "15rem" }} className="overflow-y-hidden">
            <Card.Img variant="top" src={img || "holder.js/100px180"} />
          </div>
          <Card.Body className="pb-0">
            <Card.Title>
              <svg
                stroke="currentColor"
                fill="currentColor"
                strokeWidth="0"
                viewBox="0 0 24 24"
                className="text-body-emphasis"
                height="1.5em"
                width="1.5em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g>
                  <path fill="none" d="M0 0h24v24H0z"></path>
                  <path
                    fillRule="nonzero"
                    d="M13 21v2.5l-3-2-3 2V21h-.5A3.5 3.5 0 0 1 3 17.5V5a3 3 0 0 1 3-3h14a1 1 0 0 1 1 1v17a1 1 0 0 1-1 1h-7zm0-2h6v-3H6.5a1.5 1.5 0 0 0 0 3H7v-2h6v2zm6-5V4H6v10.035A3.53 3.53 0 0 1 6.5 14H19zM7 5h2v2H7V5zm0 3h2v2H7V8zm0 3h2v2H7v-2z"
                  ></path>
                </g>
              </svg>{" "}
              {colors && (
                <span
                  className="proj-title"
                  style={{
                    color:
                      language === "Unspecified"
                        ? "#FFFFFF"
                        : colors[language].color,
                  }}
                >
                  {title}
                </span>
              )}
            </Card.Title>
            <hr />
            <Card.Text>
              {trimmedDesc.substring(
                0,
                Math.min(
                  trimmedDesc.length,
                  trimmedDesc.lastIndexOf(".") > 0
                    ? trimmedDesc.lastIndexOf(".")
                    : trimmedDesc.length
                )
              )}
              {trimmedDesc.length === description.length ? "." : "..."}
            </Card.Text>
            <Row>
              <Col className="d-flex">
                {language && colors && (
                  <>
                    <i
                      className="bi bi-circle-fill pe-2"
                      style={{
                        color:
                          language === "Unspecified"
                            ? "#FFFFFF"
                            : colors[language].color,
                      }}
                    ></i>
                    <p className="text-body-emphasis">{language}</p>
                  </>
                )}
              </Col>
            </Row>
          </Card.Body>
        </Card.Link>
      </Card>
    </>
  );
};

export default ProjectCard;
