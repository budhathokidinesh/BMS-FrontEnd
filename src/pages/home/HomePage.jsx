import { Col, Container, Row } from "react-bootstrap";
import CustomCarousel from "../../components/CustomCarousel/CustomCarousel";
import "./HomePage.css";
import JustInSection from "../../components/PageSection/JustInSection";

import BestRead from "../../components/PageSection/BestRead";
import Recommendation from "../../components/PageSection/Recommendation";
const HomePage = () => {
  return (
    <Container className="home mb-3">
      <Row>
        <Col>
          {/* Hero section  */}
          <CustomCarousel />
          {/* Just in section  */}
          <JustInSection />
          {/* Best read section  */}
          <BestRead />
          {/* Reccomendation   */}
          <Recommendation />
        </Col>
      </Row>
    </Container>
  );
};

export default HomePage;
