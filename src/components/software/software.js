import React from "react";
import "../css/software.css"
import Technology from "./techStack";
import { ReactComponent as Readmore } from '../images/readmoredark.svg';
import {Link} from 'react-scroll';
import { Octokit } from "@octokit/core";

export default class Software extends React.Component{
    constructor(props){
        super(props);
        this.fetch = this.fetch.bind(this)
        this.state = {
            data:[],
            fetched:false
        }
    }

    componentDidMount(){
        this.fetch().then(resp=>{
            this.setState({
                data:resp.data,
                fetched:true
            })
        }).catch(e => console.log(e));
    }

    async fetch(){
        const ock = new Octokit({ auth: "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"})
        const response = await ock.request("GET /user/repos",
        {
            owner:"Muddassar087",
            type:"public"
        });
        return response;
    }

    render() {
      return (
        <React.Fragment>
            <section className='softwarePage'>
            <div className="container">
            <div className='h-soft'>
                <h1>Software Repo</h1>
                <p>Click on the title with to view the description</p>
            </div>
                <div className="ReactTable">
                    <div className="rt-table" role="grid">
                    <div className="rt-thead -header" style={{minWidth: '920px'}}>
                        <div className="rt-tr" role="row">
                        <div className="rt-th  rt-resizable-header -cursor-pointer" role="columnheader" tabIndex={-1} style={{flex: '240 0 auto', width: '309px', maxWidth: '309px'}}>
                            <div className="rt-resizable-header-content">Title</div>
                            <div className="rt-resizer" />
                        </div>
                        <div className="rt-th  rt-resizable-header -cursor-pointer" role="columnheader" tabIndex={-1} style={{flex: '100 0 auto', width: '100px'}}>
                            <div className="rt-resizable-header-content">Description</div>
                            <div className="rt-resizer" />
                        </div>
                        </div>
                    </div>
                    <div className="rt-tbody" style={{minWidth: '920px'}}>
                        { 
                            this.state.data.map(repo=>(
                                <div className="rt-tr-group" role="rowgroup" key={repo.id}>
                                <div className="rt-tr -odd" role="row" >
                                    <div className="rt-td" role="gridcell"  style={{flex: '240 0 auto', width: '309px', maxWidth: '309px'}}>
                                    <div><a href={repo.html_url} className="plainLink" target="_blank" >{repo.name}</a></div>
                                    </div>
                                    <div className="rt-td" role="gridcell" style={{flex: '100 0 auto', width: '100px'}} key={repo.id}>{repo.description}</div>
                                </div>
                                </div>
                            ))
                        }
                    </div>
                    </div>
                    
                    <div className={!this.state.fetched ? "-active" : "-loading"}>
                        <div className="-loading-inner">Loading...</div>
                    </div>
                </div>
            </div>
            <Link to="techStack" spy={true} duration={500}>
                <div className='readMore-tech' style={{position:"sticky"}}>
                    <Readmore />
                </div>
            </Link>
            </section>
            <Technology />
        </React.Fragment>
      );
    }
}