import React, { Component } from 'react';
import logo from '../assetts/images/natura-logo.svg';
import SnsContents from './sns';
import data from '../data.json';

class HeaderContents extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <header>
        <div className="header-inner">
          <div className="logo">
            <a href="/"><img src={logo} className="App-logo" alt="logo" /></a>
          </div>
          <nav className='gnav' 
            onClick={this.props.toggleNavClass.bind(this.props.self)} >
            <a href="javascript:void(0)">
              <span className="humberger-menu">
                <span className="humberger-menu-top"></span>
                <span className="humberger-menu-bottom"></span>
              </span>
            </a>
            <div className="humberger-inner">
              <ul className="navlist">
                {data.navigation.map((data) => {
                  return <li key={data.id}><a href={data.href}>{data.title}</a></li>
                })}
              </ul>
              <div className="nav-inner-share">
                <SnsContents />
              </div>
            </div>
          </nav>
        </div>
      </header>
    );
  }
}

export default HeaderContents;