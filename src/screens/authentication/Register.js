import { StyleSheet, Text, View , TextInput , Button } from 'react-native'
import React from 'react'
import { firebase as firebaseAuth } from '@react-native-firebase/auth'
import { firebase  } from '@react-native-firebase/firestore'

const Register = () => {
    const [user , setUser] = React.useState({email : "null@gmail.com" , password : "null"});
    const signIn = () => {
      const {email , password} = user;
      firebaseAuth.auth().createUserWithEmailAndPassword(email , password)
      .then((result)=>{
        firebase.firestore().collection('users')
        .doc(firebaseAuth.auth().currentUser.uid).set({email})
        .then((result)=> {
          console.log(result)
        })
        // console.log(result)
    }).catch((error)=>{
        console.log(error)
    })
  }
  return (
    <View>
        <Text>Email</Text>
        <TextInput value={user.email} 
          onChangeText={(email)=> setUser({...user, email})}
        />
        <Text>Password</Text>
        <TextInput value={user.password} 
          onChangeText={(password)=> setUser({...user , password})}
        />     
        <Button title='SignIn' onPress={()=> signIn()}/>
    </View>
  )
}

export default Register

const styles = StyleSheet.create({})