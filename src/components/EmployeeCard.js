import React from "react";
import { Row, Col, Container, Button } from 'react-bootstrap';

const EmployeeCard = props => {
    const { employee } = props;
    
    function showReports(){
        return (employee.reports
            )
    }

    return(
        <div>
        <Container>
            <Row>
            <Col>
                <div className="employee-card">
                    <h2 > Name: {employee.name} </h2>
                    <p> Gender: {employee.gender}</p>
                    <p> Number of Reports: {employee.reports.length}</p>
                    <p> Age: {employee.age}</p>
                    {/* <Button
                        classname="delete-button"
                        onClick={() => {
                        {this.showReports(employee)};
                        }}
                        > 
                        Show Reports
                    </Button> */}
                    <Button bg="success"
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