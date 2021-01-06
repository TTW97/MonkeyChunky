import * as React from 'react';
import { Text, View, StyleSheet, TextInput, TouchableOpacity, Image, Alert} from 'react-native';
import { Header } from 'react-native-elements';
import db from './localdb'
import SoundButton from './components/SoundButton'


export default class App extends React.Component {

  constructor() {

    super();
    this.state = {

      text: "",
      displayText: [],
      sound: []
    }

    

  }

  render() {

    return (

      <View style={styles.container}>

        <Header backgroundColor = {"brown"}
                centerComponent = {{text: 'Monkey Chuncky', style: {color: 'white', fontWeight: 'bold'}}} />

        <Image style = {styles.imagestyle} source = {{uri: "https://www.shareicon.net/data/128x128/2017/07/13/888370_business_512x512.png"}} />

        <Text style = {styles.smallstyle}>Enter a word to learn how to pronouce it</Text>

        <TextInput  
          style = {styles.inputbox}
          onChangeText={(inputtext) => {
            this.setState({text: inputtext}
          )}}
          
          value={this.state.text}
        />

        <TouchableOpacity style = {styles.buttonstyle}
          onPress = {() => {

            var word = this.state.text.toLowerCase().trim();

            db[word] ? (

              this.setState({displayText: db[word].chunks}),
              this.setState({sound: db[word].phones})

            ) : 
            Alert.alert("This word does not exist in our database");
          
          }}
        >

          <Text style = {styles.textstyle}>Go</Text>

        </TouchableOpacity>

        <View >

        {this.state.displayText.map((item,index) => {

          return (

            <SoundButton wordchunk = {this.state.displayText[index]} 
            soundchunk = {this.state.sound[index]} />

          )

        })}

        </View>
      
      </View>

    );
  }
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: '#b8b8b7',
  },

  inputbox: {
    
    marginTop: 50,
    borderColor: 'black',
    backgroundColor: 'white',
    height: 50,
    marginLeft: 10,
    marginRight: 10,
    outline: 'solid',
    textAlign: 'center',
    borderWidth: 2

  },

  buttonstyle: {

    width: '40%',
    height: 50,
    alignSelf: 'center',
    margin: 10,
    padding: 10,
    backgroundColor: 'brown',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 100

  },

  textstyle: {

    textalign: 'center',
    fontSize: 30

  },

  imagestyle: {

    width: 150,
    height: 150,
    marginLeft: 100,

  },

  smallstyle: {

    backgroundColor: 'white',
    margin: 5,
    width: 300,
    height: 60,
    alignSelf: 'center',
    alignItems: 'center',
    borderWidth: 2,
    borderColor: 'black',
    justifyContent: 'center',
    textAlign: 'center',
    fontSize: 20,
    outline: 'dotted',
    
  }

});
