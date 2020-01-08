import React, { Component } from 'react';
import Nav from './components/Nav/Nav';
import Logo from './components/Logo/Logo';
import Rank from './components/Rank/Rank';
import FaceRecognition from './components/FaceRecognition/FaceRecognition';
import ImageLinkForm from './components/ImageLinkForm/ImageLinkForm';
import Clarifai from 'clarifai';
import './App.css';

const app = new Clarifai.App({
  apiKey: 'e46a7ef2900e4f8cb66232bbe12f643d'
});

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      input: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fyt3.ggpht.com%2Fa-%2FAN66SAwbRPfH9oj8GTJb6U4B1XWhQpHdAzDrhLWavg%3Ds900-mo-c-c0xffffffff-rj-k-no&f=1&nofb=1',
      imageUrl:
        'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fyt3.ggpht.com%2Fa-%2FAN66SAwbRPfH9oj8GTJb6U4B1XWhQpHdAzDrhLWavg%3Ds900-mo-c-c0xffffffff-rj-k-no&f=1&nofb=1',
      // 'https://images.pexels.com/photos/3342739/pexels-photo-3342739.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
      boxes: []
    };
  }

  calculateFaceLocation = (data) => {
    let faces = [];
    let bar = [];
    faces.push(data.outputs[0].data.regions);
    console.log(faces);
    console.log(faces[0].length);
    const image = document.getElementById('inputimage');
    const width = Number(image.width);
    const height = Number(image.height);
    for (let i = 0; i < faces[0].length; i++) {
      let clarifaiFace = faces[0][i].region_info.bounding_box;
      console.log(clarifaiFace);
      // COME BACK TO THIS LATER
      bar.push({
        leftCol: clarifaiFace.left_col * width,
        topRow: clarifaiFace.top_row * height,
        rightCol: width - (clarifaiFace.right_col * width),
        bottomRow: height - (clarifaiFace.bottom_row * height)
      });
    }
    return bar;
  };

  displayFaceBox = (box) => {
    this.setState({ boxes:[...this.state.boxes, box]});
  };

  onInputChange = (event) => {
    this.setState({ input: event.target.value });
  };

  onButtonSubmit = () => {
    this.setState({
      imageUrl: this.state.input,
      input: ''
    });
    app.models
      .predict(Clarifai.FACE_DETECT_MODEL, this.state.input)
      .then((response) => {
        console.log('response', response);
        const boxes = this.calculateFaceLocation(response);
        boxes.forEach( box => this.displayFaceBox(box));


      })
      .catch((err) => console.log(err));
  };

  render() {
    return (
      <div className='App'>
        <Nav />
        <Logo />
        <Rank imageUrl={this.state.imageUrl} />
        <ImageLinkForm
          input={this.state.input}
          onInputChange={this.onInputChange}
          onButtonSubmit={this.onButtonSubmit}
        />
        <FaceRecognition boxes={this.state.boxes} imageUrl={this.state.imageUrl} />
      </div>
    );
  }
}
