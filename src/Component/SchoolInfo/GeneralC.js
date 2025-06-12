import React from 'react';
import './board-result.css';
import Table from 'react-bootstrap/Table';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const GeneralC = () => {
    return (
        <>
            <div className="padding_main">
                <div className='generalC'>
                    <h5 className='general-info'>c. general and information</h5>
                    {/* <hr /> */}
                </div>

                <Container>
                    <Row>
                        <Col>
                            <Table striped bordered hover className='table-form'>
                                <thead>
                                    <tr>
                                        <th>SL.NO</th>
                                        <th>DOCUMENTS / INFORMATION</th>
                                        <th>UPLOAD DOCUMENTS</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>1</td>
                                        <td>	FEE STRUCTURE OF THE SCHOOL</td>
                                        <td className='text-center'><a href="pdf_images/FEE_STRUCTURE_25-26.pdf" target='_blank' >Link</a></td>
                                    </tr>
                                    <tr>
                                        <td>2</td>
                                        <td>	ANNUAL ACADEMIC CALENDAR</td>
                                        <td className='text-center'><a href="pdf_images/Academic_Calendar_225.pdf" target='_blank' >Link</a></td>

                                    </tr>
                                    <tr>
                                        <td>3</td>
                                        <td>	LIST OF THE SCHOOL MANAGEMENT COMMITTEE (SMC)</td>
                                        <td className='text-center'><a href="pdf_images/SMC.pdf" target='_blank' >Link</a></td>
                                    </tr>
                                    <tr>
                                        <td>4</td>
                                        <td>	LIST OF THE PARENTS TEACHERS ASSOCIATION (PTA) MEMBERS</td>
                                        <td className='text-center'><a href="pdf_images/PTA.pdf" target='_blank' >Link</a></td>
                                    </tr>
                                    <tr>
                                        <td>5</td>
                                        <td>	LAST THREE-YEAR RESULT OF THE BOARD EXAMINATION AS PER APPLICABILITY</td>
                                        <td className='text-center'><a href="pdf_images/Last_three_years_Result.pdf" target='_blank' >Link</a></td>
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

export default GeneralC
