import React, { Component } from 'react';
import './App.css';
import Navigation from './components/navigation/Navigation';
import SignIn from './components/signIn/SignIn';
import SignUp from './components/signUp/SignUp';
import Logo from './components/logo/Logo';
import ImageLinkForm from './components/imageLinkForm/ImageLinkForm';
import Rank from './components/rank/Rank';
import FaceDetection from './components/faceDetection/FaceDetection';
import Particles from 'react-particles-js';
import Clarifai from 'clarifai';
import 'tachyons';


const app = new Clarifai.App({
 apiKey: 'ae46f3ee7b9546f4bb2cfa9f2f67ffd2'
});

const particlesOptions = {
  particles: {
    number: {
      value: 80,
      density: {
        enable: true,
        value_area: 800
      }
    }
  }
};

class App extends Component {
  constructor(){
    super();
    this.state = {
      input: '',
      imageUrl: '',
      box: {},
      route: 'signin',
      isSignedIn: false
    }
  }

  onRouteChange = (route) => {
    if (route === 'signout') {
      this.setState({isSignedIn: false});
    }
    else if (route === 'home') {
      this.setState({isSignedIn: true});
    }
    this.setState({route: route});
  }

  calculateFaceLoaction = (data) => {
    const clarifaiFace = data.outputs[0].data.regions[0].region_info.bounding_box;
    const image = document.getElementById('inputImage');
    const width = Number(image.width);
    const height = Number(image.height);
    console.log(width, height);
    return {
      leftCol: clarifaiFace.left_col * width,
      topRow: clarifaiFace.top_row * height,
      rightCol: width - (clarifaiFace.right_col * width),
      bottomRow: height - (clarifaiFace.bottom_row * height)
    }
  }

  displayFaceBox = (box) => {
    console.log(box);
    this.setState({box: box});
  }

  onInputChange = (event) => {
    this.setState({input: event.target.value});
    console.log(event.target.value);
  }

  onButtonSubmit = () => {
    this.setState({imageUrl: this.state.input});
    app.models.predict (
      Clarifai.FACE_DETECT_MODEL, this.state.input)
      .then((response) => this.displayFaceBox(this.calculateFaceLoaction(response)))
      .catch(err => console.log(err));
  }

  render(){
    return (
      <div className="App">
      <Particles className='particles' params={particlesOptions} />
        <Navigation isSignedIn={this.state.isSignedIn} onRouteChange={this.onRouteChange} />
        {this.state.route === 'home'
        ? <div>
            <Logo />
            <Rank />
            <ImageLinkForm
              onInputChange={this.onInputChange}
              onButtonSubmit={this.onButtonSubmit}
            />
            <FaceDetection boundingBox={this.state.box} imageUrl={this.state.imageUrl} />
          </div>
          : ( this.state.route === 'signin'
              ? <SignIn onRouteChange={this.onRouteChange} />
              : <SignUp onRouteChange={this.onRouteChange} />
            )
         }
      </div>
    );
  }
}

export default App;
