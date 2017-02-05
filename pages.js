import { SpringGrid, CSSGrid, measureItems, makeResponsive  } from 'react-stonecutter';
import Box from 'react-layout-components';

var FirstPage = React.createClass({

    getInitialState: function(){
        // set default validZipcode to true to hide error message
        // until an attempted submission
        return { searchString: '' , isValidZipcode: true};
    },

    handleChange: function(e){
        this.setState({searchString:e.target.value, isValidZipcode:this.state.isValidZipcode});
    },

    checkValidZipcode: function(){
        if (this.state.searchString.length == 5 && !isNaN(this.state.searchString)){
            return true;
        }
        return false;
    },

    render: function() {
        var searchString = this.state.searchString.trim().toLowerCase();
        return <div>
        			<h1>Intro</h1>
              <p>This is an app that empowers you to voice your political opinion by streamlining the political interaction process! We do this by finding what government officials are most relevant to where you live, getting their contact info, estimating what impact you can have with them, and then providing templates for you to call, email, or write to your official. With our app, we hope to streamline your political action so that it takes only 5 or 10 minutes to do. Enter your zip below to begin!</p>
              <br></br>
              <br></br>
              <br></br>
              {this.state.isValidZipcode ? null : <p>Please enter valid 5 digit zipcode</p>}
              <input type="text" value={this.state.searchString} onChange={this.handleChange} placeholder="Zipcode" />
              <input type="button" value="GO" onClick={this.handleGo}/>
              </div>;
    },

    handleGo: function(e) {
        this.setState({searchString:this.state.searchString, isValidZipcode:this.checkValidZipcode()});
    if (this.checkValidZipcode()){
      ReactDOM.render(
        <SecondPage />,
        document.getElementById('container')
      );}
    }

  });

  // <SpringGrid
  //   component="ul"
  //   columns={3}
  //   columnWidth={150}
  //   gutterWidth={5}
  //   gutterHeight={5}
  //   itemHeight={200}
  //   springConfig={{ stiffness: 170, damping: 26 }}>
  //   <li key="A">A</li>
  //   <li key="B">B</li>
  //   <li key="C">C</li>
  // </SpringGrid>

  var SecondPage = React.createClass({

    render: function() {
      return <div>
        <h1>Second Page!</h1>
        <input type="button" value="go back" onClick={this.handleBack}/>
        <input type="button" value="go on" onClick={this.handleForth}/>
        <Box width={300} height={500}>
          <Box justifyContent="center" alignItems="flex-start">
            <Box flex={3}>Flex 3</Box>
            <Box flex="1 0 auto" alignSelf="baseline">Flex 1</Box>
        </Box>
      </Box>
      </div>;

    },

    handleBack: function(e) {
      ReactDOM.render(
        <FirstPage />,
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
