
import EmployeeCard from '../components/EmployeeCard';
import {Container, Row, Col} from 'react-bootstrap'

const OEView = (props) => {

    console.log(props);
    

    function renderEmployees() {
        return props.managers.length > 0 ? props.managers.map(manager => {
          return (
            <div key={manager.id} >
              <EmployeeCard {...props} employee={manager} key={manager.employeeId} selectEmployee={props.selectEmployee} showModal={props.showModal} showReports={props.showReports} setOrgChartSource={props.setOrgChartSource} />
            </div>
          )
        }): null
      }

      return (
       <Container fluid>
       <h3>
         Managers
       </h3>
       <div>
            
            <div className="item">
            </div>
            {renderEmployees()}
        </div>
      </Container>
      );
}
export default OEView;