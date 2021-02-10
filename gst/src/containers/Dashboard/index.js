import { Card, Row, Col } from "react-bootstrap";
import Button from "../../components/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEdit,
  faArrowDown,
  faArrowUp,
  faTruck,
  faThLarge
} from "@fortawesome/free-solid-svg-icons"; 

//scss
import "./index.scss";

export default function Dashboard() {
  return (
    <Card>
        <div className="dashboard d-flex flex-column justify-content-center">
      <Row >
          <Col className="text-center">
      <h1 >Welcome Hekeni!</h1>
      </Col>
      </Row>      
      <br />
      <Row>
        <Col md={3}></Col>
        <Col md={6} className="d-flex flex-wrap justify-content-space-around menu-button ml-5">
        <Button
              name="Sales Invoice"
              havingIcon={true}
              iconType={faEdit}
              buttonType="btn btn-primary"
            />
            &nbsp;&nbsp;
            <Button
              name="Purcharse Invoice"
              havingIcon={true}
              iconType={faTruck}
              buttonType="btn btn-primary"
            />
            <br />
            <br />
      <Button
              name="Inward Payment"
              havingIcon={true}
              iconType={faArrowDown}
              buttonType="btn btn-primary btn-lg"
            />
            &nbsp;&nbsp;&nbsp;&nbsp;
            <Button
              name="Outward Payment"
              havingIcon={true}
              iconType={faArrowUp}
              buttonType="btn btn-primary"
            />
        </Col>
        <Col md={3}></Col>
      </Row>
      <br />
      <br />
      <Row >
        <Col className="d-flex justify-content-center account-button">
      <Button
              name="Inward Payment"
              havingIcon={true}
              iconType={faThLarge}
              buttonType="btn btn-outline-info"
            />
            </Col>
            </Row>
      </div>
    </Card>
  );
}