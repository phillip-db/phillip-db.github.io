import Jumbotron from "../components/Jumbotron";
import { Stack, Image, Container, Col, Row } from "react-bootstrap";

const Home = () => {
  return (
    <Stack gap={3} style={{ maxWidth: "75%" }}>
      <Jumbotron />
      <Container>
        <Row className="d-flex flex-wrap mx-2">
          <Col md={12} lg={8} className="text-start">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
              cursus lorem eget lectus ullamcorper scelerisque. Curabitur
              sollicitudin sollicitudin mi, vel ullamcorper felis. Vivamus
              posuere, erat sed consectetur pulvinar, mauris tortor porttitor
              purus, id porta tortor ligula scelerisque ex. Nulla sed magna
              ipsum. Phasellus non blandit leo. Integer molestie velit ut magna
              gravida eleifend eu id risus. Praesent eget dignissim dui. Nulla
              ut fermentum leo. In pulvinar nibh eget odio efficitur egestas.
              Integer in nibh semper, consequat est ac, mollis ligula. Cras
              ullamcorper nisl mauris, in finibus augue dictum a. Donec
              facilisis porttitor turpis, ut luctus arcu vestibulum non.
            </p>
            <p>
              Aenean cursus tempor pretium. Praesent vitae viverra mauris. Donec
              metus est, interdum in leo et, accumsan vehicula lectus. Sed eu
              commodo purus. Donec viverra vitae sem mollis iaculis. Morbi
              volutpat, lacus vitae dignissim viverra, tellus ex varius tortor,
              ut pellentesque eros libero ac purus. Fusce et nulla nisl.
              Phasellus congue nulla a tellus fermentum ultrices. Aliquam diam
              tortor, varius vitae quam elementum, dictum porttitor massa. Etiam
              diam ex, ultricies a porta sed, vulputate in leo.
            </p>
            <p>
              Pellentesque pulvinar vel magna eget commodo. Pellentesque eu
              dictum ex, in gravida mi. Suspendisse potenti. Mauris aliquam nibh
              et ultricies euismod. Nulla sit amet nisi id ipsum mattis posuere
              a eu turpis. Nullam et nibh interdum, iaculis nunc venenatis,
              congue justo. Maecenas ut lacus et massa placerat pulvinar.
              Aliquam tempor rhoncus metus a accumsan. Donec et facilisis elit.
              Quisque ac consequat elit, vel venenatis risus.
            </p>
          </Col>
          <Col md={6} lg={4} className="mx-md-auto">
            <Image
              className="mx-auto pb-rotate my-3"
              rounded
              loading="lazy"
              src="images/headshot.jpg"
              width={250}
              height={250}
            />
          </Col>
        </Row>
      </Container>
    </Stack>
  );
};

export default Home;
