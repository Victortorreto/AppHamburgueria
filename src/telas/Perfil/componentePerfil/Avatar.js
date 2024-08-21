import React from "react";
import {View, Image,Text, Button, Alert, StyleSheet, TextInput} from "react-native";
/*import { Camera } from 'expo-camera/legacy';*/

export default function Avatar() {
    return <View>
    <TextInput value='0'/>
    <Text style={styles.container} >Nome</Text>
    <TextInput placeholder="Digite seu nome"/>
    <Text style={styles.container}>Sobrenome</Text>
    <TextInput placeholder="Digite seu sobrenome"/>
    <Text style={styles.container}>Endereço</Text>
    <TextInput placeholder="Digite seu endereço"/>
    <Text style={styles.container}>Email</Text>
    <TextInput placeholder="Digite seu email"/>
    <Text style={styles.container}>Telefone</Text>
    <TextInput placeholder="Digite seu número"/>
    <Button 
        title='Salvar'
        color='black'
        onPress={() =>Alert.alert('Seus dados foram salvos')}/>

    
        
    </View>
    
  }



  const styles = StyleSheet.create({
    container: {
      color: 'red',
      padding: 10,
    }
  });


