import React, { Component } from 'react';
import HeaderContents from './commonParts/header';
import data from '../data.json';
import kvItem01 from "../assetts/images/sunflower/sf1.jpg";
import kvItem02 from "../assetts/images/sunflower/sf2.jpg";
import kvItem03 from "../assetts/images/sunflower/sf3.jpg";
import kvItem04 from "../assetts/images/sunflower/sf4.jpg";
import kvItem05 from "../assetts/images/sunflower/sf5.jpg";

class App extends Component {
  constructor(props) {
    super(props);
    this.init();
  }
  init(){
    this.state = {
      nav_active: false,
      timer_count: 0
    };
    this.kvImageUrls = [
      kvItem01,
      kvItem02,
      kvItem03,
      kvItem04,
      kvItem05
    ];
  }
  toggleNavClass() {
    this.setState({ nav_active: !this.state.nav_active });
  }
  componentDidMount() {
    const timer = 5000;
    this.interval = setInterval(this.changeImage.bind(this), timer);
  }
  componentWillUnmount() {
    clearInterval(this.interval); // お作法
  }
  changeImage() {
    if (++this.state.timer_count === this.kvImageUrls.length) {
      this.setState({ timer_count: 0 });
      return;
    }
    this.setState({ timer_count: this.state.timer_count + 1 });
  }
  render() {
    const lists = this.kvImageUrls.map((url, index) => {
			return <li key={index} className={index == this.state.timer_count ? 'isActive' : ''}><img src={url} /></li>
		});
    return (
      <div className={this.state.nav_active ? 'App isNavActive' : 'App'} >
        <div className="contents-background"></div>
        <HeaderContents toggleNavClass={this.toggleNavClass} self={this} />
        <main>
          <section className="kv">
            <div className="kv-contents">
              <div className="kv-innder">
                <ul className="kv-list">{lists}</ul>
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
