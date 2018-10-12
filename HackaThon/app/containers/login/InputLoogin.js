import React, { Component } from 'react';
import { 
  View , Text , StyleSheet, TextInput,TouchableOpacity , Alert
} from 'react-native';
import {Colors} from '../../themes';

export default class InputLoogin extends Component {
    constructor(props){
        super(props);
        this.state={
          email:'',
          password:''
        }
      } 
   

  render() {
    return (
      <View style={{ padding:20}} >

          <TextInput style={ sty.inputText }
             placeholder="User Name"  
             underlineColorAndroid="transparent"    
             onSubmitEditing={()=> this.pass.focus()}
             onChangeText={(text)=> this.setState({ email : text}) }
          >                  
           </TextInput>
           <TextInput style={ sty.inputText }
             placeholder="Password"
             underlineColorAndroid="transparent" 
             secureTextEntry
             onChangeText={(text)=> this.setState({ password : text}) }
             ref={(input)=>this.pass = input }
          >                  
           </TextInput>
          <TouchableOpacity style={{ paddingVertical:10,  backgroundColor:Colors.green , marginVertical:10  , borderRadius:20}}       
              onPress={()=> this.props.onClickDangNhap()}
         >
            <Text style={{ textAlign:'center' }} > LOGIN </Text>
          </TouchableOpacity>
          <TouchableOpacity style={{  paddingVertical:10,  backgroundColor:Colors.orange  , borderRadius:20  }}  
         onPress={()=> { alert("Register") }}
          >   
            <Text style={{ textAlign:'center' }}           
            > REGISTER </Text>
          </TouchableOpacity>
 
    </View>
    )
  }
}

const sty = StyleSheet.create({
   inputText:{
    height:40 , marginBottom: 15 ,backgroundColor:Colors.gray, borderRadius:20,paddingHorizontal: 15,
   }
})
