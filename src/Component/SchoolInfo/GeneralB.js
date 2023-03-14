import React from 'react';
import './board-result.css';
import Table from 'react-bootstrap/Table';

const GeneralB = () => {
    return (
        <>
            <div className="padding_main">
            <div className='generalB'>
                <h5 className='general-info'>b. general and information</h5>
                {/* <hr /> */}
            </div>

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
                        <td>COPIES OF AFFILIATION/ UPGRADATION LETTER AND RECENT EXTENSION OF AFFILIATION, IF ANY</td>
                        <td className='text-center'><a href="pdf_images/1_AFF_Letter.pdf" target='_blank'> Link</a></td>
                    </tr>
                    <tr>
                        <td>2</td>
                        <td>COPIES OF SOCIETIES/ TRUST/ COMPANY REGISTRATION/ RENEWAL CERTIFICATE, AS APPLICABLE</td>
                        <td className='text-center'><a href="pdf_images/2_Societ_Trust.pdf" target='_blank'> Link</a></td>

                    </tr>
                    <tr>
                        <td>3</td>
                        <td>	COPY OF THE NO OBJECTION CERTIFICATE (NOC) ISSUED, IF APPLICABLE, BY THE STATE GOVT./ UT</td>
                        <td className='text-center'><a href="pdf_images/3_NOC.pdf" target='_blank'>Link</a></td>
                    </tr>
                    <tr>
                        <td>4</td>
                        <td>COPIES OF RECOGNITION CERTIFICATE UNDER RTE ACT, 2009, AND ITS RENEWAL IF APPLICABLE</td>
                        <td className='text-center'><a href="pdf_images/4_Rec_Let.pdf" target='_blank'>Link</a></td>
                    </tr>
                    <tr>
                        <td>5</td>
                        <td>COPY OF VALID BUILDING SAFETY CERTIFICATE AS PER NATIONAL BUILDING CODE</td>
                        <td className='text-center'><a href="" target='_blank'>Link</a></td>
                    </tr>
                    <tr>
                        <td>6</td>
                        <td>COPY OF VALID FIRE SAFETY CERTIFICATE ISSUED BY THE COMPETENT AUTHORITY</td>
                        <td className='text-center'><a href="pdf_images/6_Fire_Safety.pdf" target='_blank'>Link</a></td>
                    </tr>
                    <tr>
                        <td>7</td>
                        <td>COPY OF THE DEO CERTIFICATE SUBMITTED BY THE SCHOOL FOR AFFILIATION/ UPGRADATION/ EXTENSION OF AFFILIATION OR SELF CERTIFICATION BY THE SCHOOL</td>
                        <td className='text-center'><a href="" target='_blank'>Link</a></td>
                    </tr>
                    <tr>
                        <td>8</td>
                        <td>	COPIES OF VALID WATER, HEALTH AND SANITATION CERTIFICATES</td>
                        <td className='text-center'><a href="" target='_blank'>Link</a></td>
                    </tr>
                </tbody>
            </Table>
            </div>
        </>
    )
}

export default GeneralB