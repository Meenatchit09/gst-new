import { useHistory } from 'react-router-dom';
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
    faEdit,
    faTrash
} from "@fortawesome/free-solid-svg-icons";
import Button from "../../components/Button/index";

//scss
import "./index.scss";
import { propTypes } from "react-bootstrap/esm/Image";
export default function Customers() {
    const history = useHistory()
    const customerDetails = [
        {
            name: "Product",
            payment: 200.0,
            contactNumber: "987654321",
            companyType: "Product based",
            state: "Tamil nadu",
            status: "Active"
        },
        {
            name: "Product prod",
            payment: 0.0,
            contactNumber: "1234561234",
            companyType: "Product based",
            state: "Tamil nadu",
            status: "Active"
        }
    ];

    return (
        <div className="screen-stocks">

            <Card className="card-style mb-4">
                <Card.Text className="card-title pb-2">
                    <FontAwesomeIcon icon={faSearch} className="mr-2 mt-3" />
          Search Customer / Vendor
        </Card.Text>
                <Card.Text className="ml-3 mr-3">
                    <Form>
                        <Row>
                            <Col xs={12} sm={6} md={3} >
                                <Form.Group controlId="productName">
                                    <Form.Label>Search By Name :</Form.Label>
                                    <Form.Control
                                        type="text"
                                        placeholder="Select Cusomer/Vendor"
                                    />
                                </Form.Group>
                            </Col>
                            <Col xs={12} sm={6} md={3} >
                                <Form.Group controlId="stocksMin">
                                    <Form.Label>Get By GSTIN :</Form.Label>
                                    <Form.Control
                                        type="text"
                                        placeholder="Enter Search GSTIN"
                                    />
                                </Form.Group>
                            </Col>
                            <Col xs={12} sm={6} md={3} >
                                <Form.Group controlId="stockName">
                                    <Form.Label>Select By CompanyType</Form.Label>
                                    <Form.Control as="select">
                                        <option>Select By CompanyType</option>
                                    </Form.Control>
                                </Form.Group>
                            </Col>
                            <Col xs={12} sm={6} md={3} className="d-flex mb-3 justify-content-xs-center justify-content-sm-center justify-content-md-end mt-4">
                                <Button
                                    name="Print Stock"
                                    havingIcon={true}
                                    iconType={faPrint}
                                    buttonType="btn btn-primary"
                                />
                &nbsp;&nbsp;
                <Button
                                    name="Submit"
                                    havingIcon={true}
                                    iconType={faSearch}
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
            Customer / Vendor List
          </div>
                    <div className="d-flex justify-content-end align-items-end">
                        <Button
                            name="Add New"
                            havingIcon={true}
                            iconType={faPlus}
                            buttonType="btn btn-primary"
                            onClick={() => history.push("/addcustomer")}
                        />
              &nbsp;&nbsp;
                            <Button
                            name="Import Customers"
                            havingIcon={true}
                            iconType={faDownload}
                            buttonType="btn btn-primary"
                        />
                    </div>
                </Card.Text>
                <Card.Text>
                    <Table bordered striped hover responsive="sm" className="mb-0">
                        <thead>
                            <tr>
                                <th ><input type="checkbox" /></th>
                                <th className="green-text">CUSTOMER /VERDOR NAME</th>
                                <th>OUTSTANDING PAYMENT</th>
                                <th className="green-text">CONTACT NUMBER</th>
                                <th className="green-text">COMPANY TYPE</th>
                                <th className="green-text">STATE</th>
                                <th className="green-text">STATUS</th>
                                <th>ACTION</th>
                            </tr>
                        </thead>
                        <tbody>
                            {customerDetails.length > 0 ? (
                                customerDetails.map((item) => {
                                    return (
                                        <tr>
                                            <td><Form.Check type="checkbox" className="m-0" /></td>
                                            <td>{item.name}</td>
                                            <td>{item.payment}</td>
                                            <td>{item.contactNumber}</td>
                                            <td>{item.companyType}</td>
                                            <td>{item.state}</td>
                                            <td>{item.status}</td>
                                            <td><Button
                                                name="Edit"
                                                havingIcon={true}
                                                iconType={faEdit}
                                                buttonType="btn btn-outline-dark btn-light"
                                            /></td>

                                        </tr>
                                    );
                                })
                            ) : (
                                    <tr>
                                        <td colSpan="6"><div className="d-flex justify-content-center">No results</div></td>
                                    </tr>
                                )}
                        </tbody>
                    </Table>
                </Card.Text>
            </Card>
            {customerDetails.length > 0 && (
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
                                    name="Import Customers"
                                    havingIcon={true}
                                    iconType={faDownload}
                                    buttonType="btn btn-primary"
                                />
                            &nbsp;&nbsp;
                            <Button
                                    name="Add New"
                                    havingIcon={true}
                                    iconType={faPlus}
                                    buttonType="btn btn-primary"
                                    onClick={() => history.push("/addcustomer")}
                                />

                            </div>
                        </div>
                    </Card.Text>
                </Card>
            )}
        </div>
    );
}
