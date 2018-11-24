import React, { Component } from 'react';

class SnsContents extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <ul className="snslist">
        <li><a href="https://www.facebook.com/share.php?u=http://natura.netlify.com/" target="_blank"><i className="fab fa-facebook"></i></a></li>
        <li><a href="https://twitter.com/intent/tweet?url=http://natura.netlify.com/" target="_blank"><i className="fab fa-twitter-square"></i></a></li>
        <li><a href="mailto:?subject=%E3%83%95%E3%82%A9%E3%83%88%E3%82%B9%E3%82%BF%E3%82%B8%E3%82%AA%E3%80%80%E3%83%8A%E3%83%81%E3%83%A5%E3%83%BC%E3%83%A9&amp;body=%E2%96%A0%E3%83%95%E3%82%A9%E3%83%88%E3%82%B9%E3%82%BF%E3%82%B8%E3%82%AA%E3%83%8A%E3%83%81%E3%83%A5%E3%83%BC%E3%83%A9%0Ahttp://natura.netlify.com/%0A" target="_blank"><i className="fas fa-envelope-square"></i></a></li>
        <li> <a href="https://line.me/R/msg/text/?http://natura.netlify.com/" target="_blank"><i className="fab fa-line"></i></a></li>
      </ul>
    );
  }
}

export default SnsContents;