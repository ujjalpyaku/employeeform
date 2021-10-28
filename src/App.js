import "./App.css";
import EmployeeForm from "./components/employeeform";
import 'antd/dist/antd.css';
import { Layout, Menu } from 'antd';
import AboutUs from "./components/aboutus";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./components/navbar";

const { Header, Content } = Layout;
function App() {
  return (

    <div>
      <Router>
        <Navbar/>
        <Switch>
          <Route path="/" exact component={EmployeeForm}/>
          <Route path="/aboutus" exact component={AboutUs}/>
          <Route path="/employeeform" exact component={EmployeeForm}/>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
