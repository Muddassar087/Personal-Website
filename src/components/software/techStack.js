import React from 'react';
import "../css/techstack.css";

import { Link } from "react-scroll";
import ScrollToTopIcon from '../home/ScrollTopIcon';

export default class Technology extends React.Component {
  render(){
    return (
      <React.Fragment>
      <section className="techStack">
          <ScrollToTopIcon nameClass="softwareScroll"/>
          <div className="tech-container">
              <div className="tech">
                <h1 className='techH'>Technology Stack</h1>
                <p className='techp'>Following are my experties and experienced in technologies</p>
              </div>
              <div className='experties'>
                  <div className='expertiesInfo'> 
                      <p>Front-end technologies
                        include following</p>
                      <ul className='listExperties'>
                          <li>React js</li>
                          <li>HTML/CSS</li>
                      </ul>
                  </div>
                  <div className='expertiesInfo'>
                      <p>Back-end technologies
                        include following</p>
                      <ul className='listExperties'>
                          <li>Java (Spring)</li>
                          <li>Python (Django)</li>
                      </ul>
                  </div>
                  <div className='expertiesInfo'>
                      <p>Database technologies
                        include following</p>
                      <ul className='listExperties'>
                          <li>MYSQL</li>
                      </ul>
                  </div>
                  <div className='expertiesInfo'>
                      <p>Programming languages</p>
                      <ul className='listExperties'>
                          <li>Python</li>
                          <li>Java</li>
                          <li>JavaScript</li>
                          <li>Dart</li>
                      </ul>
                  </div>
              </div>
              <div className="ptech">
                <p>
                “My goal is to make some awesome stuff with what I know and keep inserting more stuff in what I know section. 
                  I mostly learned programming by doing stuff instead of watching courses and wasting more and making less. In the 
                  start of my journey I did basic coding in Python, C++ and Java for about 1 and half years. My basics got strong.
                  My first real project was a School management system (traditional) in java. After that I stepped in
                  to the web dev and making my way through it. On the way I learn Andriod development and JavaScript did some amazing
                  projects and learned alot.”
                </p>
              </div>
              <div className="fav">
                <h1>My favourite</h1>
                <div className="fav-fluid">
                    <div className="row">
                        <h2>A natural selecetion visualization</h2>
                        <p>Genetics algorithms implementation</p>
                        <h2>JavaScript</h2>
                    </div>
                    <div className="row">
                        <h2>A pathfinding visualization tool</h2>
                        <p>A searching algorithms implementation</p>
                        <h2>JavaScript</h2>
                    </div>
                    <div className="row">
                        <h2>YouTube description Updater</h2>
                        <p>A Js and python implementation using youtube api v3</p>
                        <h2>JavaScript, Python</h2>
                    </div>
                </div>
              </div>
          </div>
      </section>

      </React.Fragment>
    );
  }
}
