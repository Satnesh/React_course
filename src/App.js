import logo from './logo.svg';
import './App.css';
import {Button, Col, Row} from 'reactstrap'
import {ToastContainer,toast} from 'react-toastify'
import Home from './component/Home';
import Course from './component/Course';
import Allcourses from './component/Allcourses';
import Addcourse from './component/Addcourse';
import Header from './component/Header';
import Menus from './component/Menus';

import {BrowserRouter as Router,Route} from 'react-router-dom'


 
function App() {

  const handle=()=>{
    toast.success("this is my first button")
  }
  return (
    <div className="App">
      <Router>
      <ToastContainer/>
      <Header/>

      <Row>
        <Col md={4}>
          <Menus/>
          </Col>
          <Col md={8}>
            <Route exact path="/home" component={Home}/>
            <Route exact path="/add-course" component={Addcourse}/>
            <Route exact path="/view-course" component={Allcourses}/>

          

        </Col>

      </Row>

      </Router>
      {/* <Home/>
     <Allcourses/>
     <Addcourse/> */}
      
      
      
      
      
    </div>
  );
}

export default App;
