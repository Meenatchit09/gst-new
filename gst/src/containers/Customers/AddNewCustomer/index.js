import { Card, Row, Col, Form } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEdit,
  faSave,
  faChevronLeft
} from "@fortawesome/free-solid-svg-icons";

import Button from "../../../components/Button/index";
export default function AddNewCustomer() {
  return (
    <div className="screen-stocks">
      <Row>
        <Col md={2} sm={1}></Col>
        <Col md={8}>
          <Card className="card-style mb-4">
            <Card.Text className="card-title pb-2 pl-4">
              <FontAwesomeIcon icon={faEdit} className="mr-2 mt-3" />
              Add Customer / Vendor
            </Card.Text>
            <Card.Text className="ml-2 mr-2">
              <Form>
                <Form.Row className="mb-3">
                  <Form.Label column lg={3} className="pl-4">
                    Customer / Vendor Name *
                  </Form.Label>
                  <Col lg={6} md={6}>
                    <Form.Control
                      type="text"
                      placeholder="Enter customer vendor name"
                    />
                  </Col>
                </Form.Row>

                <Form.Row className="mb-3">
                  <Form.Label column lg={3} className="pl-4">
                    Contact Person
                  </Form.Label>
                  <Col lg={6} md={6}>
                    <Form.Control
                      type="text"
                      placeholder="Enter contact person"
                    />
                  </Col>
                </Form.Row>

                <Form.Row className="mb-3">
                  <Form.Label column lg={3} className="pl-4">
                    Contact No
                  </Form.Label>
                  <Col lg={6} md={6}>
                    <Form.Control type="text" placeholder="Enter contact no" />
                  </Col>
                </Form.Row>

                <Form.Row className="mb-3">
                  <Form.Label column lg={3} className="pl-4">
                    Address
                  </Form.Label>
                  <Col lg={6} md={6}>
                    <Form.Control type="text" placeholder="Enter address 1" />
                  </Col>
                </Form.Row>

                <Form.Row className="mb-3">
                  <Form.Label column lg={3} className="pl-4"></Form.Label>
                  <Col lg={6} md={6}>
                    <Form.Control type="text" placeholder="Enter address 2" />
                  </Col>
                </Form.Row>

                <Form.Row className="mb-3">
                  <Form.Label column lg={3} className="pl-4">
                    LandMark
                  </Form.Label>
                  <Col lg={6} md={6}>
                    <Form.Control type="text" placeholder="Enter landmark" />
                  </Col>
                </Form.Row>

                <Form.Row className="mb-3">
                  <Form.Label column lg={3} className="pl-4">
                    Country *
                  </Form.Label>
                  <Col lg={6} md={6}>
                    <Form.Control as="select">
                      <option>India</option>
                    </Form.Control>
                  </Col>
                </Form.Row>

                <Form.Row className="mb-3">
                  <Form.Label column lg={3} className="pl-4">
                    State *
                  </Form.Label>
                  <Col lg={6} md={6}>
                    <Form.Control as="select">
                      <option>Tamil nadu</option>
                    </Form.Control>
                  </Col>
                </Form.Row>

                <Form.Row className="mb-3">
                  <Form.Label column lg={3} className="pl-4">
                    City
                  </Form.Label>
                  <Col lg={6} md={6}>
                    <Form.Control type="text" placeholder="Enter city" />
                  </Col>
                </Form.Row>

                <Form.Row className="mb-3">
                  <Form.Label column lg={3} className="pl-4">
                    Company Type *
                  </Form.Label>
                  <Col lg={6} md={6}>
                    <Form.Control as="select">
                      <option>Select</option>
                    </Form.Control>
                  </Col>
                </Form.Row>

                <Form.Row className="mb-3">
                  <Form.Label column lg={3} className="pl-4">
                    Pincode
                  </Form.Label>
                  <Col lg={6} md={6}>
                    <Form.Control type="text" placeholder="Enter pencode" />
                  </Col>
                </Form.Row>

                <Form.Row className="mb-3">
                  <Form.Label column lg={3} className="pl-4">
                    Fax No
                  </Form.Label>
                  <Col lg={6} md={6}>
                    <Form.Control type="text" placeholder="Enter fax no" />
                  </Col>
                </Form.Row>

                <Form.Row className="mb-3">
                  <Form.Label column lg={3} className="pl-4">
                    Website
                  </Form.Label>
                  <Col lg={6} md={6}>
                    <Form.Control
                      type="text"
                      placeholder="www.ifoxsolutions.com"
                    />
                  </Col>
                </Form.Row>

                <Form.Row className="mb-3">
                  <Form.Label column lg={3} className="pl-4">
                    Email
                  </Form.Label>
                  <Col lg={6} md={6}>
                    <Form.Control
                      type="text"
                      placeholder="emailaddress@domain.com"
                    />
                    <Form.Text className="text-muted">
                      Note: use comma(,) as address seperator to enter multiple
                      Email
                    </Form.Text>
                  </Col>
                </Form.Row>

                <Form.Row className="mb-3">
                  <Form.Label column lg={3} className="pl-4">
                    Registration type *
                  </Form.Label>
                  <Col lg={6} md={6}>
                    <Form.Control as="select">
                      <option>Regular</option>
                    </Form.Control>
                  </Col>
                </Form.Row>

                <Form.Row className="mb-3">
                  <Form.Label column lg={3} className="pl-4">
                    GSTIN / PAN
                  </Form.Label>
                  <Col lg={6} md={6}>
                    <Form.Control type="text" placeholder="Enter GSTIN / PAN" />
                  </Col>
                </Form.Row>

                <Form.Row className="mb-3">
                  <Form.Label column lg={3} className="pl-4">
                    Distance for e-way bill (in km)
                  </Form.Label>
                  <Col lg={6} md={6}>
                    <Form.Control
                      type="text"
                      placeholder="Enter distance for e-way bill (in km)"
                    />
                  </Col>
                </Form.Row>

                <Form.Row className="mb-3">
                  <Form.Label column lg={3} className="pl-4">
                    License No
                  </Form.Label>
                  <Col lg={6} md={6}>
                    <Form.Control type="text" placeholder="Enter license no" />
                  </Col>
                </Form.Row>

                <Form.Row className="mb-3">
                  <Form.Label column lg={3} className="pl-4">
                    Due Days
                  </Form.Label>
                  <Col lg={6} md={6}>
                    <Form.Control type="text" placeholder="Enter due days" />
                    <Form.Text className="text-muted">
                      Note: use "" to use default due date from settings. Set
                      numeric value from dates from invoice date
                    </Form.Text>
                  </Col>
                </Form.Row>

                <Form.Row className="mb-3">
                  <Form.Label column lg={3} className="pl-4 font-weight-bold">
                    Additonal Shipping Address
                  </Form.Label>
                </Form.Row>

                <Form.Row className="mb-3">
                  <Form.Label column lg={3} className="pl-4">
                    SHIP Name
                  </Form.Label>
                  <Col lg={6} md={6}>
                    <Form.Control type="text" placeholder="Enter ship name" />
                  </Col>
                </Form.Row>

                <Form.Row className="mb-3">
                  <Form.Label column lg={3} className="pl-4">
                    SHIP Phone
                  </Form.Label>
                  <Col lg={6} md={6}>
                    <Form.Control
                      type="text"
                      placeholder="Enter SHIP phone no"
                    />
                  </Col>
                </Form.Row>

                <Form.Row className="mb-3">
                  <Form.Label column lg={3} className="pl-4">
                    SHIP Address
                  </Form.Label>
                  <Col lg={6} md={6}>
                    <Form.Control
                      type="text"
                      placeholder="Enter shipping address"
                    />
                  </Col>
                </Form.Row>

                <Form.Row className="mb-3">
                  <Form.Label column lg={3} className="pl-4">
                    SHIP Country
                  </Form.Label>
                  <Col lg={6} md={6}>
                    <Form.Control as="select">
                      <option>India</option>
                    </Form.Control>
                  </Col>
                </Form.Row>

                <Form.Row className="mb-3">
                  <Form.Label column lg={3} className="pl-4">
                    SHIP state
                  </Form.Label>
                  <Col lg={6} md={6}>
                    <Form.Control as="select">
                      <option>Select</option>
                    </Form.Control>
                  </Col>
                </Form.Row>

                <Form.Row className="mb-3">
                  <Form.Label column lg={3} className="pl-4">
                    SHIP GSTIN / PAN
                  </Form.Label>
                  <Col lg={6} md={6}>
                    <Form.Control
                      type="text"
                      placeholder="Enter SHIP GSTIN / PAN"
                    />
                  </Col>
                </Form.Row>

                <Form.Row className="mb-3">
                  <Form.Label column lg={3} className="pl-4">
                    Company Enable
                  </Form.Label>
                  <Col lg={6} md={6}>
                    <Form.Check
                      type="checkbox"
                      label="company will be visible on all the document"
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
