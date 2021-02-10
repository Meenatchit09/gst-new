import React from "react";
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
import "./DrawerToggleButton.scss";

const SideDrawerToggleButton = (props) => {
  return (
    <button className="toggle-button" onClick={props.click}>
      <FontAwesomeIcon icon={faList} className="fa-2x" />
    </button>
  );
};

export default SideDrawerToggleButton;
