import { Card } from "react-bootstrap";
const ProjectCard = ({ project }) => {
  const { id, title, description, src } = project;
  const trimmedDesc = description.substring(0, 500);

  return (
    <>
      <Card
        className="p-0 mx-3 my-3 h-100"
        style={{ width: "24rem", textAlign: "left" }}
      >
        <Card.Link
          className="link-underline link-underline-opacity-0"
          href={src}
          target="_blank"
        >
          <Card.Img
            variant="top"
            src="holder.js/100px180"
            style={{ height: "250px" }}
            className="w-100"
          />
          <Card.Body>
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
              {title}
            </Card.Title>
            <hr />
            <Card.Text className="link-body-emphasis">
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
          </Card.Body>
        </Card.Link>
      </Card>
    </>
  );
};

export default ProjectCard;
