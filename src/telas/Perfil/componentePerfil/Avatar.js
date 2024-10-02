import React from "react";
import { View, Image, Text, Button, Alert, StyleSheet, TextInput, TouchableOpacity } from "react-native";
import { Camera, CameraType } from 'expo-camera/legacy';
import { useState, useRef } from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { Card } from "react-native-paper";


export default function Avatar() {
  const [type, setType] = useState(CameraType.back);
  const [permission, requestPermission] = Camera.useCameraPermissions();

  //Capturar imagem
  const [capturedImage, setCapturedImage] = useState(null);
  const cameraRef = useRef(null);

  if (!permission) {
    // Camera permissions are still loading
    return <View style={styles.container}><Text>Loading...</Text></View>;
  }

  if (!permission.granted) {
    // Camera permissions are not granted yet
    return (
      <View style={styles.container}>
        <Text style={{ textAlign: 'center' }}> Precisamos da sua permissão para acessar a câmera.</Text>
        <Button onPress={requestPermission} title="Conceder permissão" />
      </View>
    );
  }

  function toggleCameraType() {
    setType(current => (current === CameraType.back ? CameraType.front : CameraType.back));
  }
  async function tirarFoto() {
    //Verifica se a foto foi tirada
    if(cameraRef){
      const photo = await cameraRef.current.takePictureAsync();
      console.log('A foto foi tirada!', photo.uri);
      setCapturedImage(photo.uri);
    }
  }

  return <View style={styles.container}>
    {/* <TextInput value='0'/> */}
    <View style={styles.fundouser}></View>

    <View style={styles.input}>
      <Text >Nome:</Text>
      <TextInput style={styles.textInput} placeholder="Digite seu nome" />
    </View>

    <View style={styles.input}>
      <Text >Sobrenome:</Text>
      <TextInput style={styles.textInput} placeholder="Digite seu sobrenome" />
    </View>

    <View style={styles.input}>
      <Text >Endereço:</Text>
      <TextInput style={styles.textInput} placeholder="Digite seu endereço" />
    </View>

    <View style={styles.input}>
      <Text >E-mail:</Text>
      <TextInput style={styles.textInput} placeholder="Digite seu email" />
    </View>
 
    <View style={styles.input}>
      <Text >Telefone:</Text>
      <TextInput keyboardType="numeric" style={styles.textInput} placeholder="Digite seu número" />
    </View>

    <Button class='botao'
      title='Salvar'
      color='black'
      onPress={() => Alert.alert('Seus dados foram salvos')} 
      />

    <Camera style={styles.camera} type={type} ref={cameraRef}>
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.cameraVirarBotao} onPress={toggleCameraType}>
          <Ionicons name="reload" size={30} color="#FFF"/>
        </TouchableOpacity>
        <TouchableOpacity style={styles.cameraBotao} onPress={tirarFoto}>
          <Ionicons name="camera" size={30} color="#FFF"/>
        </TouchableOpacity>
      </View>
    </Camera> 

    <Card mode='elevated' style={styles.formContainer}>
      <Card.Content>
        {//Verifica se a foto foi tirada
        capturedImage && 
        <View style={styles.fotoTiradaContainer}>
          <Image source={{uri: capturedImage}} style={{flex:1}}/>
           
        </View>

        }
      </Card.Content>
    </Card>
  </View>
 
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    alignItems: 'center',
    padding: 20,
  },
  input: {
    flexDirection: "row",
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 10,
    width: '100%',
  },
  textInput: {
    flex: 1,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 10,
    marginLeft: 10,
  },
  fundouser: {
    marginBottom: 70,
    width: 150,
    height: 150,
    backgroundColor: "black",
    borderRadius: 80,
    marginTop: 60,
  },
  permissionText: {
    textAlign: 'center',
    marginBottom: 16,
    color: 'black',
  },
  text: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'black',
  },

  //Estilização da camera
  camera: {
    //flex: 1,
    width: '100%',
    //height: '50%',
    //borderRadius: 10,
    //overflow: 'hidden',
    alignSelf: 'center',
  },
  buttonContainer: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: 'transparent',
  },
  button: {
    flex: 1,
    alignSelf: 'flex-end',
    alignItems: 'center',
  },
  cameraVirarBotao: {
    position: 'absolute',
    bottom: 10,
    left: 20,
  },
  cameraBotao: {
    position: 'absolute',
    bottom: 10,
    right: 20,
  },
  fotoTiradaContainer: {
    width: '50%',
    height: '25%',
    alignSelf: 'center',
    borderRadius: '10',
  }
});