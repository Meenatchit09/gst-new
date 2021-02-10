import React from "react";
import DrawerToggleButton from "../SideDrawer/DrawerToggleButton";
import Button from "../../../../components/Button/index";
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
const ToolBar = (props) => {
  return (
    <div>
    <header className="toolbar">
      <nav className="toolbar-navigation">
        <div className="toolbar-toggle-button">
          <DrawerToggleButton click={props.onClickHandler} />
        </div>
        <div className="toolbar-logo">
          <a href="/">The logo</a>
        </div>
        <div className="spacer" />
        <div className="toolbar-navigation-items">
          <ul>
            <li>
              <div className="toolbar-session">session: <select className="toolbar-select">&nbsp;<option>2020-2021</option></select></div>
            </li>
            <li>
            <Button
                                    name="Logout"
                                    havingIcon={false}
                                    buttonType="btn btn-light"
                                    isRoundButton={true}
                                />
            </li>
          </ul>
        </div>
      </nav>
    </header>
    <nav className="toolbar-menu">
      <ul className="d-flex">
        <a className="navbar-button text-center" href="/">
          <div className="text-center"><FontAwesomeIcon icon={faTachometerAlt} className="" /></div>
          Dashboard
        </a>
        <a className="navbar-button text-center" href="/">
          <div className="text-center"><FontAwesomeIcon icon={faCog} className="" /></div>
          Settings
        </a>
        <a className="navbar-button text-center" href="/customers"> 
          <div className="text-center"><FontAwesomeIcon icon={faUsers} className="" /></div>
          Customers
        </a>
        <a className="navbar-button text-center" href="/">
          <div className="text-center"><FontAwesomeIcon icon={faTruckMoving} className="" /></div>
          Transport
        </a>
        <a className="navbar-button text-center" href="/stocks">
          <div className="text-center"><FontAwesomeIcon icon={faMoneyBillAlt} className="" /></div>
          Products
        </a>
        <a className="navbar-button text-center" href="/salesinvoice">
          <div className="text-center"><FontAwesomeIcon icon={faPrint}  /></div>
          Sale Invoice
        </a>
        <a className="navbar-button text-center" href="/inwardpayment">
          <div className="text-center"><FontAwesomeIcon icon={faPrint} className="" /></div>
          Purcharse Invoice
        </a>
        <a className="navbar-button text-center" href="/accountsummary">
          <div className="text-center"><FontAwesomeIcon icon={faMoneyBillAlt} className="" /></div>
          Payment Receipt
        </a>
      </ul>
    </nav>
    </div>
  );
};

export default ToolBar;
