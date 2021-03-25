
import EmployeeCard from '../components/EmployeeCard';

const OEView = (props) => {

    console.log(props);

    function renderEmployees() {
        return props.managers.length > 0 ? props.managers.map(manager => {
          return (
            <div key={manager.id} >
              <EmployeeCard {...props} employee={manager} key={manager.employeeId} selectEmployee={props.selectEmployee} showReports={props.showReports}  />
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