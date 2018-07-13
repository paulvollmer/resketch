import React, { Component } from 'react';

// import a sketch file with symbols to use.
import Logo from './Logo';
import Icon1 from './Icon1';
import Icon2 from './Icon2';
// import Icon3 from './Icon3';
import Artboard from './Artboard';
import Button from './Button';

// import ButtonBuild  from './Button';
// const {
//   Button,
//   Avatar,
// } = ButtonBuild

// write your react app
class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Logo style={{float: 'left', display: 'inline-block'}} />
          <Icon1/>
          <Icon2 />
          <h1 className="App-title">Resketch Demo</h1>
        </header>
        <div className='container'>
          <h3>Button Sketch file</h3>
          <Artboard />
          <Button />
        </div>
      </div>
    );
  }
}

export default App;
