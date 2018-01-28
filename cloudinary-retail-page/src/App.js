import React, { Component } from 'react';
import { Image, CloudinaryContext, Transformation} from 'cloudinary-react';
import logo from './logo.svg';
import './App.css';

const ImageTransformations = ({width, selectedShirt}) => {
  return (
    <Image publicId={selectedShirt.main+'.jpg'}>
        <Transformation width={width} crop="scale" />
    </Image>
  );
};

class App extends Component {

  constructor(props){
    super(props);
    const defaultShirt = {id: 1, main: 'shirt_only'};
    this.state = {
      shirt:[
        defaultShirt,
        {id: 2, main: 'laying-shirt'},
        {id: 3, main: 'hanging_t-shirt'}
      ],
      selectedShirt: defaultShirt
    };
  }

  selectShirt(thumb){
    this.setState({selectedShirt:thumb}, _ => this.forceUpadate())
  }


  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
