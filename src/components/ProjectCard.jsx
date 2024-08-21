import { Card } from "react-bootstrap";
const ProjectCard = ({ project, icon }) => {
  const { id, title, description, src } = project;
  return (
    <Card
      className="p-4 mx-3 my-3"
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
        <Card.Text>{description}</Card.Text>
      </Card.Body>
    </Card>
  );
};

export default ProjectCard;
