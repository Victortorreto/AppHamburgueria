import React from "react";
import {FlatList, StyleSheet, View, StatusBar, Image} from 'react-native';

import Menu from './componenteCardapio/Menu';
import bk from '../../../assets/bk.png';
import Texto from '../../componentes/Texto';

export default function Index({lanches}) {
    
    return <View style={styles.container}>
              <StatusBar/>
              <Image style={styles.logo}source ={bk} resizeMode="contain"/>
              <Texto style={styles.cardapioText}>Cardápio</Texto>
                  <FlatList   
                data={lanches.lista}
                renderItem={Menu}
                keyExtractor={lanches.lista.nome}
                numColumns={2}
              />
  </View>

}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height:"100%",
    backgroundColor: "orange",
    flex:1,
  },
  logo: {
    width: "100%",
    height: "20%",
  },
  cardapioText: {
    fontSize: 30,
    fontWeight: 'bold',
    margin: 10,
    textAlign: 'center',
    color: 'red',
  }
})
