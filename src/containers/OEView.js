
import EmployeeCard from '../components/EmployeeCard';

const OEView = (props) => {

    console.log(props);

    function renderEmployees() {
        return props.employees.length > 0 ? props.employees.map(employee => {
          return (
            <div key={employee.id} >
              <EmployeeCard {...props} employee={employee} key={employee.employeeId} selectEmployee={props.selectEmployee}  />
            </div>
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
export default OEView;