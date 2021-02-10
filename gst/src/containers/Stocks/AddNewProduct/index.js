import { Card, Row, Col, Form } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEdit,
  faSave,
  faChevronLeft
} from "@fortawesome/free-solid-svg-icons";

import Button from "../../../components/Button/index";
export default function AddNewProduct() {
  return (
    <div className="screen-stocks">
      <Row>
        <Col md={2} sm={1}></Col>
        <Col md={8}>
          <Card className="card-style mb-4">
            <Card.Text className="card-title pb-2 pl-4">
              <FontAwesomeIcon icon={faEdit} className="mr-2 mt-3" />
              Add Product
            </Card.Text>
            <Card.Text className="ml-2 mr-2">
              <Form>
                <Form.Row className="mb-3">
                  <Form.Label column lg={3} className="pl-4">
                    Name *
                  </Form.Label>
                  <Col lg={6} md={6}>
                    <Form.Control
                      type="text"
                      placeholder="Enter your product name"
                    />
                  </Col>
                </Form.Row>

                <Form.Row className="mb-3">
                  <Form.Label column lg={3} className="pl-4">
                    Product Note
                  </Form.Label>
                  <Col lg={6} md={6}>
                    <Form.Control as="textarea" />
                  </Col>
                </Form.Row>

                <Form.Row className="mb-3">
                  <Form.Label column lg={3} className="pl-4">
                    HSN / SAC CODE
                  </Form.Label>
                  <Col lg={6} md={6}>
                    <Form.Control
                      type="text"
                      placeholder="Enter your HSN / SAC code"
                    />
                  </Col>
                </Form.Row>

                <Form.Row className="mb-3">
                  <Form.Label column lg={3} className="pl-4">
                    Unit of measurement
                  </Form.Label>
                  <Col lg={6} md={6}>
                    <Form.Control as="select">
                      <option>Select Unit</option>
                    </Form.Control>
                  </Col>
                </Form.Row>

                <Form.Row className="mb-3">
                  <Form.Label column lg={3} className="pl-4">
                    Stock Available
                  </Form.Label>
                  <Col lg={6} md={6}>
                    <Form.Control
                      type="text"
                      placeholder="Enter your stock available"
                    />
                  </Col>
                </Form.Row>

                <Form.Row className="mb-3">
                  <Form.Label column lg={3} className="pl-4">
                    Product *
                  </Form.Label>
                  <Col lg={6} md={6}>
                    <Form.Control as="select">
                      <option>Taxable</option>
                    </Form.Control>
                  </Col>
                </Form.Row>

                <Form.Row className="mb-3">
                  <Form.Label column lg={3} className="pl-4">
                    No ITC
                  </Form.Label>
                  <Col lg={6} md={6}>
                    <Form.Check
                      type="checkbox"
                      label="Is product eligible for input credit"
                    />
                  </Col>
                </Form.Row>

                <Form.Row className="mb-3">
                  <Form.Label column lg={3} className="pl-4">
                    CGST %
                  </Form.Label>
                  <Col lg={6} md={6}>
                    <Form.Control type="text" placeholder="Enter your CGST" />
                  </Col>
                </Form.Row>

                <Form.Row className="mb-3">
                  <Form.Label column lg={3} className="pl-4">
                    SGST %
                  </Form.Label>
                  <Col lg={6} md={6}>
                    <Form.Control type="text" placeholder="Enter your SGST" />
                  </Col>
                </Form.Row>

                <Form.Row className="mb-3">
                  <Form.Label column lg={3} className="pl-4">
                    IGST %
                  </Form.Label>
                  <Col lg={6} md={6}>
                    <Form.Control type="text" placeholder="Enter your IGST" />
                  </Col>
                </Form.Row>

                <Form.Row className="mb-3">
                  <Form.Label column lg={3} className="pl-4">
                    CESS Amount
                  </Form.Label>
                  <Col lg={6} md={6}>
                    <Form.Control
                      type="text"
                      placeholder="Enter your CESS Amount"
                    />
                  </Col>
                </Form.Row>

                <Form.Row className="mb-3">
                  <Form.Label column lg={3} className="pl-4">
                    Sell Price
                  </Form.Label>
                  <Col lg={6} md={6}>
                    <Form.Control
                      type="text"
                      placeholder="Enter your sell price"
                    />
                  </Col>
                </Form.Row>

                <Form.Row className="mb-3">
                  <Form.Label column lg={3} className="pl-4">
                    Sell Price (Incl. Tax)
                  </Form.Label>
                  <Col lg={6} md={6}>
                    <Form.Control
                      type="text"
                      placeholder="Enter your ell price (Incl. Tax)"
                    />
                  </Col>
                </Form.Row>

                <Form.Row className="mb-3">
                  <Form.Label column lg={3} className="pl-4">
                    Purcharse Price
                  </Form.Label>
                  <Col lg={6} md={6}>
                    <Form.Control
                      type="text"
                      placeholder="Enter you purcharse price"
                    />
                  </Col>
                </Form.Row>

                <Form.Row className="mb-3">
                  <Form.Label column lg={3} className="pl-4">
                    Purcharse Price (Incl Tax)
                  </Form.Label>
                  <Col lg={6} md={6}>
                    <Form.Control
                      type="text"
                      placeholder="Enter you purcharse price (Incl Tax)"
                    />
                  </Col>
                </Form.Row>

                <Form.Row className="mb-3">
                  <Form.Label column lg={3} className="pl-4">
                    Service Item
                  </Form.Label>
                  <Col lg={6} md={6}>
                    <Form.Check
                      type="checkbox"
                      label="Check if it is service, EX- computer service, Consulting services(No stock Count)"
                    />
                  </Col>
                </Form.Row>
                <Form.Row className="mb-3">
                  <Form.Label column lg={3} className="pl-4">
                    Product Enable
                  </Form.Label>
                  <Col lg={6} md={6}>
                    <Form.Check
                      type="checkbox"
                      label="Product will be visible on all the document"
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
