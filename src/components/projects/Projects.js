import React, {Component} from 'react';
import WOW from 'wow.js';

class Projects extends Component{
  componentDidMount(){
    const wow = new WOW();
    wow.sync();
  }
  render(){
    return(
      <div className="row projects-section">
        <h1>Some personal work</h1>
    <div className="row">
            <div className="col-md-6 col-sm-12 wow fadeInLeft">
              <div className="card" styles={"width: 2rem;"}>
                <div className="card-body">
                  <a href={"https://jcode2.github.io/wiki-viewer/"}><h5 className="card-title">Wiki Viewer</h5></a>
                  <h6 className="card-subtitle mb-2 text-muted">Apr 2017 – Apr 2017</h6>
                  <p className="card-text">Wikipedia Viewer is a web application that allows the user to enter in anything they would like to search in the input form. Once entered the user will have a list of "preview cards" displayed back to them related to their search. Technologies used are HTML, CSS, Bootstrap, Javascript, jQuery, along with AJAX requests and the Wikipedia API.
</p>
                </div>
              </div>
            </div>

            <div className="col-md-6 col-sm-12 wow fadeInRight">
              <div className="card" styles={"width: 2rem;"}>
                <div className="card-body">
                  <h5 className="card-title">Weather Map API</h5>
                  <h6 className="card-subtitle mb-2 text-muted">Nov 2016 – Nov 2016</h6>
                  <p className="card-text">Some quick example text to build on the card title and make up the bulk of the cards content.</p>
                </div>
              </div>
            </div>
    </div>

    <div className="row">
            <div className="col-md-6 col-sm-12 wow fadeInLeft">
              <div className="card" styles={"width: 2rem;"}>
                <div className="card-body">
                  <a href={"https://jcode2.github.io/Simple-Simon/"}><h5 className="card-title">Simple Simon</h5></a>
                  <h6 className="card-subtitle mb-2 text-muted">Nov 2016 – Nov 2016</h6>
                  <p className="card-text">Created a traditional "simon says" game that generates a random sequence each time the game is played. Technologies used were HTML CSS Bootstrap, Javascript and jQuery.</p>
                </div>
              </div>
            </div>

            <div className="col-md-6 col-sm-12 wow fadeInRight">
              <div className="card" styles={"width: 2rem;"}>
                <div className="card-body">
                  <a href={"https://codepen.io/jcode2/full/VXexyB/"}><h5 className="card-title">Artist Viewer</h5></a>
                  <h6 className="card-subtitle mb-2 text-muted">Card subtitle</h6>
                  <p className="card-text">Some quick example text to build on the card title and make up the bulk of the cards content.</p>
                </div>
              </div>
            </div>
    </div>
      </div>
    )
  }
}

export default Projects;
