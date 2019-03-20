import React, { Component } from 'react';
import { AppRegistry, Image } from 'react-native';
import SoundPlayer from 'react-native-sound-player'
 
try {
    // play the file tone.mp3
    SoundPlayer.playSoundFile('HipBones', 'mp3')
    // or play from url
    //SoundPlayer.playUrl('https://example.com/music.mp3')
} catch (e) {
    console.log(`cannot play the sound file`, e)
}


export default class Bananas extends Component {
  render() {
    let pic = {
      uri: 'https://upload.wikimedia.org/wikipedia/commons/d/de/Bananavarieties.jpg'
    };
    return (
      <Image source={pic} style={{width: 193, height: 110}}/>
    );
  }
}

// skip this line if using Create React Native App
AppRegistry.registerComponent('project1', () => Bananas);