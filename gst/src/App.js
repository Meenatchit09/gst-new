import { BrowserRouter as Router, Switch, Route, withRouter } from "react-router-dom";

//container
import Stocks from "./containers/Stocks/index";
import Customers from "./containers/Customers/index";
import SalesInvoice from "./containers/SalesInvoice/index";
import InwardPayment from "./containers/InwardPayment/index";
import AccountSummary from "./containers/AccountSummary/index";
import AddCustomer from "./containers/Customers/AddNewCustomer/index";
import AddProduct from "./containers/Stocks/AddNewProduct/index";
import AddTransport from "./containers/Stocks/AddNewTransport/index";
import Dashboard from "./containers/Dashboard/index";
import AddSalesInvoice from "./containers/SalesInvoice/AddSalesInvoice/index";
import Header from "./components/Header/index";

//css
import "bootstrap/dist/css/bootstrap.min.css";
import "./styles.scss";
export default function App() {
  return (
    <div className="app-screen">
      <Header />
      <main className="content">
      <Router>
        <Switch>
          <Route path="/" exact component={Dashboard} />
          <Route path="/stocks" component={Stocks} />
          <Route path="/customers" component={Customers} />
          <Route path="/addcustomer" component={AddCustomer} />
          <Route path="/salesinvoice" component={SalesInvoice} />
          <Route path="/inwardpayment" component={InwardPayment} />
          <Route path="/accountsummary" component={AccountSummary} />
          <Route path="/addproduct" component={AddProduct} />
          <Route path="/addtransport" component={AddTransport} />
          <Route path="/addsalesinvoice" component={AddSalesInvoice} />
        </Switch>
      </Router>
      </main>
    </div>
  );
}
