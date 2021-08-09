import React from 'react';
import "../css/header.css";
import {ReactComponent as Menu} from "../images/menu.svg"
import {Link} from "react-router-dom"

class Header extends React.Component {

    constructor(props){
        super(props);
        this.state = {isOpen:false}
        this.openMenuItems = this.openMenuItems.bind(this);
        this.openLink = this.openLink.bind(this)
    }

    openMenuItems(){
        this.setState(state =>({
            isOpen:!state.isOpen
        }))
    }
    openLink(){
        this.setState({
            isOpen:false
        })
    }

    render(){
        return (
            <nav className="fixed-top">
                <div className='header-fluid'>
                    <div className='brand'><h1> <Link to="/" style={{color:'white', textDecoration:'none'}}> Muhammad Muddassar </Link></h1></div>
                    <Menu className="menuIcon" onClick={this.openMenuItems}/>
                    <div className={this.state.isOpen ? "nav-item-dropDown" : "nav-item"}>
                        <ul className="nav-links">
                            <Link to='/software' onClick={this.openLink} style={{color:"white", textDecoration:"none"}}><li key={1} className='nav-items'>Software</li></Link> 
                            <Link to='/contact' onClick={this.openLink} style={{color:"white", textDecoration:"none"}}><li key={2} className='nav-items'>Contact</li></Link> 
                        </ul>
                    </div>
                </div>
            </nav>
        );
    }
}
export default Header;