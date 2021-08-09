import React from 'react';
import { ReactComponent as Fb } from '../images/fb.svg';
import { ReactComponent as Li } from '../images/li.svg';
import { ReactComponent as Tw } from '../images/tw.svg';
import { ReactComponent as Gi } from '../images/gt.svg';

export default class SociallMediaLinks extends React.Component{
    render(){
        return (
            <div className="socialMediaLinks-contact">
                <h1 className="stayConn">Stay connected</h1>
                <div className="coloumn-links">
                    <div className='Slinks-row'>
                        <ul className=''>
                                <Fb id='fb'/>
                                <Li id='li'/>
                                <Tw id='tw'/>
                                <Gi id='gt'/>
                                </ul>
                    </div>
                    <div className='copyright' style={{height:"3vh"}}>
                        <p>all  right reserved @copyright 2021</p>
                    </div>
                </div>
            </div>
        );
    }
}