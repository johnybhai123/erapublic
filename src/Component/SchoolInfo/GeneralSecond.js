import React from 'react';
import '../SchoolInfo/board-result.css'
import Table from 'react-bootstrap/Table';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const GeneralSecond = () => {
    return (
        <>
            <div className="padding_main">
                <div className='generalSecond'>
                    <h5 className='general-info'>result class:xii</h5>
                    {/* <hr /> */}
                </div>

                <div className='cSecond'>
                    <Container>
                        <Row>
                            <Col>
                                <Table striped bordered hover className='generalS'>
                                    <thead>
                                        <tr>
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
                                            <td>2019-2020</td>
                                            <td>28</td>
                                            <td>15</td>
                                            <td>37.14</td>
                                            <td></td>
                                        </tr>
                                        <tr>
                                            <td>2</td>
                                            <td>2020-2021</td>
                                            <td>27</td>
                                            <td>15</td>
                                            <td>53.57</td>
                                            <td></td>
                                        </tr>
                                        <tr>
                                            <td>3</td>
                                            <td>2021-2022</td>
                                            <td>28</td>
                                            <td>24</td>
                                            <td>85</td>
                                            <td></td>
                                        </tr>
                                    </tbody>
                                </Table>
                            </Col>
                        </Row>

                    </Container>
                </div>
            </div>
        </>
    )
}

export default GeneralSecond