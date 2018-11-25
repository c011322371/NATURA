import React, { Component } from 'react';
import data from '../data.json';
import HeaderContents from './header';
import KvContents from './kv';
import AboutContents from './about';
import GalleryContents from './gallery';
import ContactContents from './contact';
import SnsContents from './sns';
import FooterContents from './footer';

class App extends Component {
  constructor(props) {
    super(props);
    this.init();
  }
  init(){
    this.state = {
      nav_active: false
    };
  }
  toggleNavClass() {
    this.setState({ nav_active: !this.state.nav_active });
  }
  render() {
    return (
      <div className={this.state.nav_active ? 'App isNavActive' : 'App'} >
        <div className="contents-background"></div>
        <HeaderContents toggleNavClass={this.toggleNavClass} self={this} />
        <main>
          <KvContents />
          <div className="contentWrapper">
            <AboutContents />
            <GalleryContents />
            <ContactContents />
            <SnsContents />
          </div>
        </main>
        <FooterContents />
      </div>
    );
  }
}

export default App;
