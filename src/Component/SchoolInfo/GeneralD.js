import React from 'react';
import './board-result.css';
import Table from 'react-bootstrap/Table';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const GeneralD = () => {
    return (
        <>
            <div className="padding_main">
                <div className='generalD'>
                    <h5 className='general-info'>d. STAFF AND TEACHING</h5>
                    {/* <hr /> */}
                </div>

                <Container>
                    <Row>
                        <Col>
                            <Table striped bordered hover className='table-form'>
                                <thead>
                                    <tr>
                                        <th>SL.NO</th>
                                        <th>INFORMATION</th>
                                        <th>DETAILS</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>1.</td>
                                        <td>PRINCIPAL</td>
                                        <td>B.Sc (Bio), M.A. (English) , BEd Experience 5 + years </td>
                                    </tr>
                                    <tr>
                                        <td>2.</td>
                                        <td>NUMBER OF TEACHERS</td>
                                        <td className='text-center'>43</td>
                                    </tr>

                                    <tr className='pg-center'>
                                        <td></td>
                                        <td>I. PGT</td>
                                        <td>
                                            <b>9</b>
                                        </td>
                                    </tr>

                                    <tr className='pg-center'>
                                        <td></td>
                                        <td>II. TGT</td>
                                        <td>
                                            <b>8</b>
                                        </td>
                                    </tr>

                                    <tr className='pg-center'>
                                        <td></td>
                                        <td>III. PRT</td>
                                        <td>
                                            <b>18</b>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>3.</td>
                                        <td>TEACHER/ SECTION RATIO</td>
                                        <td></td>
                                    </tr>
                                    <tr>
                                        <td>4.</td>
                                        <td>SPECIAL EDUCATOR DETAILS</td>
                                        <td></td>
                                    </tr>
                                    <tr>
                                        <td>5.</td>
                                        <td>COUNSELLOR AND WELLNESS TEACHER DETAILS</td>
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

export default GeneralD;