import React from 'react';
import '../css/contact.css';
import SociallMediaLinks from './socialLinks';
import emailjs from 'emailjs-com';
import dotenv from 'dotenv';
import { ReactComponent as Loading } from "../images/loading.svg";
import { ReactComponent as Success } from "../images/success.svg";

dotenv.config();

export default class Contact extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            isLoading:false,
            isSuccess:false
        }
        this.sendEmail = this.sendEmail.bind(this)
        this.isTimeOut = this.isTimeOut.bind(this)
    }

    componentDidMount(){
       this.success = setInterval(this.isTimeOut, 1000);
    }

    isTimeOut(){
        if(this.state.isSuccess){
            setTimeout(this.setState({isSuccess: false}), 2000);
        }
    }
    sendEmail(e) {
        e.preventDefault();
        this.setState({
            isLoading:true,
            isSuccess:false
        })
        emailjs.sendForm(process.env.REACT_APP_EMAIL_SERVICE_ID, process.env.REACT_APP_EMAIL_TEMPLATE_ID, e.target, process.env.REACT_APP_EMAIL_USER_ID)
          .then((result) => {
              this.setState({
                  isLoading:false,
                  isSuccess:true
              })
          }, (error) => {
              console.log(error.text);
          });
    }
    render(){
        return (
            <React.Fragment>
                <section className='contact'>
                <div className='contact-container'>
                    <div className="head-contact">
                        <h1>Contact</h1>
                    </div>
                    <div className='form-container'> 
                        <form className='form-flex' onSubmit={this.sendEmail} id="emailform">
                            <input type="hidden" name="contact_number" />
                            <input type="text" name="name" id="name" placeholder="Name and company"/>
                            <input type="text" name="email" id="email" placeholder="Email" />
                            <input type="text" name="subject" id="subject" placeholder="Subject"/>
                            <textarea name="message" id="message" cols="30" placeholder="your message" rows="10"></textarea>
                        </form>
                        <div className="-btn">
                            <div className="loadingEmail">
                                {this.state.isLoading ?  <Loading className="loadingIcon"/> : undefined}
                                {this.state.isSuccess ?  <Success className="successIcon"/> : undefined}
                            </div>
                            <button type="submit" form="emailform" className={(this.state.isLoading) ? 'disabledButton' : "btn"}>Send</button>
                        </div>
                    </div>
                </div>
                </section>
                <SociallMediaLinks />
            </React.Fragment>
        );
    }
}