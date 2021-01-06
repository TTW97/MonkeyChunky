import * as React from 'react';
import { Text, View, StyleSheet, TextInput, TouchableOpacity, Image} from 'react-native';
import {Audio} from 'expo-av'




export default class SoundButton extends React.Component{

  playSound = async(soundchunk) => {

    var soundlink = 'https://whitehatjrcontent.s3.ap-south-1.amazonaws.com/phones/'+soundchunk+'.mp3'
    await Audio.Sound.createAsync({
      uri: soundlink
    },
    {shouldPlay: true}
    )

  }

  render(){

    return(

      <TouchableOpacity onPress = {()=>{
        this.playSound(this.props.soundchunk)
      }} style = {styles.soundstyle}>

        <Text style = {styles.textstyle}>{this.props.wordchunk}</Text>


      </TouchableOpacity>


    )

  }

}

const styles = StyleSheet.create({

   soundstyle: {

    backgroundColor: 'white',
    margin: 5,
    width: 50,
    height: 50,
    alignSelf: 'center',
    alignItems: 'center',
    borderWidth: 5,
    borderColor: 'black',
    justifyContent: 'center'

  },

  textstyle: {

    textalign: 'center',
    fontSize: 30

  }


}) 