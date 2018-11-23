import React, { Component } from 'react';
import HeaderContents from './commonParts/header';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      navActive: false
    };
  }
  toggleNavClass() {
    this.setState({ navActive: !this.state.navActive });
  };
  render() {
    return (
      <div className={this.state.navActive ? 'App isNavActive' : 'App'} >
        <div className="contents-background"></div>
        <HeaderContents toggleNavClass={this.toggleNavClass} self={this} />
        <main>
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
