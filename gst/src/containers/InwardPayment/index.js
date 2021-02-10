import { useState } from "react";
import { Card, Form, Row, Col, Table } from "react-bootstrap";

//component
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faSearch,
    faPrint,
    faList,
    faSave,
    faDownload,
    faChevronLeft,
    faPlus,
    faCog,
    faTrash,
    faListAlt
} from "@fortawesome/free-solid-svg-icons";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons"
import Button from "../../components/Button/index";

//scss
import "./index.scss";

export default function InwardPayment() {

    const receiptDetails = [
        {
            receiptNo: 1,
            companyName: "Product",
            date: "06-Feb-2020",
            paymentType: "Cash",
            paymentNote: "",
            amount: 200.0,
            advancePay: 0.00
        },
        {
            receiptNo: 2,
            companyName: "Product prod",
            date: "06-Dec-2020",
            paymentType: "Cash",
            paymentNote: "",
            amount: 200.0,
            advancePay: 0.00
        }
    ];

    return (
        <div className="screen-stocks">

            <Card className="card-style mb-4">
                <Card.Text className="card-title pb-2">
                    <FontAwesomeIcon icon={faSearch} className="mr-2 mt-3" />
          Search Payment Receipt
        </Card.Text>
                <Card.Text className="ml-3 mr-3">
                    <Form>
                        <Row>
                            <Col xs={12} sm={6} md={3} >
                                <Form.Group controlId="companyId">
                                    <Form.Label>Search By Company Name :</Form.Label>
                                    <Form.Control as="select">
                                        <option>Select By Company</option>
                                    </Form.Control>
                                </Form.Group>
                            </Col>
                            <Col xs={12} sm={6} md={3} >
                                <Form.Group controlId="stocksMin">
                                    <Form.Label>Search By Payment Type :</Form.Label>
                                    <Form.Control as="select">
                                        <option>Select By Payment Type</option>
                                    </Form.Control>
                                </Form.Group>
                            </Col>
                            <Col xs={12} sm={6} md={3} >
                                <Form.Group controlId="stockName">
                                    <Form.Label>Select By Start Date</Form.Label>
                                    <Form.Control
                                        type="text"
                                        placeholder="Search By Start Date"
                                    />
                                </Form.Group>
                            </Col>
                            <Col xs={12} sm={6} md={3} >
                                <Form.Group controlId="stockName">
                                    <Form.Label>Select By End Date</Form.Label>
                                    <Form.Control
                                        type="text"
                                        placeholder="Search by end date"
                                    />
                                </Form.Group>
                            </Col>
                            <Col xs={12} sm={6} md={3} className="d-flex mb-3 justify-content-xs-center justify-content-sm-center justify-content-md-end mt-4">
                                <Button
                                    name="Search"
                                    havingIcon={true}
                                    iconType={faSearch}
                                    buttonType="btn btn-primary"
                                />
                &nbsp;&nbsp;
                <Button
                                    name="Show All Data"
                                    havingIcon={true}
                                    iconType={faListAlt}
                                    buttonType="btn btn-primary"
                                />
                            </Col>
                        </Row>
                    </Form>
                </Card.Text>
            </Card>

            <Card className="card-style mb-4">
                <Card.Text className="card-title pb-2 d-flex justify-content-between m-0">
                    <div>
                        <FontAwesomeIcon icon={faList} className="mr-2 mt-3" />
            Payment Receipt List
          </div>
                    <div className="d-flex justify-content-end align-items-end">
                        <Button
                            name="Add New"
                            havingIcon={true}
                            iconType={faPlus}
                            buttonType="btn btn-primary"
                        />
                    </div>
                </Card.Text>
                <Card.Text>
                    <Table bordered striped hover responsive className="mb-0">
                        <thead>
                            <tr>
                                <th ><input type="checkbox" /></th>
                                <th className="green-text">RECEIPT NO</th>
                                <th className="green-text">COMPANY NAME</th>
                                <th className="green-text">PAYMENT DATE</th>
                                <th className="green-text">PAYMENT TYPE</th>
                                <th>PAYMENT NOTE</th>
                                <th className="green-text">AMOUNT</th>
                                <th className="green-text">ADVANCE PAY ON RECEIPT</th>
                                <th>EDIT</th>
                                <th>PRINT</th>
                            </tr>
                        </thead>
                        <tbody>
                            {receiptDetails.length > 0 ? (
                                receiptDetails.map((item) => {
                                    return (
                                        <tr>
                                            <td className="text-center align-middle"><Form.Check type="checkbox" className="m-0" /></td>
                                            <td className="text-center align-middle">{item.receiptNo}</td>
                                            <td className="text-center align-middle">{item.companyName}</td>
                                            <td className="text-center align-middle">{item.date}</td>
                                            <td className="text-center align-middle">{item.paymentType}</td>
                                            <td className="text-center align-middle">{item.paymentNote}</td>
                                            <td className="text-center align-middle">{item.amount}</td>
                                            <td className="text-center align-middle">{item.advancePay}</td>
                                            <td className="text-center align-middle"><Button
                                                name="Edit"
                                                havingIcon={true}
                                                iconType={faCog}
                                                buttonType="btn btn-outline-dark btn-light"
                                            /></td>
                                            <td className="text-center align-middle">
                                                <div className="mb-1 print-button-alignment">
                                                    <Button
                                                        name="Print"
                                                        havingIcon={true}
                                                        iconType={faPrint}
                                                        buttonType="btn btn-outline-dark btn-light"
                                                    />
                                                </div>
                                                <Button
                                                        name="Share"
                                                        havingIcon={true}
                                                        iconType={faWhatsapp}
                                                        buttonType="btn btn-outline-dark btn-light"
                                                    />
                      
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
            {receiptDetails.length > 0 && (
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
                            <Button
                                name="Add New"
                                havingIcon={true}
                                iconType={faPlus}
                                buttonType="btn btn-primary"
                            />

                        </div>
                    </Card.Text>
                </Card>
            )}
        </div>
    );
}
