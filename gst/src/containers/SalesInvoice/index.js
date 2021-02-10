import { useState } from "react";
import { useHistory } from 'react-router-dom';
import { Card, Form, Row, Col, Table } from "react-bootstrap";

//component
import ToggleButton from "../../components/ToggleButton/index";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSearch,
  faPrint,
  faList,
  faSave,
  faChevronLeft,
  faPlusSquare,
  faListAlt,
  faPlus,
  faEdit,
  faChevronDown,
  faTrash
} from "@fortawesome/free-solid-svg-icons";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons"
import Button from "../../components/Button/index";

//scss
import "./index.scss";
export default function SalesInvoice() {
  const history = useHistory()
  const invoiceDetails = [
    {
      invoiceNo: 1,
      companyName: "Product",
      date: "06-Feb-2020",
      total: 200.0,
      remaining: 0.00
    },
    {
      invoiceNo: 2,
      companyName: "Product prod",
      date: "06-Dec-2020",
      total: 200.0,
      remaining: 0.00
    }
  ];

  return (
    <div className="screen-stocks">
      <Card className="card-style mb-4">
        <Card.Text className="card-title pb-2">
          <div className="d-flex justify-content-between">
            <div>
              <FontAwesomeIcon icon={faSearch} className="mr-2 mt-3" />
          Search Invoice Bill
            </div>
            <div className="mt-3">
              <FontAwesomeIcon icon={faPlusSquare} className="fa-lg" />
            </div>
          </div>

        </Card.Text>
      </Card>

      <Card className="mb-4">
        <Card.Text className="card-title pb-2">
          <FontAwesomeIcon icon={faListAlt} className="mr-2 mt-3" />
          Invoice Summary
        </Card.Text>
        <Card.Text className="pb-4">
          <Row>
            <Col className="col-style">Total Transactions</Col>
            <Col className="col-style">Total CGST</Col>
            <Col className="col-style">Total SGST</Col>
            <Col className="col-style">Total IGST</Col>
            <Col className="col-style">Total Taxable</Col>
            <Col className="col-style">Total Value</Col>
          </Row>
          <Row>
            <Col className="col-style">1</Col>
            <Col className="col-style">Rs.48.00</Col>
            <Col className="col-style">Rs.48.00</Col>
            <Col className="col-style">Rs.0.00</Col>
            <Col className="col-style">Rs.400.00</Col>
            <Col className="col-style">Rs.496.00</Col>
          </Row>
        </Card.Text>
      </Card>

      <Card className="card-style mb-4">
        <Card.Text className="card-title pb-2 d-flex justify-content-between m-0">
          <div>
            <FontAwesomeIcon icon={faList} className="mr-2 mt-3" />
            Invoice List
          </div>
          <div className="d-flex justify-content-end align-items-end">
            <Button
              name="Add New"
              havingIcon={true}
              iconType={faPlus}
              buttonType="btn btn-primary"
              onClick={() => history.push("/addsalesinvoice")}
            />

          </div>
        </Card.Text>
        <Card.Text>
          <Table bordered striped hover responsive="sm" className="mb-0">
            <thead>
              <tr>
                <th ><input type="checkbox" /></th>
                <th className="green-text">INVOICE NO</th>
                <th className="green-text">COMPANY NAME</th>
                <th className="green-text">DATE</th>
                <th className="green-text">TOTAL</th>
                <th>REMAINING AMOUNT</th>
                <th className="green-text">PAYMENT TYPE</th>
                <th>EDIT</th>
                <th>PRINT OPTION</th>
                <th>PRINT</th>
              </tr>
            </thead>
            <tbody>
              {invoiceDetails.length > 0 ? (
                invoiceDetails.map((item) => {
                  return (
                    <tr>
                      <td><Form.Check type="checkbox" className="m-0" /></td>
                      <td>{item.invoiceNo}</td>
                      <td>{item.companyName}</td>
                      <td>{item.date}</td>
                      <td>{item.total}</td>
                      <td>{item.remaining}</td>
                      <td className="button-font"><Button

                        name="CASH"
                        havingIcon={false}
                        isRoundButton={true}
                        buttonType="btn btn-success"
                      /></td>
                      <td><Button
                        name="Edit"
                        havingIcon={true}
                        iconType={faEdit}
                        buttonType="btn btn-outline-dark btn-light"
                      /></td>
                      <td>
                        <Row>
                        <Col><Form.Check type="checkbox" className="m-0" label="Original" /></Col>
                        <Col><Form.Check type="checkbox" className="m-0" label="Transport" /></Col>
                        </Row>
                        <Row>
                        <Col><Form.Check type="checkbox" className="m-0" label="Office" /></Col>
                        <Col><Form.Check type="checkbox" className="m-0" label="Duplicate" /></Col>
                        </Row>
                        </td>
                        
                      <td>
                        <div className="print-button mb-1">
                        <Button
                        name="Print"
                        havingIcon={true}
                        iconType={faPrint}
                        buttonType="btn btn-outline-dark btn-light"
                      />
                      </div>
                      <div className="d-flex">
                      <Button
                        name="Share"
                        havingIcon={true}
                        iconType={faWhatsapp}
                        buttonType="btn btn-outline-dark btn-light"
                      />
                      &nbsp;
                      <div className="down-arrow">
                      <Button
                        
                        name=""
                        havingIcon={true}
                        iconType={faChevronDown}
                        buttonType="btn btn-outline-dark btn-light"
                      />
                      </div>
                      </div>
                      </td>
                    </tr>
                  );
                })
              ) : (
                  <tr>
                    <td colSpan="10"><div className="d-flex justify-content-center">No results</div></td>
                  </tr>
                )}
            </tbody>
          </Table>
        </Card.Text>
      </Card>

      <Card className="card-style mb-4">
                    <Card.Text className="card-title pb-4 pt-4">
                        <div className="d-flex justify-content-between">
                            <div>
                                <Button
                                    name="Delete"
                                    havingIcon={true}
                                    iconType={faTrash}
                                    buttonType="btn btn-danger"
                                />
                            </div>
                            &nbsp;&nbsp;

                        <div className="d-flex">

                                <Button
                                    name="Print Selected"
                                    havingIcon={true}
                                    iconType={faPrint}
                                    buttonType="btn btn-primary"
                                />
                            &nbsp;&nbsp;
                            <Button
                                    name="Add New"
                                    havingIcon={true}
                                    iconType={faPlus}
                                    buttonType="btn btn-primary"
                                    onClick={() => history.push("/addsalesinvoice")}
                                />

                            </div>
                        </div>
                    </Card.Text>
                </Card>
    </div>
  );
}
