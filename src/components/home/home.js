import React from 'react'
import "../css/home.css"
import "../css/education.css"
import DP from "../images/dp.PNG";
import { ReactComponent as Fb } from '../images/fb.svg';
import { ReactComponent as Li } from '../images/li.svg';
import { ReactComponent as Tw } from '../images/tw.svg';
import { ReactComponent as Gi } from '../images/gt.svg';
import { ReactComponent as LocationIcon } from '../images/location.svg';

import { ReactComponent as Readmore } from '../images/readmore.svg';
import { Link } from "react-scroll";
import EducationInfo from "./educationInfo";
import {Link as RLink} from "react-router-dom";
import ScrollToTopIcon from './ScrollTopIcon';

class Home extends React.Component {
  render(){
    return (
      <React.Fragment>
        <section className="home">
          <div className='socialMediaLinks'>
            <ul className='Slinks'>
             <a href="https://web.facebook.com/modassar.ali.77"> <Fb id='fb'/></a>
              <a href="https://www.linkedin.com/in/muhammad-muddassar-7047321b4/"><Li id='li'/></a>
              <a href="#"><Tw id='tw'/></a>
              <a href="https://github.com/Muddassar087"><Gi id='gt'/></a>
            </ul>
          </div>
            <div className='center'>
              <div className="NameDesc">
                <div className='display-pic'>
                    <img src={DP} alt="Muhammad Muddassar"/>
                </ div>
                <div className='hnd'>
                  <h1 className='HName'>Muhammad Muddassar</h1>
                  <p className='HDescription'>I am a software engineer trying to leave my foot print before leaving this world. <span className='contactMeLink'> <RLink to='/contact' style={{color:"#BDBBDA",textDecoration:"none"}}>Contact me</RLink> </span> If you’re intersested in me. I am currently resident
                  in Pakistan<LocationIcon className="locationicon" ></LocationIcon></p>

                </div>
              </div>
            </div>
          <Link 
            to="educationInfo"
            spy={true}
            // offset={-70}
            duration={500}
          >
            <div className='readMore'>
              <h2>Education</h2>
              <Readmore />
            </div>
          </Link>
        </section>
        <EducationInfo />
      </React.Fragment>
    );
  }
}

export default Home;