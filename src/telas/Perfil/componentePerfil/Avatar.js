import React from "react";
import {View, Image,Text, Button, Alert} from "react-native";
import { TextInput } from "react-native";

export default function Avatar() {
    return <View>
    <TextInput value='0'/>
    <Text>Nome</Text>
    <TextInput placeholder="Digite seu nome"/>
    <Text>Sobrenome</Text>
    <TextInput placeholder="Digite seu sobrenome"/>
    <Text>Endereço</Text>
    <TextInput placeholder="Digite seu endereço"/>
    <Text>Email</Text>
    <TextInput placeholder="Digite seu email"/>
    <Text>Telefone</Text>
    <TextInput placeholder="Digite seu número"/>
    <Button 
        title='Salvar'
        color='black'
        onPress={() =>Alert.alert('Seus dados foram salvos')}/>
    </View>
  }