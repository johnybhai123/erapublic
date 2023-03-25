import React from 'react';
import './board-result.css';
import Table from 'react-bootstrap/Table';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';



const General = () => {

  
    return (
        <>
            <h1><span className='new_era'>The New Era Public School</span></h1>
            <h5 className='sub_mandatory'>appendix - ix</h5>
            <div className='era_main'>
                <div className="menu_info">
                    <p className='menu'>Under Menu as</p>
                    <p className='middle_para'>The New Era Public School</p>
                    <p>(To be uploaded on the school website)</p>
                </div>
                <div className="padding_main">
                    <div>
                        <div className='general'>
                            <h5 className='general-info'>a. general information</h5>
                            {/* <hr /> */}
                        </div>
                    </div>

                    <Container>
                        <Row >
                            <Col >
                                <Table striped bordered hover className='table_main mx-auto'>
                                    <thead>
                                        <tr>
                                            <th>SL.NO</th>
                                            <th>INFORMATION</th>
                                            <th>UPLOAD DOCUMENTS</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>1</td>
                                            <td>NAME OF THE SCHOOL</td>
                                            <td className='text-left'>The New Era Public School</td>
                                        </tr>
                                        <tr>
                                            <td>2</td>
                                            <td>AFFILIATION NO.(IF APPLICABLE)</td>
                                            <td className='text-left'>1030413

                                            </td>
                                        </tr>
                                        <tr>
                                            <td>3</td>
                                            <td>SCHOOL CODE</td>
                                            <td className='text-left'>50379</td>
                                        </tr>
                                        <tr>
                                            <td>4</td>
                                            <td>COMPLETE ADDRESS WITH PIN CODE</td>
                                            <td className='text-left'> 271/1/1 , 1/2 , Chhota Bangarda Main Road , Near Nariman City , MR-5 , Indore - 452005 (M.P.) <br /> Madhya Pradesh </td>
                                        </tr>
                                        <tr>
                                            <td>5</td>
                                            <td>PRINCIPAL NAME & QUALIFICATION</td>
                                            <td className='text-left'>Mrs. Archana Tiwari <br /> B.Sc (Bio), M.A. (English) , BEd </td>
                                        </tr>
                                        <tr>
                                            <td>6</td>
                                            <td>SCHOOL EMAIL ID</td>
                                            <td className='text-left'><a href="mailto:tneps.campus2@gmail.com">tneps.campus2@gmail.com</a></td>
                                        </tr>
                                        <tr>
                                            <td>7</td>
                                            <td>CONTACT DETAILS (MOBILE AND LANDLINE)</td>
                                            <td className='text-left'>(+91) 81091 00056 (Mobile) <br /> (0731) 299 1095 (Land Line)</td>
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

export default General