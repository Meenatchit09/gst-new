import { useState } from "react";
import { Card, Form, Row, Col, Table } from "react-bootstrap";

//component
import ToggleButton from "../../components/ToggleButton/index";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSearch,
  faPrint,
  faList,
  faSave,
  faDownload,
  faChevronLeft
} from "@fortawesome/free-solid-svg-icons";
import Button from "../../components/Button/index";

//scss
import "./index.scss";
export default function Stocks() {
  const [ischecked, setChecked] = useState(true);
  const setOnChange = (checked) => {
    setChecked(checked);
  };
  const manageStock = [
    {
      name: "Product",
      sellPrice: 200.0,
      hsn: "1sdfs3",
      uom: "",
      currentStock: -2.0
    },
    {
      name: "Product prod",
      sellPrice: 0.0,
      hsn: "2d3f44",
      uom: "",
      currentStock: 1
    }
  ];
  console.log('manageStock=',manageStock.length)
  return (
    <div className="screen-stocks">
      <div className="mb-4 d-flex">
        <div className="mr-3 mt-1">Inventory option</div>
        <ToggleButton
          name="inventory option"
          checked={ischecked}
          onToggleChange={setOnChange}
        />
      </div>
      <Card className="card-style mb-4">
        <Card.Text className="card-title pb-2">
          <FontAwesomeIcon icon={faSearch} className="mr-2 mt-3" />
          Search Product
        </Card.Text>
        <Card.Text className="ml-3 mr-3">
          <Form>
            <Row>
              <Col sm={12} md={4} lg={3}>
                <Form.Group controlId="productName">
                  <Form.Label>Search By Product Name :</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter your search product name"
                  />
                </Form.Group>
              </Col>
              <Col sm={12} md={4} lg={3}>
                <Form.Group controlId="stocksMin">
                  <Form.Label>Stocks Available (Min) :</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Search stocks available more than"
                  />
                </Form.Group>
              </Col>
              <Col sm={12} md={4} lg={3}>
                <Form.Group controlId="stocksMax">
                  <Form.Label>Stocks Available (Max) :</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Search stocks available less than"
                  />
                </Form.Group>
              </Col>
              <Col sm={12} md={4} lg={3}>
                <Form.Group controlId="stockName">
                  <Form.Label>Search By Stocks</Form.Label>
                  <Form.Control as="select">
                    <option>--- Select stocks ---</option>
                  </Form.Control>
                </Form.Group>
              </Col>
              <Col
                sm={12}
                md={4}
                lg={3}
                className="d-flex justify-content-around mb-3 align-items-center"
              >
                <Button
                  name="Print Stock"
                  havingIcon={true}
                  iconType={faPrint}
                  buttonType="btn btn-primary"
                />
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
            Manage Stocks
          </div>
          {manageStock.length > 0 && (
            <div className="d-flex justify-content-end align-items-end">
              <Button
                name="Bulk Edit Stock"
                havingIcon={true}
                iconType={faDownload}
                buttonType="btn btn-primary"
              />
              &nbsp;&nbsp;
              <Button
                name="Save"
                havingIcon={true}
                iconType={faSave}
                buttonType="btn btn-primary"
              />
            </div>
          )}
        </Card.Text>
        <Card.Text>
          <Table bordered striped hover responsive="sm" className="mb-0">
            <thead>
              <tr>
                <th>NAME</th>
                <th>SELL PRICE</th>
                <th>HSN CODE</th>
                <th>UOM</th>
                <th>CURRENT STOCK</th>
                <th>NEW STOCK</th>
              </tr>
            </thead>
            <tbody>
              {manageStock.length > 0 ? (
                manageStock.map((item) => {
                  return (
                    <tr>
                      <td>{item.name}</td>
                      <td>{item.sellPrice}</td>
                      <td>{item.hsn}</td>
                      <td>{item.uom}</td>
                      <td>{item.currentStock}</td>
                      <td>
                        <input type="text" name="newStock" />
                      </td>
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
      {manageStock.length > 0 && (
        <Card className="card-style mb-4">
          <Card.Text className="card-title pb-4 d-flex justify-content-start pt-4">
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
          </Card.Text>
        </Card>
      )}
    </div>
  );
}
