import { Card, Row, Col } from "react-bootstrap";
import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTimes
} from "@fortawesome/free-solid-svg-icons";

//scss
import "./index.scss";

const DashboardCard = (props) => {
  const { name, havingIcon, iconType, havingCloseIcon, count1, description1, count2, description2, productIcon1, productIcon2, subCount1, subCount2 } = props;
  return (
    <div className="dashboard-card">
      <Card className="card-style mb-4">
        <Card.Text className="card-title pb-2 d-flex justify-content-between m-0">
          <div>
            {havingIcon && (
              <FontAwesomeIcon icon={iconType} className="mr-2 mt-3" />
            )}
            {name}
          </div>
          {havingCloseIcon && (
            <FontAwesomeIcon icon={faTimes} className="mr-2 mt-3" />
          )}
        </Card.Text>
        <Card.Text>
          <Row>
            <Col sm={6} md={6}>
              <div className="d-flex flex-column justify-content-center align-items-center border-right mt-4 mb-4">
                <FontAwesomeIcon icon={productIcon1} className="fa-2x productIcon" />
                <div className="count">{count1}</div>
                {subCount1 && <div className="sub-count">{subCount1}</div>}
                <div className="description">{description1}</div>
              </div>
            </Col>
            <Col sm={6} md={6}>
              <div className="d-flex flex-column justify-content-center align-items-center border-right mt-4 mb-4">
                <FontAwesomeIcon icon={productIcon2} className="fa-2x productIcon" />
                <div className="count">{count2}</div>
                {subCount2 && <div className="sub-count">{subCount2}</div>}
                <div className="description">{description2}</div>
              </div>
            </Col>
          </Row>
        </Card.Text>
      </Card>
    </div>
  );
};

DashboardCard.propTypes = {
  name: PropTypes.string,
  havingIcon: PropTypes.bool,
  havingCloseIcon: PropTypes.bool,
  iconType: PropTypes.string
};

DashboardCard.defaultProps = {
  havingIcon: false,
  havingCloseIcon: false
};

export default DashboardCard;
