import React, { Component } from 'react';
import Typical from 'react-typical';
import Skill from './SkillComponent';
import About from './AboutComponent';

class Home extends Component {
  render () {
    return (
        <React.Fragment>
            <div  className=' container'>
                <div className=' circle'> <img class="home-page1" width="172px" height="172px" src="./assets/images/img.png" alt="logo" /></div>
                <div className='row '>
                    <span className="Vertical-line"></span>
                </div>
                    <div className='col'><hr className="line-hr "/>
                    </div>
                <div className='row '>
                    <div className='col-12 home-page'>
                        <p> <b>Hello, I'm Tewabe!</b> <br/> 
                        <h4>I am an Engineer turned Developer and {" "}</h4>
                        <Typical className="typical-tt"
                        loop={Infinity}
                        wrapper="p" 
                        steps={[ 
                            'optimist 🍀', 1000,
                            'motivated 🏃‍♂️', 500,
                            'disciplined 🤵‍♂️', 1000,
                            'sociable 😁', 500,
                            'team Player 👫', 1000,
                            'book worm 📚', 500,
                            'trilingual ✋🏽', 1000,
                        ]}
                        />
                        </p>
                    </div>
                </div>
                <div className='row '>
                    <div className='col'>
                        <hr className="line-hr1 "/></div>
                    </div>
                <div className='row '>
                    <span className="Vertical-line1"></span>
                </div>
                <div className='row button-row grid-container'>
                    <div className='col-sm-2 grid-item'>
                    <a  className="button-row-grid"><About /></a>
                    </div>
                    <div className='col-sm-2 grid-item'>
                    <a  className="button-row-grid"><Skill /></a>
                    </div>
                  
                    <div className=" col-sm-2 grid-item">
                    <a  className="button-row-grid" href="https://ttewabe.github.io/html-js/" target="_blank">Resume</a>
                    </div>
                </div>
                <div className="row">
                    <div className=" col-12 footer">
                    <a className="btn" href="https://github.com/ttewabe" target="_blank"><p>🤍 TEWABE TADEGE</p></a>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
  }
}
export default Home;