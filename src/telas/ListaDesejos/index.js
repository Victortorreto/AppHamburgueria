import React, {useEffect, useState} from "react";
import {View, StatusBar, FlatList, Alert } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useNavigation } from "@react-navigation/native";

import Texto from '../../componentes/Texto';
import Botao from "../../componentes/Botao";

import ListaItem from "./listaItem";
import styles from "./estilos";

export default function Index (){

    const [listData, setListData]=useState([]);
    const navigation = useNavigation();

    //Capturar os dados do AsyncStorage
    const loadListData = async () => {
        const storedObjectJSON = await AsyncStorage.getItem('ListaDesejos');
        if(storedObjectJSON !== null) {
            const storedObject = JSON.parse(storedObjectJSON);
            setListData(storedObject);
        }
    }

    //Busca a lista de desejos quando montar o componente
    useEffect(() => {
        loadListData();
    }, []);

    
    //Função para limpar a Lista de Desejos
    const clearAsyncStorage = async () => {
    try{
        await AsyncStorage.clear();
        console.log('AysncStorage apagado');
        Alert.alert("Lista de Desejos excluída com sucesso!");
        // Remonta o componente da Lista de Desejos Atualizada
        navigation.reset({index: 0, routes: [{name: 'Lista de Desejos'}],});
    } catch (error){
        console.error('Erro ao limpar o AsyncStorage', error)
    }};

    

    return <View style={styles.listaContainer}>
        <StatusBar/>
        <Texto style={styles.titulo}> Lista de Desejos</Texto>
        <Texto style={styles.textoLista}> Estes são as comidas adicionadas na sua Lista de Desejos.</Texto>

        <FlatList 
            data={listData}
            renderItem={({item}) =>  <ListaItem {...item}/>}
            keyExtractor={({id}) => String(id) }
            numColumns={2} 
        />
        <Botao textoBotao={'Deletar Lista de Desejos'} acaoBotao={()=>clearAsyncStorage()}/>
    </View>
}