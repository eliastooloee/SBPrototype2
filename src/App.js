import './App.css';
import { Component} from 'react';
import AI_Logo from './images/AI_Logo.png';

//Bootstrap styling component imports
import { Navbar, NavItem, NavDropdown, DropdownItem, Nav, Form, FormControl, Button, Image, Tab } from 'react-bootstrap';
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
        <Navbar className="nav-bar" expand="lg"  >
       <text className="nav-text"> Starbucks </text>
          <Navbar.Brand href="#home" classname="nav-branding"  >
          <Image src={AI_Logo} className="nav-image"  rounded/> 
          </Navbar.Brand>
         <text className="nav-text"> Organizational Effectiveness </text>
            
            {/* <Navbar.Text className="nav-text">
                Selected Partner: {this.state.selectedEmployee.name}
              </Navbar.Text> */}
            <Navbar.Text className="nav-text">
                       
              </Navbar.Text>
            {/* <Form inline>
              <FormControl type="text" placeholder="Search" className="mr-sm-2" />
              <Button variant="outline-success">Search</Button>
            </Form> */}
          {/* </Navbar.Collapse> */}
        </Navbar>
        <Nav fill variant="pills" defaultActiveKey="/home" className="selection-nav">
              <Nav.Item className="nav-button">
                <Nav.Link 
      
                onClick={this.setOrgChartView}>
                  <text className="nav-button">Org Chart</text>
                  </Nav.Link>
              </Nav.Item >
              <Nav.Item className="nav-button">
                <Nav.Link 
                onClick={this.setTableTestView}
                >
                  <text
                  className="nav-button"
                  >Tabular View (All Partners)</text>
                  </Nav.Link>
              </Nav.Item>
              <Nav.Item className="nav-button">
                <Nav.Link 
                
                onClick={this.setManagerListView}
                >
                 <text className="nav-button"> Manager List View </text>
                  </Nav.Link>
              </Nav.Item>
              <Nav.Item className="nav-button">
                <Nav.Link
                 
                onClick={this.setQBRView}>
                 <text className="nav-button"> QBR View </text>
                </Nav.Link>
              </Nav.Item>
            </Nav>
        <InfoDisplay employees = {this.state.employees} selectedEmployee={this.state.selectedEmployee} orgChartSource={this.state.orgChartSource} view={this.state.view} setManagerListView={this.setManagerListView}/>
        
         {view}
        
        
        </div>
    )

  }
}

export default App;
