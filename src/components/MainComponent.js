import React, { Component } from 'react';
import Header from './HeaderComponent';
import Fly from './FlyComponent';
import Home from './HomeComponent';
import About from './AboutComponent';
import Project from './ProjectComponent';
import Skill from './SkillComponent';
import Contact from './ContactComponent';
import { Switch, Route, Redirect, withRouter} from 'react-router-dom';



class Main extends Component {
    render() {
        
        return (
        <div >
            <Header />
            <Fly/>
            <Switch>
                <Route path='/home' component={Home} />
                <Route exact path='/about' component={About} />
                <Route exact path='/skill' component={Skill} />
                <Route exact path='/project' component={Project} />
                <Route exact path='/contact' component={Contact} />
                <Redirect to='/home' />
            </Switch>
        </div>
        );
    };
}
export default Main;
