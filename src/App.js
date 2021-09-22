import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { AcademicCurriculum, Activity, Annual, Classicalart, Classrooms, Codeofconduct, Computerlab, Earlychildhood, Educationaltour, Elementaryschool, Footer, Labs, Library, Middleschool, Moral, Nationalfestival, Navbar, Newsevent, Principalpen, Spiritual, Sportsday, Uniform } from "./Component";
import Home from "./Pages/Home/Home";
import Director from "./Pages/Director/Director";
import Highshool from "./Component/Highschool/Highschool";
import Corriculums from "./Pages/Cocurriculams/Corriculums";
import Staff from "./Component/Staff/Staff";
import Contact from "./Component/Contact/Contact";
import Admissioninquiry from "./Component/Admissioninquiry/Admissioninquiry";
function App() {
  return (
    <div className="App">
      <Router>
          <Navbar></Navbar>
        <Switch>

          <Route path="/" exact component={Home}/>
           
          <Route path="/directorpen" exact component={Director}/>
          <Route path="/msgprincipal" exact component={Principalpen}/>
          <Route path="/coc" exact component={Codeofconduct}/>
          <Route path="/uniform" exact component={Uniform}/>
          <Route path="/academicurriculum" exact component={AcademicCurriculum}/>
          <Route path="/earlychildhood" exact component={Earlychildhood}/>
          <Route path="/middle" exact component={Middleschool}/>
          <Route path="/elementary" exact component={Elementaryschool}/>
          <Route path="/highschool" exact component={Highshool}/>
          <Route path="/cocurriculum" exact component={Corriculums}/>
          <Route path="/moral" exact component={Moral}/>
          <Route path="/spiritual" exact component={Spiritual}/>
          <Route path="/activities" exact component={Activity}/>
          <Route path="/classroom" exact component={Classrooms}/>
          <Route path="/lab" exact component={Labs}/>
          <Route path="/modern" exact component={Classicalart}/>
          <Route path="/library" exact component={Library}/>
          <Route path="/wifi" exact component={Computerlab}/>
          <Route path="/festivals" exact component={Nationalfestival}/>
          <Route path="/Sports" exact component={Sportsday}/>
          <Route path="/annual" exact component={Annual}/>
          <Route path="/tour" exact component={Educationaltour}/>
          <Route path="/staff" exact component={Staff}/>
          <Route path="/contact" exact component={Contact}/>
          <Route path="/inquiry" exact component={Admissioninquiry}/>

          

        </Switch>
          <Footer></Footer>
      </Router>
    </div>
  );
}

export default App;
