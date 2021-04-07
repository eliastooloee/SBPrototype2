import './App.css';
import { Component} from 'react';

//Bootstrap styling component imports
import { Navbar, NavItem, NavDropdown, DropdownItem, Nav, Form, FormControl, Button, Image } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

//Component imports
import OEView from './containers/OEView';
import Tree from './containers/Tree';
import InfoDisplay from './components/ResponsiveInfoDisplay'
import Tabular from "./containers/Tabular";
import ManagersView from './containers/ManagersView';
import OrgChart from './containers/OrgChart';
import CleanSortedTable from './containers/SortingTable';
import QBRView from './containers/QBRView';

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
    orgChartSource: nestedPartners,
    user: {},
    selectedEmployee: {
      id: null,
      name: "No Partner Selected",
      numberOfReports: 0,
      children: [] 
    },
    view: '',
    showReportsModal: false
  }

  this.setManagerListView = this.setManagerListView.bind(this);
  this.setManagerListView2 = this.setManagerListView2.bind(this);
  this.setTreeView = this.setTreeView.bind(this);
  this.setTabularView = this.setTabularView.bind(this);
  this.setOrgChartView = this.setOrgChartView.bind(this);
  this.setTableTestView = this.setTableTestView.bind(this);
  this.setQBRView = this.setQBRView.bind(this);
}

  componentDidMount() {
    this.checkUp();
    this.assignReportsToManagers();
    this.setInitialChartSource();
    // this.flattenNestedEmployees();
  }

  checkUp = () =>{
    console.log(this.state)
  }

  //Function to assign partner objects to their manager's reports array
  assignReportsToManagers = () => {
    this.state.employees.map(employee => {
      let directChildren = employeeData.filter(child => child.managerId == employee.id);
      employee.children = (directChildren);
      console.log(employee);
    })
  }

  setInitialChartSource = () => {
    this.setState({
      orgChartSource: this.state.employees[1]
    });
  }

  // updateManagerReports = () => {

  // }






  //View switching functions. Intentionally left separate for clarity.
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

  setQBRView(){
    this.setState(
      {view: "qbr"}
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

  setTableTestView(){
    this.setState(
      {view: "table-test"}
    )
  }

  // End view switch functions

  //Function to select an employee when their card or node is clicked. Sets OrgChartSource to said employee, but does not change view.
  selectEmployee = (employee) => {
    this.setState({
      selectedEmployee:{
        id: employee.employeeID,
        name: employee.name,
        numberOfReports: employee.numberOfReports,
        children: employee.children
      },
      orgChartSource: employee
    });
    
  }

  //Function to set OrgChart source to a given employee and changes view to OrgChart. Also selects given employee.
  setOrgChartSource = (employee) => {
    this.setState({
      orgChartSource: employee
    });
    this.setOrgChartView();
    this.selectEmployee(employee);
  }

  showReports = () => {
    this.setState({
      showReportsModal: true
    })
  }

  render() {

    let view;

    if(this.state.view=="tree"){
      view = <Tree employees = {this.state.employees} nestedEmployees = {this.state.nestedEmployees} selectedEmployee = {this.state.selectedEmployee}/>
    }else if(this.state.view=="tabular"){
      view = <Tabular employees = {this.state.employees} selectedEmployee = {this.state.selectedEmployee}/>
    }else if(this.state.view=="manager-list"){
      view = <ManagersView employees = {this.state.nestedEmployees} selectedEmployee = {this.state.selectedEmployee} />
    }else if(this.state.view=="org-chart"){
      view = <OrgChart employees = {this.state.nestedEmployees} selectedEmployee = {this.state.selectedEmployee} orgChartSource={this.state.orgChartSource}/>
    }else if(this.state.view=="table-test"){
      view = <CleanSortedTable employees = {this.state.employees} selectedEmployee = {this.state.selectedEmployee}/>
    }else if(this.state.view=="qbr"){
      view = <QBRView employees = {this.state.employees} selectedEmployee = {this.state.selectedEmployee}/>
    }
    else {
      view = <OEView employees = {this.state.employees} managers={this.state.managers}  selectEmployee={this.selectEmployee} setOrgChartSource={this.setOrgChartSource} showReports={this.showReports} showModal={this.state.showReportsModal}/>
    }
    return(
      <div>
        <Navbar className="nav-bar" expand="lg">
          <Navbar.Brand href="#home">Starbucks
          <Image src='./logo192.png' className="nav-image" roundedCircle/>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              {/* <Nav.Link href="#home">Home</Nav.Link> */}
              {/* <Nav.Link href="#link">Link</Nav.Link> */}
              <NavDropdown title="Select View" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1" onSelect={this.setQBRView}>QBR View</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2" onSelect={this.setTreeView}>Tree View</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3" onSelect={this.setManagerListView}>Manager List</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.4" onSelect={this.setOrgChartView}>Org Chart</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.5" onSelect={this.setTableTestView}>Tabular View (All Partners)</NavDropdown.Item>
                {/* <NavDropdown.Item href="#action/3.4" onSelect={this.setManagerListView2}>Manager List</NavDropdown.Item> */}
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.6">Separated link</NavDropdown.Item>
              </NavDropdown>
             
            </Nav>
            <Navbar.Text className="ml-auto">
                Selected Partner: {this.state.selectedEmployee.name}
              </Navbar.Text>
              <Navbar.Text className="ml-auto">
                       
              </Navbar.Text>
            {/* <Form inline>
              <FormControl type="text" placeholder="Search" className="mr-sm-2" />
              <Button variant="outline-success">Search</Button>
            </Form> */}
          </Navbar.Collapse>
        </Navbar>

        <InfoDisplay employees = {this.state.employees} selectedEmployee={this.state.selectedEmployee} orgChartSource={this.state.orgChartSource} view={this.state.view} setManagerListView={this.setManagerListView}/>
        
         {view}
        
        
        </div>
    )

  }
}

export default App;
