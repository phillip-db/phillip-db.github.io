import { Card } from "react-bootstrap";
const ProjectCard = ({ project, icon }) => {
  const { id, title, description, src } = project;
  const trimmedDesc = description.substring(0, 500);

  return (
    <Card
      className="p-4 mx-3 my-3 h-100"
      style={{ width: "24rem", textAlign: "left" }}
    >
      <Card.Body>
        <Card.Title>
          {icon}
          <Card.Link href={src} target="_blank">
            {title}
          </Card.Link>
        </Card.Title>
        <hr />
        <Card.Text>
          {trimmedDesc.substring(
            0,
            Math.min(trimmedDesc.length, trimmedDesc.lastIndexOf("."))
          )}
          {trimmedDesc.length === description.length ? "." : "..."}
        </Card.Text>
      </Card.Body>
    </Card>
  );
};

export default ProjectCard;
