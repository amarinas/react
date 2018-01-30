import React, { Component } from 'react';
import { Image, CloudinaryContext, Transformation} from 'cloudinary-react';
import logo from './logo.svg';
import './App.css';
import { SketchPicker } from'react-color';


const ImageTransformations = ({width, rgb, selectedShirt, text}) => {
  return (
    <Image publicId={selectedShirt.main+'.jpg'}>
        <Transformation width={width} crop="scale" />
        <Transformation effect={'red:'+((-1+rgb.r/255)*100).toFixed(0)} />
        <Transformation effect={'blue'+((-1+rgb.b/255)*100).toFixed(0)} />
        <Transformation effect={'green'+((-1+rgb.g/255)*100).toFixed(0)} />
        <Transformation underlay={selectedShirt.underlay} flags="relative" width="1.0" />
        <Transformation underlay={selectedShirt.underlay} flags="relative" width="1.0" />
    </Image>
  );
};

class App extends Component {

  constructor(props){
    super(props);
    const defaultShirt = {id: 1, main: 'shirt_only', underlay: 'model2', overlay: ''};
    this.state = {
      shirt:[
        defaultShirt,
        {id: 2, main: 'laying-shirt', underlay: '', overlay: ''},
        {id: 3, main: 'hanging_t-shirt', underlay: '', overlay: 'hanger'}
      ],
      text: ' ',
      selectedShirt: defaultShirt,
      background: {rgb:{r:255,g:255,b:255}}
    };
  }

  handleColorChange(color) {
    //Updates color
    this.setState({background:color}, _ => this.forceUpdate());
  };

  selectShirt(thumb){
    this.setState({selectedShirt:thumb}, _ => this.forceUpadate())
  }


  render() {
    const rgb = this.state.background.rgb;

    return (
      <div className="App">
      <CloudinaryContext cloudName="dtli5s6n8">
        <div id="demoContainer">
            <div id="header">
                <a href="http://cloudinary.com/">
                    <img width="172" height="38" src="http://res-1.cloudinary.com/cloudinary/image/asset/drp_2.0/logo-e0df892053afd966cc0bfe047ba93ca4.png" alt="Cloudinary Logo" />
                </a>
                <h1> Product Personalization Demo</h1>
            </div>
        </div>
        <div id="imageDemoContainer">
          <div id="mainImage">
            <ImageTransformations
                width="600"
                rgb={rgb}
                selectedShirt={this.state.selectedShirt}
                text={this.state.text} />
          </div>
          <div id="imageThumbs">
            <ul id="thumbs">
                {this.state.shirt.map(thumb => {
                  return (
                    <li className={thumb.main === this.state.selectedShirt.main ? 'active': ''} onClick={this.selectedShirt.bind(this, thumb)} key={thumb.id}>
                        {/*<Image publicId={thumb.main}>*/}
                            {/*<Transformation width="75" crop="scale" />*/}
                        {/*<Image>*/}
                        <ImageTransformations
                            width = "75"
                            rgb={rgb}
                            selectedShirt={thumb}
                            text={' '} />
                    </li>
                  )
                })}
          </ul>
        </div>
      </div>
    </CloudinaryContext>
  </div>
);
}
}

export default App;
