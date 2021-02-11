import './App.css';
import { Component} from 'react';
import { Navbar, NavItem, NavDropdown, DropdownItem, Nav, Form, FormControl, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import OEView from './containers/OEView';
// import { Route, Link, withRouter } from "react-router-dom";
import Tree from './containers/Tree'
import {employeeData} from "./data";

class App extends Component{

  state = {
    employees: employeeData,
    user: {},
    selectedEmployee: {}
  }

  componentDidMount() {

    this.checkUp();
  }

  checkUp = () =>{
    console.log(this.state)
  }


  
  render() {
    return(
      <div>
        <Navbar bg="light" expand="lg">
          <Navbar.Brand href="#home">Starbucks</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#link">Link</Nav.Link>
              <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
              </NavDropdown>
            </Nav>
            <Form inline>
              <FormControl type="text" placeholder="Search" className="mr-sm-2" />
              <Button variant="outline-success">Search</Button>
            </Form>
          </Navbar.Collapse>
        </Navbar>
        <OEView employees = {this.state.employees}/>

        {/* <Tree employees = {this.state.employees} selectedEmployee={this.state.selectedEmployee}/> */}
        </div>
    )

  }
}

export default App;
