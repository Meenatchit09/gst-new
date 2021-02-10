import React from "react";
import Button from "../../../Button/index";
import {
  faBookmark,
  faTachometerAlt,
  faCog,
  faUsers,
  faTruckMoving,
  faMoneyBillAlt,
  faPrint,
} from "@fortawesome/free-solid-svg-icons";
import "./index.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import "./index.scss";

const SideDrawer = (props) => {
  return (
    <nav className={`side-drawer ${props.show && "open"}`}>
      <div className="side-drawer-header"></div>
      <div className="ml-3">
      <a className="d-flex text-center" href="/">
          <div className="text-center mb-2"><FontAwesomeIcon icon={faTachometerAlt} className="mr-2" /></div>
          Dashboard
        </a>
        <a className="d-flex text-center mb-2" href="/">
          <div className="text-center"><FontAwesomeIcon icon={faCog} className="mr-2" /></div>
          Settings
        </a>
        <a className="d-flex text-center mb-2" href="/customers"> 
          <div className="text-center"><FontAwesomeIcon icon={faUsers} className="mr-2" /></div>
          Customers
        </a>
        <a className="d-flex text-center mb-2" href="/">
          <div className="text-center"><FontAwesomeIcon icon={faTruckMoving} className="mr-2" /></div>
          Transport
        </a>
        <a className="d-flex text-center mb-2" href="/stocks">
          <div className="text-center"><FontAwesomeIcon icon={faMoneyBillAlt} className="mr-2" /></div>
          Products
        </a>
        <a className="d-flex text-center mb-2" href="/salesinvoice">
          <div className="text-center"><FontAwesomeIcon icon={faPrint} className="mr-2" /></div>
          Sale Invoice
        </a>
        <a className="d-flex text-center mb-2" href="/inwardpayment">
          <div className="text-center"><FontAwesomeIcon icon={faPrint} className="mr-2" /></div>
          Purcharse Invoice
        </a>
        <a className="d-flex text-center mb-2" href="/accountsummary">
          <div className="text-center"><FontAwesomeIcon icon={faMoneyBillAlt} className="mr-2" /></div>
          Payment Receipt
        </a>
        <div className="session pl-2" >session: <select className="toolbar-select">&nbsp;<option>2020-2021</option></select></div>
      </div>
      <div className="d-flex justify-content-center logout-button mt-5">
        <Button
                                    name="Logout"
                                    havingIcon={false}
                                    buttonType="btn btn-success"
                                    isRoundButton={true}
                                />
        </div>
    </nav>
  );
};

export default SideDrawer;
