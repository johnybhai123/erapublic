import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { AcademicCurriculum, Activity, Annual, Classicalart, Classrooms, Codeofconduct, Computerlab, Earlychildhood, Educationaltour, Elementaryschool, Footer, Labs, Library, Middleschool, Moral, Nationalfestival, Navbar, Newsevent, Principalpen, Spiritual, Sportsday, Uniform } from "./Component";
import Home from "./Pages/Home/Home";
import Highshool from "./Component/Highschool/Highschool";
import Corriculums from "./Pages/Cocurriculams/Corriculums";
import Staff from "./Component/Staff/Staff";
import Contact from "./Component/Contact/Contact";
import Admissioninquiry from "./Component/Admissioninquiry/Admissioninquiry";
import Noticedescription from "./Component/Noticedescription/Noticedescription";
import Importantdescription from "./Component/Noticedescription/Importantdescription";
import Strongfoundation from "./Component/Strongfoundation/Strongfoundation";
import Vission from "./Component/Vission/Vission";
import Mission from "./Component/Mission/Mission";
import Teachingmethodlogy from "./Component/Teachingmethodology/Teachingmethodology";
import Ourteam from "./Component/Ourteam/Ourteam";
import Saritabudana from "./Component/Saritabudana/Saritabudana";
import Md from "./Component/Md/Md";
import President from "./Component/President/President";
import Principal from "./Component/Principal/Principal";
import Kindergarten from "./Component/Kindergarten/Kindergarten";
import Activityroom from "./Component/Activityroom/Activityroom";
import Transport from "./Component/Transport/Transport";
import ScrollToTop from "./Component/ScrollToTop";
import Schoolmanagementcommittee from "./Component/Schoolmanagementcommittee/schoolmanagement";
function App() {
  return (
    <div className="App">
      <Router>
        <ScrollToTop/>
          <Navbar></Navbar>
        <Switch>

          <Route path="/" exact component={Home}/>
           
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
          <Route path="/annual" exact component={Annual}/>
          <Route path="/staff" exact component={Staff}/>
          <Route path="/contact" exact component={Contact}/>
          <Route path="/inquiry" exact component={Admissioninquiry}/>
          <Route path="/schoolbyte/:id" exact component={Noticedescription}/>
          <Route path="/schoolemportent/:id" exact component={Importantdescription}/>
          <Route path="/foundation" exact component={Strongfoundation}/>
          <Route path="/vision" exact component={Vission}/>
          <Route path="/mission" exact component={Mission}/>
          <Route path="/Tm" exact component={Teachingmethodlogy}/>
          <Route path="/ourteam" exact component={Ourteam}/>
          <Route path="/Director" exact component={Saritabudana}/>
          <Route path="/Md" exact component={Md}/>
          <Route path="/president" exact component={President}/>
          <Route path="/principal" exact component={Principal}/>
          <Route path="/kinder" exact component={Kindergarten}/>
          <Route path="/activity" exact component={Activityroom}/>
          <Route path="/transportation" exact component={Transport}/>
          <Route path="/schoolman" exact component={Schoolmanagementcommittee}/>

          

        </Switch>
          <Footer></Footer>
      </Router>
    </div>
  );
}

export default App;
