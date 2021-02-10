import { Card, Row, Col, Form, Table } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEdit,
  faSave,
  faChevronLeft,
  faListAlt,
  faPlus
} from "@fortawesome/free-solid-svg-icons";

import Button from "../../../components/Button/index";
export default function AddSalesInvoice() {
  return (
    <div className="screen-stocks">
      <Row>
        <Col md={1} sm={1}></Col>
        <Col md={10}>
          <Card className="card-style mb-4">
            <Card.Text className="card-title pb-2 pl-4">
              <FontAwesomeIcon icon={faEdit} className="mr-2 mt-3" />
              INVOICE
            </Card.Text>
            <Card.Text className="ml-2 mr-2">
              <Form>
                <Row>
                  <Col md={5}>
                    <Card className="card-style mb-4">
                      <Card.Text className="card-title pb-2 pl-4">
                        <FontAwesomeIcon
                          icon={faListAlt}
                          className="mr-2 mt-3"
                        />
                        Customer Information
                      </Card.Text>
                      <Card.Text>
                        <Form.Row className="mb-3 mr-4">
                          <Col
                            lg={12}
                            md={12}
                            className="d-flex justify-content-end"
                          >
                            <Button
                              name="Add New Customer"
                              havingIcon={true}
                              iconType={faPlus}
                              buttonType="btn btn-primary"
                              onClick={() => history.push("/addsalesinvoice")}
                            />
                          </Col>
                        </Form.Row>
                        <Form.Row className="mb-3">
                          <Form.Label column lg={3} className="pl-4">
                            M / S
                          </Form.Label>
                          <Col lg={8} md={8}>
                            <Form.Control as="select">
                              <option>Select Customer</option>
                            </Form.Control>
                          </Col>
                        </Form.Row>

                        <Form.Row className="mb-3">
                          <Form.Label column lg={3} className="pl-4">
                            Address
                          </Form.Label>
                          <Col lg={8} md={8}>
                            <Form.Control as="textarea" />
                          </Col>
                        </Form.Row>

                        <Form.Row className="mb-3">
                          <Form.Label column lg={3} className="pl-4">
                            PHONE NO
                          </Form.Label>
                          <Col lg={8} md={8}>
                            N / A
                          </Col>
                        </Form.Row>

                        <Form.Row className="mb-3">
                          <Form.Label column lg={3} className="pl-4">
                            GSTIN / PAN
                          </Form.Label>
                          <Col lg={8} md={8}>
                            N / A
                          </Col>
                        </Form.Row>

                        <Form.Row className="mb-3">
                          <Form.Label column lg={3} className="pl-4">
                            Rev. Charge
                          </Form.Label>
                          <Col lg={8} md={8}>
                            <Form.Control as="select">
                              <option>No</option>
                            </Form.Control>
                          </Col>
                        </Form.Row>

                        <Form.Row className="mb-3">
                          <Form.Label column lg={3} className="pl-4">
                            Shipping Address
                          </Form.Label>
                          <Col lg={8} md={8}>
                            <Form.Check
                              type="checkbox"
                              label="Use Same Shipping Address"
                            />
                          </Col>
                        </Form.Row>

                        <Form.Row className="mb-3">
                          <Form.Label column lg={3} className="pl-4">
                            Place of Supply
                          </Form.Label>
                          <Col lg={8} md={8}>
                            <Form.Control type="text" />
                          </Col>
                        </Form.Row>
                      </Card.Text>
                    </Card>
                  </Col>
                  <Col md={7}>
                    <Card className="card-style mb-4">
                      <Card.Text className="card-title pb-2 pl-4">
                        <FontAwesomeIcon
                          icon={faListAlt}
                          className="mr-2 mt-3"
                        />
                        Invoice Details
                      </Card.Text>
                      <Card.Text>
                        <Form.Row className="mb-3">
                          <Form.Label column lg={2} className="pl-2">
                            Invoice Type
                          </Form.Label>
                          <Col lg={4} md={4}>
                            <Form.Control as="select" />
                          </Col>
                        </Form.Row>

                        <Form.Row className="mb-3">
                          <Form.Label column lg={2} className="pl-2">
                            Invoice No
                          </Form.Label>
                          <Col lg={4} md={4}>
                            <Form.Control type="text" />
                          </Col>
                          <Form.Label column lg={2} className="pl-2">
                            Date
                          </Form.Label>
                          <Col lg={4} md={4}>
                            <Form.Control type="text" />
                          </Col>
                        </Form.Row>

                        <Form.Row className="mb-3">
                          <Form.Label column lg={2} className="pl-2">
                            Challan No
                          </Form.Label>
                          <Col lg={4} md={4}>
                            <Form.Control type="text" />
                          </Col>
                          <Form.Label column lg={2} className="pl-2">
                            Challan Date
                          </Form.Label>
                          <Col lg={4} md={4}>
                            <Form.Control type="date" />
                          </Col>
                        </Form.Row>
                        <Form.Row className="mb-3">
                          <Form.Label column lg={2} className="pl-2">
                            PO No
                          </Form.Label>
                          <Col lg={4} md={4}>
                            <Form.Control type="text" />
                          </Col>

                          <Form.Label column lg={2} className="pl-2">
                            PO Date
                          </Form.Label>
                          <Col lg={4} md={4}>
                            <Form.Control type="date" />
                          </Col>
                        </Form.Row>

                        <Form.Row className="mb-3">
                          <Form.Label column lg={2} className="pl-2">
                            LR No
                          </Form.Label>
                          <Col lg={4} md={4}>
                            <Form.Control type="text" />
                          </Col>

                          <Form.Label column lg={2} className="pl-2">
                            E-way No
                          </Form.Label>
                          <Col lg={4} md={4}>
                            <Form.Control type="date" />
                          </Col>
                        </Form.Row>

                        <Form.Row className="mb-3">
                          <Form.Label
                            column
                            lg={2}
                            className="pl-2"
                          ></Form.Label>
                          <Col lg={4} md={4}></Col>

                          <Form.Label
                            column
                            lg={2}
                            className="pl-2"
                          ></Form.Label>
                          <Col lg={4} md={4}>
                            <Button
                              name="Add New Transport"
                              havingIcon={true}
                              iconType={faPlus}
                              buttonType="btn btn-primary"
                              onClick={() => history.push("/addtransport")}
                            />
                          </Col>
                        </Form.Row>

                        <Form.Row className="mb-3">
                          <Form.Label column lg={4} className="pl-2">
                            DISPATCH THROUGH
                          </Form.Label>
                          <Col lg={8} md={8}>
                            <Form.Control
                              type="text"
                              label="Enter transport name"
                            />
                          </Col>
                        </Form.Row>

                        <Form.Row className="mb-3">
                          <Form.Label column lg={2} className="pl-2">
                            Trans ID
                          </Form.Label>
                          <Col lg={4} md={4}>
                            <Form.Control
                              type="text"
                              label="Transport ID"
                              readOnly
                            />
                          </Col>

                          <Form.Label column lg={2} className="pl-2">
                            Vehicle No
                          </Form.Label>
                          <Col lg={4} md={4}>
                            <Form.Control type="text" label="Vehicle No" />
                          </Col>
                        </Form.Row>
                      </Card.Text>
                    </Card>
                  </Col>
                </Row>
                <Card className="card-style mb-4">
                  <Card.Text className="card-title pb-2 pl-4">
                    <FontAwesomeIcon icon={faListAlt} className="mr-2 mt-3" />
                    Product Items
                  </Card.Text>
                  <Card.Text className="ml-2 mr-2">
                    <Form.Row>
                      <Button
                        name="Add New Product"
                        havingIcon={true}
                        iconType={faPlus}
                        buttonType="btn btn-primary"
                        onClick={() => history.push("/addsalesinvoice")}
                      />
                      &nbsp;&nbsp;
                      <Button
                        name="Add New Transport / Packaging Charges"
                        havingIcon={true}
                        iconType={faPlus}
                        buttonType="btn btn-primary"
                        onClick={() => history.push("/addsalesinvoice")}
                      />
                    </Form.Row>
                    <br />
                    <Table
                      bordered
                      striped
                      hover
                      responsive="sm"
                      className="mb-0"
                    >
                      <thead>
                        <tr>
                          <th>SR</th>
                          <th>Product / OTHER CHARGES</th>
                          <th>HSN / SAC CODE</th>
                          <th>QTY</th>
                          <th>PRICE(Rs)</th>
                          <th>DISC %</th>
                          <th>CGST %</th>
                          <th>SGST (RS)</th>
                          <th>SGST %</th>
                          <th>IGST (RS)</th>
                          <th>IGST %</th>
                          <th>CGST (RS)</th>
                          <th>CESS</th>
                          <th>TOTAL</th>
                          <th></th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>1</td>
                          <td>
                            <input
                              type="text"
                              placeholder="Enter product name"
                              size={4}
                            />{" "}
                            <input
                              type="text"
                              placeholder="Enter product name"
                              size={4}
                            />
                          </td>
                          <td>
                            <input type="text" placeholder="HSN /SAC CODE" size={4}/>
                          </td>
                          <td>
                            <input type="text" placeholder="QTY" size={4}/>
                          </td>
                          <td>
                            <input type="text" placeholder="Price" size={4}/>
                          </td>
                          <td>
                            <input type="text" placeholder="0" size={4}/>
                          </td>
                          <td>
                            <input
                              type="text"
                              placeholder="%"
                              readOnly
                              size={4}
                            />
                          </td>
                          <td>
                            <input
                              type="text"
                              placeholder="0"
                              readOnly
                              size={4}
                            />
                          </td>
                          <td>
                            <input
                              type="text"
                              placeholder="%"
                              readOnly
                              size={4}
                            />
                          </td>
                          <td>
                            <input
                              type="text"
                              placeholder="0"
                              readOnly
                              size={4}
                            />
                          </td>
                          <td>
                            <input type="text" placeholder="%" size={4} />
                          </td>
                          <td>
                            <input
                              type="text"
                              placeholder="0"
                              readOnly
                              size={4}
                            />
                          </td>
                          <td>
                            <input type="text" placeholder="%" size={4} />{" "}
                            +
                            <input type="text" placeholder="%" size={4} />
                          </td>
                          <td>
                            <input type="text" placeholder="Total" size={4}  />
                          </td>
                          <td>
                          <Button
                              name=""
                              havingIcon={true}
                              iconType={faPlus}
                              buttonType="btn btn-primary"
                            />
                          </td>
                        </tr>
                        <tr>
                          <td colSpan="3">Total Inc Val</td>
                          <td>0</td>
                          <td>0</td>
                          <td>0</td>
                          <td>0</td>
                          <td>0</td>
                          <td>0</td>
                          <td>0</td>
                          <td>0</td>
                          <td>0</td>
                          <td>0</td>
                          <td colSpan="2">0</td>
                        </tr>
                        <tr className="text-right">
                          <td colSpan="6"></td>
                          <td colSpan="7">Total taxable</td>
                          <td colSpan="2">0</td>
                        </tr>

                        <tr className="text-right">
                          <td colSpan="6"></td>
                          <td colSpan="7">Total tax</td>
                          <td colSpan="2">0</td>
                        </tr>

                        <tr className="text-right">
                          <td colSpan="6"></td>
                          <td colSpan="7">TCS RS %</td>
                          <td colSpan="2"><input size={2} /></td>
                        </tr>

                        <tr className="text-right">
                          <td colSpan="6"></td>
                          <td colSpan="7">DISCOUNT RS %</td>
                          <td colSpan="2"><input size={2} /></td>
                        </tr>

                        <tr className="text-right">
                          <td colSpan="6"></td>
                          <td colSpan="7">Grand Total</td>
                          <td colSpan="2">0</td>
                        </tr>

                      </tbody>
                    </Table>
                  </Card.Text>
                </Card>
                <Card className="card-style mb-4">
          <Card.Text className="card-title pb-3 d-flex justify-content-start pt-3">
            Zero Rupees Only
          </Card.Text>
        </Card>

                        <Form.Row className="mb-3">
                          <Form.Label column lg={2} className="pl-2">
                            Due Date
                          </Form.Label>
                          <Col lg={4} md={4}>
                            <Form.Control
                              type="date"
                            />
                          </Col>

                          <Form.Label column lg={2} className="pl-2">
                            Document Note / Remarks Not visible on print
                          </Form.Label>
                          <Col lg={4} md={4}>
                            <Form.Control as="textarea" />
                          </Col>
                        </Form.Row>

                        <Form.Row className="mb-3">
                          <Form.Label column lg={2} className="pl-2">
                            Bank
                          </Form.Label>
                          <Col lg={4} md={4}>
                            <Form.Control
                              as="select"
                            />
                          </Col>
                          </Form.Row>

                          <Form.Row className="mb-3">
                          <Form.Label column lg={2} className="pl-2">
                            Payment Type
                          </Form.Label>
                          <Col lg={4} md={4}>
                            <Form.Control
                              as="select"
                            />
             
                          </Col>
                          <Col lg={3} md={3}></Col>
            <Col lg={3} md={3} className="d-flex">
            <Button
              name="Back"
              havingIcon={true}
              iconType={faChevronLeft}
              buttonType="btn btn-outline-dark btn-light"
            />
            &nbsp;&nbsp;
            <Button
              name="Save and print"
              havingIcon={true}
              iconType={faSave}
              buttonType="btn btn-primary"
            />
            &nbsp;&nbsp;
            <Button
              name="Save"
              havingIcon={true}
              iconType={faSave}
              buttonType="btn btn-primary"
            />
            </Col>
                          </Form.Row>

                          <Form.Row className="mb-3">
                          <Form.Label column lg={2} className="pl-2">
                            Payment Note
                          </Form.Label>
                          <Col lg={4} md={4}>
                            <Form.Control
                              as="textarea"
                            />
                          </Col>
                          </Form.Row>

                          <Form.Row className="mb-3">
                          <Form.Label column lg={2} className="pl-2">
                            {`Terms & Conditions`}
                          </Form.Label>
                          <Col lg={4} md={4}>
                            <Form.Control
                              as="select"
                            />
                          </Col>
                          </Form.Row>
              </Form>
            </Card.Text>
          </Card>
        </Col>
        <Col md={2} sm={1}></Col>
      </Row>
    </div>
  );
}
