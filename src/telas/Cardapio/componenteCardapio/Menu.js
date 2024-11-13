import React from "react";
import { View, Image, StyleSheet, Alert, Touchable } from "react-native";
import { Avatar, Button, Card } from "react-native-paper";

import Texto from '../../../componentes/Texto';
import { TouchableOpacity } from "react-native";
import Ionicons from 'react-native-vector-icons/Ionicons';
import AsyncStorage from "@react-native-async-storage/async-storage"; 

// const LeftContent = props => <Avatar.Icon {...props} icon="folder" />

export default function Menu({ item: { id, nome, preco, ingredientes, imagem } }) {

  //Função para guardar a Lista de Desejos 
  async function addListaDesejos(id, nome, imagem) {
      
      const addProduto = [{
        id: id,
        nome: nome,
        imagem: imagem,
      }];
    
      //Verifica se o AsyscStorage está populado
      const listaDesejosSalva = await AsyncStorage.getItem('ListaDesejos');
      if(listaDesejosSalva == null){
        //Converte os dados para string 
        const listaDesejosAtualizada = JSON.stringify(addProduto);

        //Insere o produto na Lista de Desejos
        await AsyncStorage.setItem('ListaDesejos', listaDesejosAtualizada);
        Alert.alert("O produto foi adicionado com sucesso na sua Lista de Desejos!");
        console.log("Produto inserido");
        console.log(listaDesejosAtualizada);
      } else {
        //A Lista de Desejos já tem conteúdo
        const listaDesejos = JSON.parse(listaDesejosSalva);

        //Adiciona um novo produto na Lista de Desejos 
        listaDesejos.push({id: id, nome: nome, imagem: imagem});

        const listaDesejosAtualizada = JSON.stringify(listaDesejos);

        await AsyncStorage.setItem('ListaDesejos', listaDesejosAtualizada);
        Alert.alert("O produto foi adicionado com sucesso na sua Lista de Desejos!");
        console.log("Mais um produto na lista");
        console.log(listaDesejosAtualizada);
      }

      
  }
  return  <View style={styles.container}>
    
      <Card mode='elevated' style={styles.card}>
      <Card.Cover style={styles.im} source={imagem} />
        <Card.Content >
          <Texto style={styles.name}>{nome}</Texto>
          <Texto style={styles.pre}>{preco}</Texto>
          <Texto style={styles.ingre}>{ingredientes}</Texto>
          {/* <Image source={imagem} style={styles.imagem}/> */}
        </Card.Content>
        <Card.Actions>
        <Button style={styles.botao} onPress={() => { Alert.alert("Adicionado na Lista de Desejos"); }}>Ok</Button>
        <TouchableOpacity onPress={()=> addListaDesejos(id, nome, imagem)}>
          <Ionicons name="heart" size={30} color="red"/>
        </TouchableOpacity>
      </Card.Actions>
        {/* <Texto style={styles.titulo}>{ti}</Texto> */}

        {/* <Card>
      <Card.Title title="Card Title" subtitle="Card Subtitle" left={LeftContent} />
      <Card.Content>
        <Texto variant="titleLarge">Card title</Texto>
        <Texto variant="bodyMedium">Card content</Texto>
      </Card.Content>
      <Card.Cover source={{ uri: 'https://th.bing.com/th/id/R.df851defb9228e5fab1988b56b831d15?rik=9Ixaa6xDb4L%2few&riu=http%3a%2f%2fbestanimations.com%2fFood%2fFastFood%2fhamburger-animated-gif-6.gif&ehk=a6KW9qNUfI85bGAyYMO43d6vwz8jIu101CupinozXLs%3d&risl=&pid=ImgRaw&r=0://picsum.photos/700' }} />
      <Card.Actions>
        <Button>Cancel</Button>
        <Button>Ok</Button>
      </Card.Actions>
    </Card>*/}
      </Card>
    </View>
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height:"100%",
    backgroundColor: "orange",
    flex:1,
  },
  titulo: {
    fontSize: 20,
  },
    im: {
       widthfull: 100,
       justifyContent: 'center',
       width: "100%",
      
   },
  card: {
    width: "100%",
    flexDirection: 'row',
    paddingTop: 15,
    margin: 5,
    height: 460,
    borderRadius: 10,
    elevation: 3,
  },
  name:{
    fontSize: 20,
    fontWeight: 'bold',
  },
  pre:{
    fontSize: 15,
  },
  ingre:{
    fontSize: 15,
  },
  botao:{
    
  }
});




