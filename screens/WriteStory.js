import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View,TextInput,TouchableOpacity,Alert } from 'react-native';
//import { TouchableOpacity } from 'react-native-gesture-handler';


export  default class WriteStory extends React.Component{
render(){
    return(
   <View>
   
    <TextInput 
              style={{width:800,alignSelf:'center',height:40,borderRadius:140,textAlign:'center',marginTop:30,border:'solid'}}
              placeholder="Title"
              
              />

<TextInput 
              style={{width:800,alignSelf:'center',height:40,borderRadius:140,textAlign:'center',marginTop:10,border:'solid'}}
              placeholder="Author"
              
              />

<TextInput 
              style={{width:800,marginLeft:370,height:300,/*borderRadius:50,textAlign:'center',*/marginTop:10,border:'solid'}}
              placeholder="Story"
              multiline={true}
              
              />
              <TouchableOpacity>
                  <Text  onPress={alert("Congrats ! its Published ")} style={{marginTop:10,alignSelf:'center',width:200,backgroundColor:'black',color:'white',fontSize:18,borderRadius:20}}>              Publish</Text>
              </TouchableOpacity>
   </View>

    )
}

}