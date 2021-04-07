import React from "react";
import { Row, Col, Container, Button } from 'react-bootstrap';
import ReportsModal from './ReportsModal';

const EmployeeCard = props => {
    const { employee } = props;
    


    return(
        <div>
        <Container fluid>
            <Row>
            <Col>
                <div className="employee-card">
                    <h2 > Name: {employee.name} </h2>
                    <p> Gender: {employee.gender}</p>
                    <p> Number of Reports: {employee.numberOfReports}</p>
                    <p> Age: {employee.age}</p>
                    <Button
                        variant="success"
                        className="delete-button"
                        onClick={() => {
                        {props.setOrgChartSource(employee)};
                        }}
                        > 
                        View Org Chart 
                    </Button>
                  
                    <Button variant="success"
                        onClick={() => {
                        {props.selectEmployee(employee)};
                        }}
                        > 
                        Select Partner
                    </Button>

                </div>
            </Col>
            </Row>
        </Container>
    </div>
    )
}
export default EmployeeCard;