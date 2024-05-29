import React from "react";
import {FlatList, StyleSheet, View, StatusBar} from 'react-native';

import Menu from './componenteCardapio/Menu';

export default function Index({titulo, lanches}) {
    
    return <View style={styles.container}>
              <StatusBar/>
              
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
})
