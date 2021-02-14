import React from 'react'
import {Text,View,StyleSheet,Alert,TextInput,TouchableOpacity,Image} from 'react-native'
import db from "../config";
import firebase from "firebase";

export default class WelcomeScreen extends React.Component{
    constructor(){
        super();
        this.state={
            emailId:"",
            password:""
        }
    }
    userSignUp=(emailId,password)=>{
        firebase.auth().createUserWithEmailAndPassword(emailId,password).then(()=>{
            return Alert.alert("User Added Successfully");
        }).catch(error=>{
            var errormessage=error.message;
            Alert.alert(errormessage);
        })
    }
    userLogIn=(emailId,password)=>{
        firebase.auth().signInWithEmailAndPassword(emailId,password).then(()=>{
            return Alert.alert("User Signed In Successfully")
        }).catch(error=>{
            var errormessage=error.message;
            Alert.alert(errormessage);
        })
    }
    render(){
        return(
            <View style={styles.container}>
            <View>
            <Image source={require("../assets/1732146-200.png")} style={styles.image}/>
            <Text style={styles.header}>Barter System App</Text>
            </View>
            <View>
                <TextInput 
                style={styles.emailInput}
                keyboardType="email-address"
                placeholder="abc@gmail.com"
                onChangeText={text=>{
                    this.setState({
                        emailId:text
                    })
                }}/>
                <TextInput 
                style={styles.passwordInput}
                secureTextEntry={true}
                placeholder="enter password"
                onChangeText={text=>{
                    this.setState({
                        password:text
                    })
                }}/>
                <TouchableOpacity style={styles.loginButton} onPress={()=>{
                    this.userLogIn(this.state.emailId,this.state.password)
                }}><Text style={styles.loginButtonText}>Log In</Text></TouchableOpacity>
                <TouchableOpacity style={styles.SignUpButton} onPress={()=>{
                    this.userSignUp(this.state.emailId,this.state.password)
                }}><Text style={styles.signUpButtonText}>Sign Up</Text></TouchableOpacity>
            </View>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#ff9933',
      alignItems: 'center',
      justifyContent: 'center',
    },
    header:{
       flex:0.1,
        fontWeight:"bold",
        fontSize:"25px",
        paddingBottom:30
    },
    emailInput:{
      
        padding:10,  
        borderBottomWidth:"1px",
        fontFamily:"Comic Sans MS",
        backgroundColor:"#d6d6c2",
        borderRadius:"3px",
        marginBottom:19,
        width:245,
        
    },
    passwordInput:{
        padding:10,
        borderBottomWidth:"1px",
        fontFamily:"Comic Sans MS",
        marginBottom:19,
        backgroundColor:"#d6d6c2",
        borderRadius:"3px"
    },
    loginButton:{
      marginTop:"25px",
      padding:12,
      backgroundColor:"white",
      borderRadius:"32px",
      height:"30px"
    },
    loginButtonText:{
      textAlign:"center",
      fontWeight:"bold"
    },
    SignUpButton:{
      marginTop:8,
      padding:12,
      backgroundColor:"white",
      borderRadius:"32px",
      height:"30px"
    },
    signUpButtonText:{
      textAlign:"center",
      fontWeight:"bold"
    },
    image:{
      width:110,
      height:110,
      marginLeft:50
    }
  });