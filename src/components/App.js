import React, { Component } from 'react';
import HeaderContents from './commonParts/header';
import data from '../data.json';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      navActive: false
    };
  }
  toggleNavClass() {
    this.setState({ navActive: !this.state.navActive });
  }
  render() {
    return (
      <div className={this.state.navActive ? 'App isNavActive' : 'App'} >
        <div className="contents-background"></div>
        <HeaderContents toggleNavClass={this.toggleNavClass} self={this} />
        <main>
          <section className="kv">
            <div className="kv-contents">
              <div className="kv-innder">
                <ul className="kv-list">
                  <li><img src={require("../assetts/images/sunflower/sf1.jpg")} alt=""/></li>
                </ul>
                <div className="kv-info-contents">
                  <h1>フォトスタジオ　ナチューラ</h1>
                  <p className="kv-description">岩手を起点とし、東北六県の様々な自然の美しさ・人々の営みなどを記録に残しております。</p>
                </div>
              </div>
            </div>
          </section>
          <section className="about">
          
          </section>
          <section className="gallery">
          
          </section>
          <section className="contact">
          
          </section>
        </main>
        <footer>

        </footer>
      </div>
    );
  }
}

export default App;
