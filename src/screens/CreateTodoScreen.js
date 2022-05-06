import { StyleSheet, Text, View , Button, TextInput} from 'react-native'
import React from 'react'
import { useDispatch , useSelector } from 'react-redux'
import { addTodo } from '../redux/action/action'
// import { create } from 'react-test-renderer'

const CreateTodoScreen = ({navigation}) => {
  console.log("######## use selector state ########")
  const state = useSelector(state => state.todo)
  console.log(state)
  console.log("######## use selector state ########")

  const dispatch = useDispatch();
  const [createTodo , setTodo] = React.useState({
    title : 'sagheer' ,
    description : 'description'
  });
  const todo = ()=> {
    dispatch(addTodo({ title : createTodo.title , description : createTodo.description } ))
  }
  // console.log(state)
  return (
    <View style={{flex : 1}}>
      <Text>CreateTodoScreen</Text>
      <View style={{justifyContent : 'center' , alignItems : 'center' , flex : 1}}>
        <Text style={styles.titles}>Title</Text>
        <TextInput style={styles.input} value={createTodo.title} 
          onChangeText={(title)=> setTodo({...createTodo , title}) }/>
        <Text style={styles.titles}>Description</Text>
        <TextInput style={styles.input} value={createTodo.description}
          onChangeText={(description)=> setTodo({...createTodo, description})}/>
      </View>
      <Button title="todo" onPress={()=> navigation.jumpTo('Todo')}/>
      <Button title='Add Todo' onPress={()=> todo() } color="blue" />
    </View>
  )
}

export default CreateTodoScreen

const styles = StyleSheet.create({
  input : {
    backgroundColor : 'green',
    height : 50,
    width : 250,
    borderRadius : 20,
    paddingLeft : 20,
    marginBottom : 10,
  },
  titles : {
    fontSize : 20,
    fontWeight : 'bold',
    textAlign : 'center',
    marginBottom : 10
  } 
})