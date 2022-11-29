import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import Home from "./Home";
import Activities from "./Activities";
import Team from "./Team";
// import Contac from "./Contac";
import Register from "./Register"
import {Switch,Route,Redirect} from "react-router-dom";
import New from "./Components/Activity/New";
import New3 from "./Components/Activity/New3";
import New6 from "./Components/Activity/New6";


const App =() => {

    return (
        <>
    
        <Switch>
            <Route exact path = "/" component ={Home} />
            <Route exact path = "/activities" component ={Activities} />
            <Route exact path = "/team" component ={Team} />
            {/* <Route exact path = "/Call" component ={Contac} /> */}
            <Route exact path = "/Register" component ={Register} />
          
            <Route exact path = "/new6" component ={New6} />
            <Route exact path = "/new3" component ={New3} />
            <Route exact path = "/new" component ={New} />
        </Switch>
        </>
    )
}
export default App;