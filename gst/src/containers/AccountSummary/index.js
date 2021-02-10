import { useState } from "react";
import { Card, Form, Row, Col, Alert,Table } from "react-bootstrap";

//component
import ToggleButton from "../../components/ToggleButton/index";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faBookmark,
    faLayerGroup,
    faUsers,
    faPrint,
    faMoneyBillAlt,
    faTimes,
    faList
} from "@fortawesome/free-solid-svg-icons";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons"
import Button from "../../components/Button/index";
import DashboardCard from "../../components/DashboardCard/index";
import Chart from "react-google-charts";

//scss
import "./index.scss";

export default function InwardPayment() {

    const receiptDetails = [
        {
            invoiceNo: 1,
            companyName: "Product",
            name:"Jo",
            contact: "987654321",
            date: "06-Feb-2020",
            amount: 200.0,
        },
        {
            invoiceNo: 2,
            companyName: "Product prod",
            date: "06-Dec-2020",
            name:"Jo",
            contact: "987654321",
            amount: 200.0,
        }
    ];

    return (
        <div className="screen-stocks">
            <Alert key="infoAlert" variant="info">
                <div className="d-flex justify-content-between">
                    <div>Update Contact Phone! Please update your contact phone number</div>
                    <Button
                        name="Update Phone"
                        havingIcon={false}
                        buttonType="btn btn-info"
                    />
                </div>
            </Alert>

            <Row>
                <Col sm={12} md={6}>
                    <DashboardCard
                        name="Account Summary"
                        havingIcon={true}
                        iconType={faBookmark}
                        havingCloseIcon={false}
                        productIcon1={faLayerGroup}
                        count1={2}
                        description1="Total Products"
                        productIcon2={faUsers}
                        count2={3}
                        description2="Total Customer"
                    />
                </Col>
                <Col>
                    <DashboardCard
                        name="Total Invoice - Feb 2021"
                        havingIcon={true}
                        iconType={faBookmark}
                        havingCloseIcon={true}
                        productIcon1={faPrint}
                        count1={2}
                        description1="Total Sales Invoice"
                        productIcon2={faPrint}
                        count2={3}
                        description2="Total Purchase Invoice"
                    />
                </Col>
            </Row>

            <Row>
                <Col>
                    <DashboardCard
                        name="Total Invoice - Feb 2021"
                        havingIcon={true}
                        iconType={faBookmark}
                        havingCloseIcon={true}
                        productIcon1={faMoneyBillAlt}
                        count1={2000}
                        subCount1="+ GST 96"
                        description1="Total Sales Amount"
                        productIcon2={faMoneyBillAlt}
                        count2={300}
                        subCount2="+ GST 96"
                        description2="Total Purchase Amount"
                    />
                </Col>
            </Row>

            <Row>
                <Col>
                    <DashboardCard
                        name="Total Payment Outstanding"
                        havingIcon={true}
                        iconType={faBookmark}
                        havingCloseIcon={true}
                        productIcon1={faMoneyBillAlt}
                        count1={0}
                        description1="Total Sales Outstanding"
                        productIcon2={faMoneyBillAlt}
                        count2={300}
                        description2="Total Purchase Outstanding"
                    />
                </Col>
            </Row>

            <Row>
                <Col sm={12} md={6}>
                    <Card className="card-style mb-4">
                        <Card.Text className="card-title pb-2 d-flex justify-content-between m-0">
                            <div>
                                <FontAwesomeIcon icon={faBookmark} className="mr-2 mt-3" />
            Invoice Count Summary
          </div>
                            <FontAwesomeIcon icon={faTimes} className="mr-2 mt-3" />
                        </Card.Text>
                        <Card.Text>
                            <Chart
                                width={"100%"}
                                height={"350px"}
                                chartType="Bar"
                                loader={<div>Loading Chart</div>}
                                data={[
                                    ["Year", "Sales", "Expenses"],
                                    ["2014", 1000, 1000],
                                    ["2015", 1170, 460],
                                    ["2016", 660, 1120],
                                    ["2017", 1030, 540]
                                ]}
                                options={{
                                    colors: ['#ededed', '#cadee7'],
                                    // Material design options
                                    chart: {
                                        title: "Company Performance",
                                        subtitle: "Sales, Expenses, and Profit: 2014-2017"
                                    }
                                }}
                                // For tests
                                rootProps={{ "data-testid": "2" }}
                            />
                        </Card.Text>
                    </Card>

                </Col>
                <Col sm={12} md={6}>
                    <Card className="card-style mb-4">
                        <Card.Text className="card-title pb-2 d-flex justify-content-between m-0">
                            <div>
                                <FontAwesomeIcon icon={faBookmark} className="mr-2 mt-3" />
            Invoice Amount Summary
          </div>
                            <FontAwesomeIcon icon={faTimes} className="mr-2 mt-3" />
                        </Card.Text>
                        <Card.Text>
                            <Chart
                                width={'100%'}
                                height={"350px"}
                                chartType="LineChart"
                                loader={<div>Loading Chart</div>}
                                data={[
                                    ['x', 'Purchase', 'Sale'],
                                    [0, 0, 0],
                                    [1, 10, 5],
                                    [2, 23, 15],
                                    [3, 17, 9],
                                    [4, 18, 10],
                                    [5, 9, 5],
                                    [6, 11, 3],
                                    [7, 27, 19],
                                ]}
                                options={{
                                    colors: ['#ededed', '#cadee7'],
                                    series: {
                                        1: { curveType: 'function' },
                                    },
                                }}
                                rootProps={{ 'data-testid': '2' }}
                            />
                        </Card.Text>
                    </Card>
                </Col>
            </Row>

            <Row>
                <Col>
                    <Card className="card-style mb-4">
                        <Card.Text className="card-title pb-2 d-flex justify-content-between m-0">
                            <div>
                                <FontAwesomeIcon icon={faList} className="mr-2 mt-3" />
                                Sales Invoice Due
                            </div>
                            <div className="d-flex mt-2">
                            <Button
                                    name="View All"
                                    havingIcon={true}
                                    iconType={faList}
                                    buttonType="btn btn-primary"
                                />
                                &nbsp;&nbsp;&nbsp;&nbsp;
                            <FontAwesomeIcon icon={faTimes} className="mr-2 mt-2" />
                            </div>
                        </Card.Text>
                        <Card.Text>
                        <Table bordered striped hover responsive className="mb-0">
                        <thead>
                            <tr>
                                <th >INVOICE NO</th>
                                <th >COMPANY NAME</th>
                                <th >NAME</th>
                                <th >PHONE</th>
                                <th>DUE DATE</th>
                                <th >REMAINING PAYMENT</th>
                            </tr>
                        </thead>
                        <tbody>
                            {receiptDetails.length > 0 ? (
                                receiptDetails.map((item) => {
                                    return (
                                        <tr>
                                            <td>{item.invoiceNo}</td>
                                            <td >{item.companyName}</td>
                                            <td >{item.name}</td>
                                            <td >{item.contact}</td>
                                            <td >{item.date}</td>
                                            <td >{item.amount}</td>
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
                </Col>
            </Row>

            <Row>
                <Col>
                    <Card className="card-style mb-4">
                        <Card.Text className="card-title pb-2 d-flex justify-content-between m-0">
                            <div>
                                <FontAwesomeIcon icon={faList} className="mr-2 mt-3" />
                                Purchase Invoice Due
                            </div>
                            <div className="d-flex mt-2">
                            <Button
                                    name="View All"
                                    havingIcon={true}
                                    iconType={faList}
                                    buttonType="btn btn-primary"
                                />
                                &nbsp;&nbsp;&nbsp;&nbsp;
                            <FontAwesomeIcon icon={faTimes} className="mr-2 mt-2" />
                            </div>
                        </Card.Text>
                        <Card.Text>
                        <Table bordered striped hover responsive className="mb-0">
                        <thead>
                            <tr>
                                <th >PURCHASE INVOICE NO</th>
                                <th >COMPANY NAME</th>
                                <th >NAME</th>
                                <th >PHONE</th>
                                <th>DUE DATE</th>
                                <th >REMAINING PAYMENT</th>
                            </tr>
                        </thead>
                        <tbody>
                            {receiptDetails.length > 0 ? (
                                receiptDetails.map((item) => {
                                    return (
                                        <tr>
                                            <td>{item.invoiceNo}</td>
                                            <td >{item.companyName}</td>
                                            <td >{item.name}</td>
                                            <td >{item.contact}</td>
                                            <td >{item.date}</td>
                                            <td >{item.amount}</td>
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
                </Col>
            </Row>
        </div>
    );
}
