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
                    <h2 > {employee.name} </h2>
                    <h3> {employee.title}</h3>
                    <p> Number of Reports: {employee.numberOfReports}</p>
                    
                    <Button
                        className="delete-button"
                        onClick={() => {
                        {props.setOrgChartSource(employee)};
                        }}
                        > 
                        View Org Chart 
                    </Button>
                  
                    <Button className="delete-button"
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