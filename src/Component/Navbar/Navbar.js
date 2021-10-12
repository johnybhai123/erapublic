import React,{ useState} from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import {  A, Li, Main, Sub, Ul } from "./Navbar.elements";

import { IconContext } from "react-icons/lib";
function Navbar({Changedisplay}) {
  const [dis,setDis] = useState(false)
  if(dis){
    Changedisplay=true;
  }else{
    Changedisplay=false;

  }
  return (
    <>
      <IconContext.Provider value={{ color: "black" }}>
        <Main>
          <div></div> <div></div>
          <p
           id='cbse'
          >
            CBSE AFFILIATION-#1030413{" "}
          </p>{" "}
          <div
            style={{
              padding: "14px",
              display: "grid",
              gridTemplateColumns: "0.1fr 0.1fr 0.1fr",
              columnGap: "1px",
              justifyContent: "end",
            }}
          >
        
            <a href="https://www.youtube.com/channel/UC7nmZXP5RB2VUKlQ8G0AV6A">
              <svg
                style={{ height: "20px", width: "20px" }}
                xmlns="http://www.w3.org/2000/svg"
                width="2500"
                height="1756"
                viewBox="5.368 13.434 53.9 37.855"
              >
                <path
                  fill="#FFF"
                  d="M41.272 31.81c-4.942-2.641-9.674-5.069-14.511-7.604v15.165c5.09-2.767 10.455-5.301 14.532-7.561h-.021z"
                />
                <path
                  fill="#E8E0E0"
                  d="M41.272 31.81c-4.942-2.641-14.511-7.604-14.511-7.604l12.758 8.575c.001 0-2.324 1.289 1.753-.971z"
                />
                <path
                  fill="#CD201F"
                  d="M27.691 51.242c-10.265-.189-13.771-.359-15.926-.803-1.458-.295-2.725-.95-3.654-1.9-.718-.719-1.289-1.816-1.732-3.338-.38-1.268-.528-2.323-.739-4.9-.323-5.816-.4-10.571 0-15.884.33-2.934.49-6.417 2.682-8.449 1.035-.951 2.239-1.563 3.591-1.816 2.112-.401 11.11-.718 20.425-.718 9.294 0 18.312.317 20.426.718 1.689.317 3.273 1.267 4.203 2.492 2 3.146 2.035 7.058 2.238 10.118.084 1.458.084 9.737 0 11.195-.316 4.836-.57 6.547-1.288 8.321-.444 1.12-.823 1.711-1.479 2.366a7.085 7.085 0 0 1-3.76 1.922c-8.883.668-16.426.813-24.987.676zM41.294 31.81c-4.942-2.641-9.674-5.09-14.511-7.625v15.166c5.09-2.767 10.456-5.302 14.532-7.562l-.021.021z"
                />
              </svg>
            </a>
            <a href="https://www.facebook.com/poornima.jain.315080">
              <svg
                style={{ height: "20px", width: "20px" }}
                xmlns="http://www.w3.org/2000/svg"
                data-name="Ebene 1"
                viewBox="0 0 1024 1024"
              >
                <path
                  fill="#1877f2"
                  d="M1024,512C1024,229.23016,794.76978,0,512,0S0,229.23016,0,512c0,255.554,187.231,467.37012,432,505.77777V660H302V512H432V399.2C432,270.87982,508.43854,200,625.38922,200,681.40765,200,740,210,740,210V336H675.43713C611.83508,336,592,375.46667,592,415.95728V512H734L711.3,660H592v357.77777C836.769,979.37012,1024,767.554,1024,512Z"
                />
                <path
                  fill="#fff"
                  d="M711.3,660,734,512H592V415.95728C592,375.46667,611.83508,336,675.43713,336H740V210s-58.59235-10-114.61078-10C508.43854,200,432,270.87982,432,399.2V512H302V660H432v357.77777a517.39619,517.39619,0,0,0,160,0V660Z"
                />
              </svg>
            </a>
          </div>
          <Sub>
            <nav
              class="navbar navbar-light bg-white"
              
              style={{ justifyContent: "start", alignContent: "end"}}
            >
           <Link to="/">
           <a class="navbar-brand text-muted" id='schoologo' >
                <img
                  src='https://scontent.fpnq15-1.fna.fbcdn.net/v/t1.6435-9/p526x296/244529703_598912631462814_2264571259486814212_n.jpg?_nc_cat=100&ccb=1-5&_nc_sid=730e14&_nc_ohc=7jkxtFP5pg0AX_ew-JG&_nc_ht=scontent.fpnq15-1.fna&oh=c87bf07a9b43a02e69f7ae41108e4744&oe=61860E6B'
                id='schoolname'
                  class="d-inline-block p-4"
                  alt=""
                  
                />
                The New Era Public School
              </a></Link>
            </nav>
    <div>
            

    </div>
          </Sub>
        </Main>
        <nav
          class="navbar navbar-expand-lg navbar-light  py-3  back"
          
        >
          <div class="container-fluid">
            <button
              class="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
              style={{background:'white'}}
            >
              <span class="navbar-toggler-icon"></span>
            </button>
            <div
              class="collapse navbar-collapse justify-content-center"
              id="navbarNav"
            >
              <ul class="navbar-nav" style={{fontWeight:'600'}}>
                <li class="nav-item">
           <Link style={{textDecoration:'none'}} to="/">
           <a
                    class="nav-link active text-white"
                    aria-current="page"
                   
                  >
                    Home
                  </a>
           </Link>
                </li>

                <li className="nav-item dropdown">
            <a
                    className="nav-link dropdown-toggle text-white"
                    
                    id="navbarDropdown"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    About us
                  </a>
                  <ul
                    className="dropdown-menu"
                    aria-labelledby="navbarDropdown"
                  >
                     <li>
                    <Link style={{textDecoration:'none',color: "black"}} to="/foundation"  >
                    <a className="dropdown-item">
                        Strong Foundation
                      </a></Link>
                    </li>
                    <hr className="dropdown-divider" />

                     <li>
                    <Link style={{textDecoration:'none',color: "black"}} to="/vision"  >
                    <a className="dropdown-item">
                        Vision
                      </a></Link>
                    </li>
                    <hr className="dropdown-divider" />

                     <li>
                    <Link style={{textDecoration:'none',color: "black"}} to="/mission"  >
                    <a className="dropdown-item">
                        Mission
                      </a></Link>
                    </li>
                    <hr className="dropdown-divider" />

                     <li>
                    <Link style={{textDecoration:'none',color: "black"}} to="/Tm"  >
                    <a className="dropdown-item">
                        Teaching Methodology
                      </a></Link>
                    </li>
                    <hr className="dropdown-divider" />

                    <li>
                    <Link style={{textDecoration:'none',color: "black"}} to="/ourteam"  >
                    <a className="dropdown-item">
                        Our Team
                      </a></Link>
                    </li>
                    <hr className="dropdown-divider" />
                   

<li>
<Link style={{textDecoration:'none',color: "black"}} to="/schoolman"  >
<a className="dropdown-item">
    School management Committee
  </a></Link>
</li>
<hr className="dropdown-divider" />
                    
                    

                     <li>
                     <a style={{textDecoration:'none',color: "black"}} href="https://drive.google.com/file/d/1ZV8mzuh6VsNfFOphhkm6MWHPIJFdAZPt/view?usp=sharing"  >
                    <a className="dropdown-item">
                        Annual Report
                      </a></a>
                    </li>
                   
                  </ul>
                </li>
                <li className="nav-item dropdown">
            <a
                    className="nav-link dropdown-toggle text-white"
                    
                    id="navbarDropdown"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Academic
                  </a>
                  <ul
                    className="dropdown-menu"
                    aria-labelledby="navbarDropdown"
                  >
                    
                    <li>
                    <a style={{textDecoration:'none',color: "black"}} href="https://drive.google.com/file/d/1aDmY-r0fJmzxeeZzzgjoAX6azEneayWp/view?usp=sharing"  >
                    <a className="dropdown-item">
                        Book List
                      </a></a>
                    </li>
                    <hr className="dropdown-divider" />

                    <li>
                      
                    </li>
                    <li>
                    <a style={{textDecoration:'none',color: "black"}} href="https://drive.google.com/file/d/1P3lIFvAXhr5KNqwFHqUeDtLzdhKJDgPk/view?usp=sharing"  >
                    <a className="dropdown-item">
                        Academic Calender
                      </a></a>
                    </li>
                    <li>
                      <hr className="dropdown-divider" />
                    </li>
                    <li>
                    <Link style={{textDecoration:'none',color: "black"}} to="/middle"  >
                    <a className="dropdown-item">
                        Celebrations
                      </a></Link>
                    </li>
                    <li>
                      <hr className="dropdown-divider" />
                    </li>
                    <li>
                    <a style={{textDecoration:'none',color: "black"}} href="https://drive.google.com/file/d/1bQOAIhordjyEj90yxKWJNaAuytZp23q4/view?usp=sharing"  >
                    <a className="dropdown-item">
                       TC
                      </a></a>
                    </li>
                   </ul>
</li>



<li className="nav-item dropdown">
            <a
                    className="nav-link dropdown-toggle text-white"
                    
                    id="navbarDropdown"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Admission Process
                  </a>
                  <ul
                    className="dropdown-menu"
                    aria-labelledby="navbarDropdown"
                  >
                    <li>
                    <Link style={{textDecoration:'none',color: "black"}} to="/inquiry"  >
                    <a className="dropdown-item">
                        Admission Inquiry
                      </a></Link>
                    </li>
                    <hr className="dropdown-divider" />

                    <li>
                    <a style={{textDecoration:'none',color: "black"}} href="https://drive.google.com/file/d/1XGW4-T1sTeUH7X8SsDvUtM43skc8GUXB/view?usp=sharing"  >
                    <a className="dropdown-item">
                        Admission Form
                      </a></a>
                    </li>
                    <hr className="dropdown-divider" />

                    <li>
                    <a style={{textDecoration:'none',color: "black"}} href="https://drive.google.com/file/d/1dbeZFpe4PDq-GHY3AI7p4j9z60MmsDBG/view?usp=sharing"  >
                    <a className="dropdown-item">
                        Fee Structure
                      </a></a>
                    </li>
                
                
                  </ul>
                </li>






                <li className="nav-item dropdown">
                 <a
                    className="nav-link dropdown-toggle text-white"
                    
                    id="navbarDropdown"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Facilities
                  </a>
                  <ul
                    className="dropdown-menu"
                    aria-labelledby="navbarDropdown"
                  >
                    <li>
                    <Link style={{textDecoration:'none',color: "black"}} to="/classroom"  >
                    <a className="dropdown-item">
                       Classroom
                      </a></Link>
                    </li>
                    <hr className="dropdown-divider" />

                    <li>
                    <Link style={{textDecoration:'none',color: "black"}} to="/lab"  >
                    <a className="dropdown-item">
                        Laboratory
                      </a></Link>
                    </li>
                   
                
                    <hr className="dropdown-divider" />

                    <li>
                    <Link style={{textDecoration:'none',color: "black"}} to="/library"  >
                    <a className="dropdown-item">
                        Library
                      </a></Link>
                    </li>
                      <hr className="dropdown-divider" />

                      <li>
                      <Link style={{textDecoration:'none',color: "black"}} to="/wifi"  >
                    <a className="dropdown-item">
                        Wifi Enabled Computer Lab
                      </a></Link>
                      </li>
                 <hr className="dropdown-divider" />

                    <li>
                    <Link style={{textDecoration:'none',color: "black"}} to="/modern"  >
                    <a className="dropdown-item">
                       Playground
                      </a></Link>
                    </li>
                 <hr className="dropdown-divider" />

                    <li>
                    <Link style={{textDecoration:'none',color: "black"}} to="/kinder"  >
                    <a className="dropdown-item">
                       Kindergarten
                      </a></Link>
                    </li>
                 <hr className="dropdown-divider" />

                    <li>
                    <Link style={{textDecoration:'none',color: "black"}} to="/activity"  >
                    <a className="dropdown-item">
                       Activity & Music Room
                      </a></Link>
                    </li>
                 <hr className="dropdown-divider" />

                    <li>
                    <Link style={{textDecoration:'none',color: "black"}} to="/transportation"  >
                    <a className="dropdown-item">
                       Transportation
                      </a></Link>
                    </li>
                
                  </ul>
                </li>


                <li className="nav-item dropdown">
                <a
                    className="nav-link dropdown-toggle text-white"
                    
                    id="navbarDropdown"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Cultural
                  </a>
                  <ul
                    className="dropdown-menu"
                    aria-labelledby="navbarDropdown"
                  >
               

                    <li>
                    <Link style={{textDecoration:'none',color: "black"}} to="/annual"  >
                    <a className="dropdown-item">
                        Annual Function
                      </a></Link>
                    </li>
                

                
                
                  </ul>
                </li>


                <li class="nav-item">
                <Link style={{textDecoration:'none'}} to="/staff">
                  <a
                    class="nav-link active text-white"
                    aria-current="page"
                   
                  >
                    Staff
                  </a>
                  



                  

           </Link>


                </li>


                <li className="nav-item dropdown">
                <a
                    className="nav-link dropdown-toggle text-white"
                    
                    id="navbarDropdown"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Advisory Board
                  </a>
                  <ul
                    className="dropdown-menu"
                    aria-labelledby="navbarDropdown"
                  
                  >
               

                    <li style={{overflowdWrap:'break-word'}}>
                    <Link style={{textDecoration:'none',color: "black"}} to="/"  >
                    <a className="dropdown-item"  >
                        Rajesh Awasthi <br />
                        (Principal of Choithram)
                      </a>
                      <hr className="dropdown-divider" />
                    <a className="dropdown-item">
                    Awdhesh Tiwari <br />
                     (Director of Ideal International School)
                      </a>
                      <hr className="dropdown-divider" />
                    <a className="dropdown-item">
                    Simantini Sardesai <br />
                    (CEO Sandipani Foundation)
                      </a>
                      <hr className="dropdown-divider" />
                    <a className="dropdown-item">
                    Satyanarayanji Vohra <br />
                    (Advisor of Sarafa Vidya niketan)
                      </a>
                      
                      
                      
                      </Link>
                    </li>
                

                
                
                  </ul>
                </li>
               <Link to='/contact'>
               <li class="nav-item">
                <button type="button" class="btn btn-dark">Contact us</button>
                </li>
               </Link>



                
              </ul>
            </div>
          </div>
        </nav>
      </IconContext.Provider>
    </>
  );
}

export default Navbar;
