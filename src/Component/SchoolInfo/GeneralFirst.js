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
                                        <td>2020-21</td>
                                        <td>55</td>
                                        <td>55</td>
                                        <td>100.00</td>
                                        <td></td>
                                    </tr>
                                    <tr>
                                        <td>2</td>
                                        <td>2021-22</td>
                                        <td>18</td>
                                        <td>48</td>
                                        <td>100.00</td>
                                        <td></td>
                                    </tr>
  <tr>
                    <td>3</td>
                    <td>2022-23</td>
                    <td>51</td>
                    <td>49</td>
                    <td>96</td>
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
