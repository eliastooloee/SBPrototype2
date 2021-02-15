import './App.css';
import { Component} from 'react';
import { Navbar, NavItem, NavDropdown, DropdownItem, Nav, Form, FormControl, Button, Image } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import OEView from './containers/OEView';
// import { Route, Link, withRouter } from "react-router-dom";
import Tree from './containers/Tree'
import InfoDisplay from './components/InfoDisplay'
import {employeeData} from "./data";
import Tabular from "./containers/Tabular";

class App extends Component{

  constructor(props) {
    super(props);

  this.state = {
    employees: employeeData,
    user: {},
    selectedEmployee: {
      id: null,
      name: "No Partner Selected",
      reports: [] 
    },
    view: ''
  }

  this.setManagerListView = this.setManagerListView.bind(this);
  this.setTreeView = this.setTreeView.bind(this);
  this.setTabularView = this.setTabularView.bind(this);
}

  componentDidMount() {

    this.checkUp();
  }

  checkUp = () =>{
    console.log(this.state)
  }

  setManagerListView(){
    this.setState(
      {view: "managers"}
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

  selectEmployee = (employee) => {
    this.setState({
      selectedEmployee:{
        id: employee.employeeID,
        name: employee.name,
        reports: employee.reports
      }
    })
  }

  
  render() {

    let view;

    if(this.state.view=="tree"){
      view = <Tree employees = {this.state.employees} selectedEmployee = {this.state.selectedEmployee}/>
    }else if(this.state.view=="tabular"){
      view = <Tabular employees = {this.state.employees} selectedEmployee = {this.state.selectedEmployee}/>
    }
    else {
      view = <OEView employees = {this.state.employees} selectEmployee={this.selectEmployee}/>
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
                <NavDropdown.Item href="#action/3.1" onSelect={this.setTabularView}>Tabular View</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2" onSelect={this.setTreeView}>Tree View</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3" onSelect={this.setManagerListView}>Manager List</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
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
