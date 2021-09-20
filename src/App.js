import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { AcademicCurriculum, Activity, Classicalart, Classrooms, Codeofconduct, Earlychildhood, Elementaryschool, Footer, Labs, Library, Middleschool, Moral, Navbar, Newsevent, Principalpen, Spiritual, Uniform } from "./Component";
import Home from "./Pages/Home/Home";
import Director from "./Pages/Director/Director";
import Highshool from "./Component/Highschool/Highschool";
import Corriculums from "./Pages/Cocurriculams/Corriculums";
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

          

        </Switch>
          <Footer></Footer>
      </Router>
    </div>
  );
}

export default App;
