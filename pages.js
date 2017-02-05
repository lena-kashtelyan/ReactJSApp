import React from 'react';
import {Grid, Row, Column} from 'react-cellblock';
import { SpringGrid, CSSGrid, measureItems, makeResponsive  } from 'react-stonecutter';
import {ScrollBox, ScrollAxes, FastTrack} from 'react-scroll-box';


///will call the callback when it returns. 
///The object the callback passes will be a json list of representative objects
///pass in the zipcode string to get the representitives for a specified zip code
function httpGetReps(zipcode,callback)
{
	var url = 'https://hab2017.azurewebsites.net/api/reps/'+zipcode;
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.onreadystatechange = function() { 
        if (xmlHttp.readyState == 4 && xmlHttp.status == 200)
            callback(xmlHttp.responseText);
    }

    xmlHttp.open("GET", url, true); // true for asynchronous 
	xmlHttp.setRequestHeader( 'Content-Type', 'application/x-www-form-urlencoded; charset=UTF-8' );
    xmlHttp.send();
}


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

        httpGetReps(this.state.searchString, function(resp) {
              var issues = ["immigration", "religious freedom"]
              var reps = [{name : "McCain", state : "Arizona", party : "Republican", picture : "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/John_McCain_official_portrait_2009.jpg/220px-John_McCain_official_portrait_2009.jpg"},
                          {name : "McCain", state : "Arizona", party : "Republican", picture : "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/John_McCain_official_portrait_2009.jpg/220px-John_McCain_official_portrait_2009.jpg"},
                          {name : "McCain", state : "Arizona", party : "Republican", picture : "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/John_McCain_official_portrait_2009.jpg/220px-John_McCain_official_portrait_2009.jpg"},
                          {name : "McCain", state : "Arizona", party : "Republican", picture : "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/John_McCain_official_portrait_2009.jpg/220px-John_McCain_official_portrait_2009.jpg"},
                          {name : "McCain", state : "Arizona", party : "Republican", picture : "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/John_McCain_official_portrait_2009.jpg/220px-John_McCain_official_portrait_2009.jpg"},
                          {name : "McCain", state : "Arizona", party : "Republican", picture : "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/John_McCain_official_portrait_2009.jpg/220px-John_McCain_official_portrait_2009.jpg"},
                          {name : "McCain", state : "Arizona", party : "Republican", picture : "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/John_McCain_official_portrait_2009.jpg/220px-John_McCain_official_portrait_2009.jpg"},
                          {name : "McCain", state : "Arizona", party : "Republican", picture : "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/John_McCain_official_portrait_2009.jpg/220px-John_McCain_official_portrait_2009.jpg"}]
            var reps = JSON.parse(resp);
              ReactDOM.render(
                <SecondPage items={ { one : issues, two : reps } } />,
                document.getElementById('container'));
        })
    }


        
      

  });

  var SecondPage = React.createClass({

    getInitialState : function() {
      return {issueSelection : '', repSelection : ''};
    },

    render: function() {
      var issues = this.props.items.one;
      var reps = this.props.items.two;
      var issueSelection = "";
      return <div>
        <h1>Second Page!</h1>

        <Grid>
          <Row>
            <Column width="1/3" className="leftPanel">
            <Row>
              <div className="issues">
                {issues.map(function(i) {return <div className='issue' onClick={function(e) {this.issueSelection=i; console.log(this.issueSelection)}.bind(this)}>
                <p>{i}</p></div>},this)}
              </div>
            </Row>
            <Row id='media'>
              <div>
                <Column width="1/3"><div className="medium">call</div></Column>
                <Column width="1/3"><div className="medium">email</div></Column>
                <Column width="1/3"><div className="medium">write</div></Column>
              </div>
            </Row>
            </Column>

            <Column width="2/3" className="repPanel">
                {reps.map(function(r) {return <div className='rep' onClick={function(e) {this.repSelection=r.name; console.log(this.repSelection)}.bind(this)}>
                <p>{r.firstName} {r.lastName}</p>
                <p>{r.state}</p>
                <p>{r.party}</p>
                <img src={r.image_url} className="portrait"/>
                </div>}, this)}
            </Column>
          </Row>
        </Grid>

        <input type="button" value="go back" onClick={this.handleBack}/>
        <input type="button" value="go on" onClick={this.handleForth}/>
      </div>;
    },

    handleBack: function(e) {
      ReactDOM.render(
        <FirstPage />,
        document.getElementById('container')
      )
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

            var issues = ["immigration", "religious freedom"];
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
