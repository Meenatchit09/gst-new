import { Card, Row, Col, Form } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEdit,
  faSave,
  faChevronLeft
} from "@fortawesome/free-solid-svg-icons";

import Button from "../../../components/Button/index";
export default function AddNewTransport() {
  return (
    <div className="screen-stocks">
      <Row>
        <Col md={2} sm={1}></Col>
        <Col md={8}>
          <Card className="card-style mb-4">
            <Card.Text className="card-title pb-2 pl-4">
              <FontAwesomeIcon icon={faEdit} className="mr-2 mt-3" />
              Add Transport
            </Card.Text>
            <Card.Text className="ml-2 mr-2">
              <Form>
                <Form.Row className="mb-3">
                  <Form.Label column lg={3} className="pl-4">
                    Transport Name *
                  </Form.Label>
                  <Col lg={6} md={6}>
                    <Form.Control
                      type="text"
                      placeholder="Enter your transport name"
                    />
                  </Col>
                </Form.Row>

                <Form.Row className="mb-3">
                  <Form.Label column lg={3} className="pl-4">
                    Transport Id
                  </Form.Label>
                  <Col lg={6} md={6}>
                    <Form.Control
                      type="text"
                      placeholder="Enter your transport id"
                    />
                  </Col>
                </Form.Row>

                <Form.Row className="mb-3">
                  <Form.Label column lg={3} className="pl-4">
                    Vehicle No
                  </Form.Label>
                  <Col lg={6} md={6}>
                    <Form.Control
                      type="text"
                      placeholder="Enter your vehicle no"
                    />
                  </Col>
                </Form.Row>

                <Card className="card-style mb-4 ml-2 mr-2">
                  <Card.Text className="card-title pb-3 pt-3">
                    <Row md={12}>
                      <Col md={3}></Col>
                      <Col className="d-flex justify-content-start">
                        <Button
                          name="Save"
                          havingIcon={true}
                          iconType={faSave}
                          buttonType="btn btn-primary"
                        />
                        &nbsp;&nbsp;
                        <Button
                          name="Back"
                          havingIcon={true}
                          iconType={faChevronLeft}
                          buttonType="btn btn-outline-dark btn-light"
                        />
                      </Col>
                    </Row>
                  </Card.Text>
                </Card>
              </Form>
            </Card.Text>
          </Card>
        </Col>
        <Col md={2} sm={1}></Col>
      </Row>
    </div>
  );
}
