import React from 'react';
import '../SchoolInfo/board-result.css'
import Table from 'react-bootstrap/Table';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const GeneralFirst = () => {
    return (
        <>
            <div className="padding_main">
                <div className='generalFirst'>
                    <h5 className='general-info'>result class:x</h5>
                    {/* <hr /> */}
                </div>

                <Container>
                    <Row  className='rowx'>
                        <Col>
                            <Table striped bordered hover className='generalF'>
                                <thead>
                                    <tr className='p-0'>
                                        <th>SL.NO</th>
                                        <th>YEAR</th>
                                        <th>NO. OF STUDENTS REGISTERED</th>
                                        <th>NO. OF STUDENTS PASSED</th>
                                        <th>PASS PERCENTAGE</th>
                                        <th>REMARKS</th>
                                    </tr>
                                </thead>
                               <tbody>
    <tr>
        <td>1</td>
        <td>2022-23</td>
        <td>51</td>
        <td>49</td>
        <td>96.00</td>
        <td></td>
    </tr>
    <tr>
        <td>2</td>
        <td>2023-24</td>
        <td>88</td>
        <td>85</td>
        <td>96.59</td>
        <td></td>
    </tr>
    <tr>
        <td>3</td>
        <td>2024-25</td>
        <td>97</td>
        <td>93</td>
        <td>97.87</td>
        <td></td>
    </tr>
</tbody>

                            </Table>
                        </Col>
                    </Row>
                </Container>
            </div>
        </>
    )
}

export default GeneralFirst
