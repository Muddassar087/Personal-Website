import React from "react";
import "../css/education.css";
import ScrollToTopIcon from "./ScrollTopIcon";

export default class EducationInfo extends React.Component{
	render(){
    return (
        <section className='educationInfo'>
			<ScrollToTopIcon nameClass="homeScroll"/>

			<div className='eduContainer'>
				<h1 className='Hedu'>Education</h1>
				<p className="desc-edu">I was not a very bright student in school or college but in 
					university. I came to new about porgramming and that chaged
					my life entirely. I spent more time in coding then watching movies. I was
					coding during my semester exams and I really should be studying instead of coding "Youtube description's updater".</p>
				<h1 className="myedu">My education</h1>
				<div className='eduList'>
					<ul>
						<li>Bachalors in software engineering (BSE) from <strong>COMSATS University</strong></li>
						<li>FCS (intermediate education) from The Scholars Science college</li>
						<li>Matriculition from Saint Paul High School</li>
					</ul>
				</div>
			</div>
		</section>

    );}
}