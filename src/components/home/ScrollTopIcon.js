import React from "react";
import { ReactComponent as Sttop } from "../images/sttop.svg";
export default class ScrollToTopIcon extends React.Component{
    constructor(props){
        super(props)
        this.handleClick = this.handleClick.bind(this);
    }
    
    handleClick(){
        window.scrollTo(0,0)
    }
    render(){
        return (
            <div className={this.props.nameClass} onClick={this.handleClick}>
               <Sttop/>
            </div>
        );
    }
}