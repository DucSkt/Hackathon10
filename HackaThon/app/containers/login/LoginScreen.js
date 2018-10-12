import React, { Component } from 'react'
import { 
      View , Text ,KeyboardAvoidingView , StyleSheet,
    TouchableWithoutFeedback,Keyboard,Image
} from 'react-native';
import {Colors} from '../../themes';
import InputLogin from './InputLoogin';

export default class LoginScreen extends Component {
  
  DangNhap(){
     alert("Sucess");
  }

  render() {
    return (
      <TouchableWithoutFeedback style={ sty.container }  onPress={Keyboard.dismiss} >
        <KeyboardAvoidingView behavior="padding" style={ sty.container } >
         
          <View style={ sty.logoContainer } >
             <Image style={{width:200,height:152 , marginTop:15}}  source={require('../../images/unesco.jpg')} />
          </View>         
                <InputLogin  onClickDangNhap={this.DangNhap} />
       
        </KeyboardAvoidingView>
         </TouchableWithoutFeedback>
    )
  }
}
const sty = StyleSheet.create({
    container:{
       flex: 1,
       backgroundColor: Colors.white
    },
    logoContainer:{
       alignItems: 'center',
       justifyContent: 'center',
       flexGrow: 1,
    },
    inputform:{
      color:'#FFF',
      marginTop: 10,
      width:160,
      textAlign : 'center',
      opacity:0.9
    }
   
})
