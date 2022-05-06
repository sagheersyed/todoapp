import { StyleSheet, Text, View , FlatList } from 'react-native'
import React from 'react'
import { useSelector } from 'react-redux'
import { store } from '../redux/store';

const Todo = () => {
  const state = useSelector(state => state.todo);
  React.useEffect(()=>{
    store.subscribe(()=> {
      console.log('store update')
      console.log(store.getState())
    })
    console.log(state);
  })
  return (
    <View style={{flex : 1 , marginTop : 30 , backgroundColor : '#ffe2' , alignItems : 'center' , justifyContent : 'space-between'}}>
      <FlatList style={{flex : 1 ,  marginTop : 30 }}
        showsVerticalScrollIndicator={false}
        data={state.todo}
        renderItem={({item})=> (
       <View style={{backgroundColor : 'red' ,
        height : 140 ,
         margin : 10,
         padding : 10,
         alignItems : 'center',
         justifyContent : 'center',
         borderRadius : 15,
         width : 320
      }}>
        <Text>{item.title}</Text>
        <Text>{item.description}</Text>
       </View>
      )}
      />
    </View>
  )
};

export default Todo;

const styles = StyleSheet.create({})