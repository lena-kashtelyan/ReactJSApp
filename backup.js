import React from 'react';
import {Grid, Row, Column} from 'react-cellblock';
import { SpringGrid, CSSGrid, measureItems, makeResponsive  } from 'react-stonecutter';
import {ScrollBox, ScrollAxes, FastTrack} from 'react-scroll-box';


var FirstPage = React.createClass({

    getInitialState: function(){
        return { searchString: '' };
    },

    handleChange: function(e){
        this.setState({searchString:e.target.value});
    },

    render: function() {
        var searchString = this.state.searchString.trim().toLowerCase();
        return <div>
        			<h1>hello there</h1>
              <p>This is an app that empowers you to voice your political opinion by streamlining the political interaction process! We do this by finding what government officials are most relevant to where you live, getting their contact info, estimating what impact you can have with them, and then providing templates for you to call, email, or write to your official. With our app, we hope to streamline your political action so that it takes only 5 or 10 minutes to do. Enter your zip below to begin!</p>
              <br></br><br></br><br></br><br></br>
              <input type="text" value={this.state.searchString} onChange={this.handleChange} placeholder="Zipcode" />
              <input type="button" value="GO" onClick={this.handleGo}/>
              </div>;
    },



    handleGo: function(e) {


      var issues = ["immigration", "religious freedom"]
      var reps = [{name : "McCain", state : "Arizona", party : "Republican", picture : "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/John_McCain_official_portrait_2009.jpg/220px-John_McCain_official_portrait_2009.jpg"},
                  {name : "McCain", state : "Arizona", party : "Republican", picture : "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/John_McCain_official_portrait_2009.jpg/220px-John_McCain_official_portrait_2009.jpg"},
                  {name : "McCain", state : "Arizona", party : "Republican", picture : "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/John_McCain_official_portrait_2009.jpg/220px-John_McCain_official_portrait_2009.jpg"},
                  {name : "McCain", state : "Arizona", party : "Republican", picture : "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/John_McCain_official_portrait_2009.jpg/220px-John_McCain_official_portrait_2009.jpg"},
                  {name : "McCain", state : "Arizona", party : "Republican", picture : "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/John_McCain_official_portrait_2009.jpg/220px-John_McCain_official_portrait_2009.jpg"},
                  {name : "McCain", state : "Arizona", party : "Republican", picture : "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/John_McCain_official_portrait_2009.jpg/220px-John_McCain_official_portrait_2009.jpg"},
                  {name : "McCain", state : "Arizona", party : "Republican", picture : "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/John_McCain_official_portrait_2009.jpg/220px-John_McCain_official_portrait_2009.jpg"},
                  {name : "McCain", state : "Arizona", party : "Republican", picture : "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/John_McCain_official_portrait_2009.jpg/220px-John_McCain_official_portrait_2009.jpg"}]
      ReactDOM.render(
        <SecondPage items={ { one : issues, two : reps } } />,
        document.getElementById('container')
      );
    }

  });

  var SecondPage = React.createClass({


    render: function() {
      var issues = this.props.items.one;
      var reps = this.props.items.two;
      return <div>
        <h1>Second Page!</h1>
        <input type="button" value="go back" onClick={this.handleBack}/>
        <input type="button" value="go on" onClick={this.handleForth}/>
        <Grid>
          <Row>
            <Column width="1/3" className="blackCol">
            {issues.map(function(i) {return <div className='issue'>{i}</div>})}
            </Column>
            <Column width="2/3">
                {reps.map(function(r) {return <div className='rep'>{r.name}</div>})}
            </Column>
          </Row>
        </Grid>
      </div>;
    },

    handleBack: function(e) {

      var issues = ["immigration", "religious freedom"]
      var reps = [{name : "McCain", state : "Arizona", party : "Republican", picture : "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/John_McCain_official_portrait_2009.jpg/220px-John_McCain_official_portrait_2009.jpg"},
                  {name : "McCain", state : "Arizona", party : "Republican", picture : "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/John_McCain_official_portrait_2009.jpg/220px-John_McCain_official_portrait_2009.jpg"},
                  {name : "McCain", state : "Arizona", party : "Republican", picture : "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/John_McCain_official_portrait_2009.jpg/220px-John_McCain_official_portrait_2009.jpg"},
                  {name : "McCain", state : "Arizona", party : "Republican", picture : "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/John_McCain_official_portrait_2009.jpg/220px-John_McCain_official_portrait_2009.jpg"},
                  {name : "McCain", state : "Arizona", party : "Republican", picture : "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/John_McCain_official_portrait_2009.jpg/220px-John_McCain_official_portrait_2009.jpg"},
                  {name : "McCain", state : "Arizona", party : "Republican", picture : "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/John_McCain_official_portrait_2009.jpg/220px-John_McCain_official_portrait_2009.jpg"},
                  {name : "McCain", state : "Arizona", party : "Republican", picture : "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/John_McCain_official_portrait_2009.jpg/220px-John_McCain_official_portrait_2009.jpg"},
                  {name : "McCain", state : "Arizona", party : "Republican", picture : "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/John_McCain_official_portrait_2009.jpg/220px-John_McCain_official_portrait_2009.jpg"}]
      ReactDOM.render(
        <SecondPage items={ { one : issues, two : reps } } />,
        document.getElementById('container')
      );
    },

    handleForth: function(e) {
      ReactDOM.render(
        <ThirdPage />,
        document.getElementById('container')
      );
    }

  });

  var ThirdPage = React.createClass({

    render: function() {
      return <div>
        <h1>Third Page!</h1>
        <input type="button" value="go back" onClick={this.handleBack}/>
        <input type="button" value="go on" onClick={this.handleForth}/>
      </div>;

    },

    handleBack: function(e) {
      ReactDOM.render(
        <SecondPage />,
        document.getElementById('container')
      );
    },

    handleForth: function(e) {
      ReactDOM.render(
        <FourthPage />,
        document.getElementById('container')
      );
    }

  });

  var FourthPage = React.createClass({

    render: function() {
      return <div>
        <h1>Last, fourth Page!</h1>
        <input type="button" value="go back" onClick={this.handleBack}/>
        <input type="button" value="go on" onClick={this.handleForth}/>
      </div>;

    },

    handleBack: function(e) {
      ReactDOM.render(
        <ThirdPage />,
        document.getElementById('container')
      );
    }

  });

// ACTUALLY RENDER THE FIRST PAGE

  ReactDOM.render(
    <FirstPage />,
    document.getElementById('container')
  );
