import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import {NavigationContainer , useNavigationContainerRef} from '@react-navigation/native'
import { useReduxDevToolsExtension } from '@react-navigation/devtools'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import CreateTodoScreen from './src/screens/CreateTodoScreen'
import Todo from './src/screens/Todo'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import { Provider } from 'react-redux'
import { store } from './src/redux/store'
import auth from '@react-native-firebase/auth'
import Register from './src/screens/authentication/Register'

const App = () => {
  // const navigationRef = useNavigationContainerRef();
  // useReduxDevToolsExtension(navigationRef)
  const Tab = createBottomTabNavigator();
  // console.log(store.getState())
  const [initializing , setInitializing] = React.useState(true);
  const [user , setUser] = React.useState();
  function onAuthStateChanged(user) {
    setUser(user);
    if (initializing) setInitializing(false);
  }
  React.useEffect(() => {
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber; // unsubscribe on unmount
  }, []);
  if (initializing) return null;

  if (!user) {
    return (
      <Register/>
    );
  }

  return (
    <Provider store={store}>
    <NavigationContainer> 
      <Tab.Navigator screenOptions={{
        tabBarStyle : {
          backgroundColor : '#fff9ea',
          marginHorizontal : 10,
          borderRadius : 15,
          height : 70,
          elevation : 10,
          top : -15,
          padding : 5
        },
        tabBarActiveTintColor : 'green',
        tabBarInactiveTintColor : 'red',
        tabBarAllowFontScaling : true ,
      }}>
        <Tab.Screen
        name='CreateTodo'
        component={CreateTodoScreen}
        // options={{
        //   tabBarIcon : ({focused , color , size})=> {
        //     focused ? <MaterialIcons style={{color : 'green'}}/> 
        //     : <MaterialIcons style={{color : 'red'}}/>
        //   }
        // }}
        />
        <Tab.Screen name='Todo' component={Todo}/>
      </Tab.Navigator>
    </NavigationContainer>
    </Provider>
  )
}

export default App

const styles = StyleSheet.create({})