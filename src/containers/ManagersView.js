import EmployeeCard from '../components/EmployeeCard';

const ManagersView = (props) => {

    console.log(props);

    function renderEmployees() {
        return props.employees.length > 0 ? props.employees.map(employee => {
          return (
            <div key={employee.id} >
              <EmployeeCard {...props} employee={employee} key={employee.employeeId} selectEmployee={props.selectEmployee} ListReports={ListReports}  />
            </div>
          )
        }): null
      }
      
      function ListReports() {
        return props.employees.reports.length > 0 ? props.employees.reports.map(report => {
          return (
            // <div key={employee.id} >
            //     {employee.name}
            // </div>

        //     <tbody>
        //     {employee.name}
        //   </tbody>

      <tr key={report.id}>
        {/* <Button> </Button> */}
        <td>{report.name}</td>
        <td>{report.reports.length}</td>
        <td>{report.age}</td>

      </tr>
          )
        }): null
      }

      return (
        <div>
            
            <div className="item">
            </div>
            {renderEmployees()}
        </div>
      );
}
export default ManagersView;