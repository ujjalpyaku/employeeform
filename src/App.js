import "./App.css";
import EmployeeForm from "./components/employeeform";
import 'antd/dist/antd.css';
import AboutUs from "./components/aboutus";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./components/navbar";
import EmployeeTable from "./components/employeeTable";

function App() {
  return (

    <div>
      <Router>
        <Navbar/>
        <Switch>
          <Route path="/" exact component={EmployeeForm}/>
          <Route path="/aboutus" exact component={AboutUs}/>
          <Route path="/employeeform" exact component={EmployeeForm}/>
          <Route path="/employeetable" exact component={EmployeeTable}/>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
