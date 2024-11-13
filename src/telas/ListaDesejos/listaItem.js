import React from "react";
import { SafeAreaView, StatusBar, TouchableOpacity, Alert } from "react-native";
import { Card } from'react-native-paper';
import Ionicons from "react-native-vector-icons/Ionicons";
import { useNavigation } from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import Texto from '../../componentes/Texto'
import styles from './estilos'

export default function ListaItem ({id, nome, imagem}) {

    // Função para excluir a Lista de desejos
    const navigation = useNavigation();

     //Função para remover o itens da Lista de Desejos
     async function removeProdListaDesejos(id) {
        //Captura a lista de desejos existente para atualizar o novo item
        const listaDesejosSalva = await AsyncStorage.getItem('ListaDesejos');

        //Organiza a lista JSON em string
        const listaDesejos = JSON.parse(listaDesejosSalva);

        //Converte o objeto JSON em string
        const listaDesejosAtualizada = JSON.stringify(listaDesejos.filter((item)=> item.id !==id));
        
        //Guarda a nova lista no AsyncStorage
        await AsyncStorage.setItem('ListaDesejos', listaDesejosAtualizada);
        Alert.alert("Produto removido da Lista de Desejos.");
        console.log("Removeu o item da lista.");

        //Remonta o componente da Lista de Desejos para atualizar em tempo real
        navigation.reset({index: 0, routes: [{name: "Lista de Desejos"}],});
    }

    return <SafeAreaView style={styles.cardContainer}>
            <StatusBar/>
            <Card mode='contained' style={styles.card}>
                <Card.Content>
                    <Card.Cover source={imagem} style={styles.imagem}/>
                    <Texto style={styles.nomeProduto}>{nome}</Texto>
                    <TouchableOpacity onPress={()=> removeProdListaDesejos(id)}>
                        <Ionicons name="trash" size={20} color="white"/>
                    </TouchableOpacity>
                </Card.Content>
            </Card>
    </SafeAreaView>
}