import './App.css';
import { Component} from 'react';

//Bootstrap styling component imports
import { Navbar, NavItem, NavDropdown, DropdownItem, Nav, Form, FormControl, Button, Image } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

//Component imports
import OEView from './containers/OEView';
import Tree from './containers/Tree'
import InfoDisplay from './components/InfoDisplay'
import Tabular from "./containers/Tabular";
import ManagersView from './containers/ManagersView';
import OrgChart from './containers/OrgChart'

//Data imports for testing
import {employeeData} from "./partnerData";
import {nestedEmployeeData} from "./nestedData";
import {nestedPartners} from "./nestedPartners";

class App extends Component{

  constructor(props) {
    super(props);

  this.state = {
    employees: employeeData,
    nestedEmployees: nestedPartners,
    managers: employeeData.filter(employee => employee.numberOfReports > 0),
    user: {},
    selectedEmployee: {
      id: null,
      name: "No Partner Selected",
      numberOfReports: 0,
      reports: [] 
    },
    view: ''
  }

  this.setManagerListView = this.setManagerListView.bind(this);
  this.setManagerListView2 = this.setManagerListView2.bind(this);
  this.setTreeView = this.setTreeView.bind(this);
  this.setTabularView = this.setTabularView.bind(this);
  this.setOrgChartView = this.setOrgChartView.bind(this);
}

  componentDidMount() {
    this.checkUp();
    // this.flattenNestedEmployees();
  }

  checkUp = () =>{
    console.log(this.state)
  }

  // assignReportsToManagers = () => {
  //   this.state.employees.map(employee => {
  //     employee.runner
  //   })
  // }

  setManagerListView(){
    this.setState(
      {view: "managers"}
    )
  }

  setManagerListView2(){
    this.setState(
      {view: "manager-list"}
    )
  }

  setTreeView(){
    this.setState(
      {view: "tree"}
    )
  }

  setTabularView(){
    this.setState(
      {view: "tabular"}
    )
  }

  setOrgChartView(){
    this.setState(
      {view: "org-chart"}
    )
  }

  selectEmployee = (employee) => {
    this.setState({
      selectedEmployee:{
        id: employee.employeeID,
        name: employee.name,
        numberOfReports: employee.numberOfReports,
        reports: employee.reports
      }
    })
  }

  showReports = (employee) => {

  }

  

  
  render() {

    let view;

    if(this.state.view=="tree"){
      view = <Tree employees = {this.state.employees} nestedEmployees = {this.state.nestedEmployees} selectedEmployee = {this.state.selectedEmployee}/>
    }else if(this.state.view=="tabular"){
      view = <Tabular employees = {this.state.employees} selectedEmployee = {this.state.selectedEmployee}/>
    }else if(this.state.view=="manager-list"){
      view = <ManagersView employees = {this.state.nestedEmployees} selectedEmployee = {this.state.selectedEmployee}/>
    }else if(this.state.view=="org-chart"){
      view = <OrgChart employees = {this.state.nestedEmployees} selectedEmployee = {this.state.selectedEmployee}/>
    }
    else {
      view = <OEView employees = {this.state.employees} managers={this.state.managers}  selectEmployee={this.selectEmployee} showReports={this.showReports}/>
    }
    return(
      <div>
        <Navbar bg="light" expand="lg">
          <Navbar.Brand href="#home">Starbucks
          <Image src='./logo.png' className="nav-image" roundedCircle/>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              {/* <Nav.Link href="#home">Home</Nav.Link> */}
              {/* <Nav.Link href="#link">Link</Nav.Link> */}
              <NavDropdown title="Select View" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1" onSelect={this.setTabularView}>Tabular View (all partners)</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2" onSelect={this.setTreeView}>Tree View</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3" onSelect={this.setManagerListView}>Manager List</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.4" onSelect={this.setOrgChartView}>Org Chart</NavDropdown.Item>
                {/* <NavDropdown.Item href="#action/3.4" onSelect={this.setManagerListView2}>Manager List</NavDropdown.Item> */}
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.5">Separated link</NavDropdown.Item>
              </NavDropdown>
             
            </Nav>
            <Navbar.Text className="ml-auto">
                Selected Partner: {this.state.selectedEmployee.name}
              </Navbar.Text>
              <Navbar.Text className="ml-auto">
                       
              </Navbar.Text>
            <Form inline>
              <FormControl type="text" placeholder="Search" className="mr-sm-2" />
              <Button variant="outline-success">Search</Button>
            </Form>
          </Navbar.Collapse>
        </Navbar>

        <InfoDisplay employees = {this.state.employees} selectedEmployee={this.state.selectedEmployee}/>
        
         {view}
        
        
        </div>
    )

  }
}

export default App;
