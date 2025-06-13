import React from 'react';
import './board-result.css';
import Table from 'react-bootstrap/Table';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const GeneralE = () => {
    return (
        <>
            <div className="padding_main">
                <div className='generalE'>
                    <h5 className='general-info'>e. SCHOOL INFRASTRUCTURE</h5>
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
                                        <td>	TOTAL CAMPUS AREA OF THE SCHOOL (IN SQUARE MTR.)</td>
                                        <td className='text-center'>15,680 square mtr. </td>
                                    </tr>
                                    <tr>
                                        <td>2.</td>
                                        <td>	NUMBER AND SIZE OF CLASS ROOMS (IN SQUARE MTR.)</td>
                                        <td className='text-center'> 6.10 x 6.50 sq m</td>
                                    </tr>

                                    <tr>
                                        <td>3.</td>
                                        <td>	NUMBER OF LARGE LABS INCLUDING COMPUTER LABS (IN SQUARE MTR.)</td>
                                        <td className='text-center'> 6.25 x 6.25 sq m</td>
                                    </tr>
                                    <tr>
                                        <td>4.</td>
                                        <td>	INTERNET FACILITY (Y/N)</td>
                                        <td className='text-center'>Yes</td>
                                    </tr>
                                    <tr>
                                        <td>5.</td>
                                        <td>	NUMBER OF GIRL’S TOILETS</td>
                                        <td className='text-center'>15</td>
                                    </tr>
                                    <tr>
                                        <td>6.</td>
                                        <td>	NUMBER OF BOY’S TOILETS</td>
                                        <td className='text-center'>20</td>
                                    </tr>
                                    <tr>
                                        <td>7.</td>
                                        <td>YOUTUBE VIDEO LINK OF SCHOOL’S INSPECTION</td>
                                        <td className='text-center'><a href="https://www.youtube.com/watch?v=2kCFCHIKnGA" target='_blank'>Link</a></td>
                                    </tr>

    <tr>
                                        <td></td>
                                        <td>APPENDIX IX</td>
                                        <td className='text-center'><a href="pdf_images/Mandatory_Disclosure_Details _SARAS 6.0.pdf" target='_blank'>Link</a></td>
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

export default GeneralE
