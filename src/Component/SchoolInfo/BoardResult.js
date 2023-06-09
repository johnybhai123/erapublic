import React from 'react'
import '../SchoolInfo/board-result.css'
import Table from 'react-bootstrap/Table';
import General from './General';
import GeneralB from './GeneralB';
import GeneralC from './GeneralC';
import GeneralFirst from './GeneralFirst';
import GeneralSecond from './GeneralSecond';
import GeneralD from './GeneralD';
import GeneralE from './GeneralE';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
const BoardResult = () => {
  return (
    <>
      <General />
      <GeneralB />
      <GeneralC />
      <GeneralFirst />
      <GeneralSecond />
      <GeneralD />
      <GeneralE />
      
      {/* class x result table */}
      {/* <div className="padding_main">
        <div className='board'>
          <div className='board-info'>
            <h2 className='main_head'>board result</h2>
            <h5 className='sub_head'>result class-x</h5>
          </div>
        </div>

        <Container>
          <Row>
            <Col>
              <Table striped bordered hover>
                <thead>
                  <tr>
                    <th>S.NO</th>
                    <th>Year</th>
                    <th>No. of registered students</th>
                    <th>No. of students passed</th>
                    <th>Pass percentage</th>
                    <th>Remark</th>
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
      </div> */}

    {/* class xii result table */}
      {/* <div className="padding_main">
        <div className='board'>
          <div className='board-info'>
            <h2 className='main_head'>result class - xii</h2>
          </div>
        </div>

        <Container>
          <Row>
            <Col>
              <Table striped bordered hover>
                <thead>
                  <tr>
                    <th>S.NO</th>
                    <th>Year</th>
                    <th>No. of registered students</th>
                    <th>No. of students passed</th>
                    <th>Pass percentage</th>
                    <th>Remark</th>
                  </tr>
                </thead>
                <tbody>
                 
                  <tr>
                    <td>1</td>
                    <td>2020-21</td>
                    <td>27</td>
                    <td>15</td>
                    <td>53.57</td>
                    <td></td>
                  </tr>
                  <tr>
                    <td>2</td>
                    <td>2021-22</td>
                    <td>28</td>
                    <td>24</td>
                    <td>85</td>
                    <td></td>
                  </tr>
                  
                   <tr>
                    <td>3</td>
                    <td>2022-23</td>
                    <td>69</td>
                    <td>40</td>
                    <td>58</td>
                    <td></td>
                  </tr>
                </tbody>
              </Table>
            </Col>
          </Row>
        </Container>
      </div> */}
    </>
  );
}
export default BoardResult
