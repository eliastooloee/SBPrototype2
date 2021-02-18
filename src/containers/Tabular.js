import react from 'react'
import {Table, thead, th, tr, Button} from "react-bootstrap"
const Tabular = (props) => {
    
    function ListEmployees() {
        return props.employees.length > 0 ? props.employees.map(employee => {
          return (
            // <div key={employee.id} >
            //     {employee.name}
            // </div>

        //     <tbody>
        //     {employee.name}
        //   </tbody>

      <tr key={employee.id}>
        {/* <Button> </Button> */}
        <td>{employee.name}</td>
        <td>{employee.reports.length}</td>
        <td>{employee.age}</td>

      </tr>
          )
        }): null
      }

      return(
          <Table>
            <thead>
                <tr>
                    {/* <th className = "pointless-select">Selected</th> */}
                    <th>Name</th>
                    <th>Direct Reports</th>
                    <th>Age</th>
                </tr>
            </thead>
            <tbody>
              {ListEmployees()}
              </tbody>
          </Table>
      )

    // function listEmployees(employee, index) {
    //     return (
    //       <tr key={index}>
    //         <td>{employee.name}</td>
    //         <td>{employee.address}</td>
    //         <td>{employee.age}</td>
    //       </tr>
    //     )
    //   }

    //   return(
    //     <Table striped condensed hover>
    //     <thead>
    //       <tr>
    //         <th></th>
    //         <th>Name</th>
    //         <th>Address</th>
    //         <th>Age</th>
    //       </tr>
    //     </thead>
    //     <tbody>
    //       {props.employees.map(this.listEmployees)};
    //     </tbody>
    //   </Table>
    //   )
};



export default Tabular