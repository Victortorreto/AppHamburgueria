import React from "react";
import { View, Image, Text, Button, Alert, StyleSheet, TextInput, TouchableOpacity } from "react-native";
import { Camera, CameraType } from 'expo-camera/legacy';
import { useState } from 'react';

export default function Avatar() {
  const [type, setType] = useState(CameraType.back);
  const [permission, requestPermission] = Camera.useCameraPermissions();

  if (!permission) {
    // Camera permissions are still loading
    return <View />;
  }

  if (!permission.granted) {
    // Camera permissions are not granted yet
    return (
      <View style={styles.container}>
        <Text style={{ textAlign: 'center' }}>We need your permission to show the camera</Text>
        <Button onPress={requestPermission} title="grant permission" />
      </View>
    );
  }

  function toggleCameraType() {
    setType(current => (current === CameraType.back ? CameraType.front : CameraType.back));
  }

  return <View style={styles.container}>
    {/* <TextInput value='0'/> */}
    <View style={styles.fundouser}></View>

    
    <View style={styles.input}>
      <Text >Nome:</Text>
      <TextInput placeholder="Digite seu nome" />
    </View>

    <View style={styles.input}>
      <Text >Sobrenome:</Text>
      <TextInput placeholder="Digite seu sobrenome" />
    </View>

    <View style={styles.input}>
      <Text >Endereço:</Text>
      <TextInput placeholder="Digite seu endereço" />
    </View>

    <View style={styles.input}>
      <Text >E-mail:</Text>
      <TextInput placeholder="Digite seu email" />
    </View>

    <View style={styles.input}>
      <Text >Telefone:</Text>
      <TextInput placeholder="Digite seu número" />
    </View>

    <Button class='botao'
      title='Salvar'
      color='black'
      onPress={() => Alert.alert('Seus dados foram salvos')} />


    <Camera style={styles.camera} type={type}>
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button} onPress={toggleCameraType}>
          <Text style={styles.text}>Flip Camera</Text>
        </TouchableOpacity>
      </View>
    </Camera> 

  </View>

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    alignItems: 'center',
  },
  input: {
    flexDirection: "row",
    justifyContent: 'center',
    alignItems: 'center',
    gap: 20,
    marginBottom: 15,
  },
  fundouser: {
    marginBottom: 70,
    width: 150,
    height: 150,
    backgroundColor: "black",
    borderRadius: 80,
    marginTop: 60,
},
  botao: {

  }

});


