import React from "react";
import { View, Image, StyleSheet} from "react-native";

import Texto from "../../../componentes/Texto";

 export default function Item({item:{nome, imagem}}){
    return <View key={nome} style={styles.item}>
                <Image source={imagem} style={styles.imagem}/>
                <Texto style={styles.nome}>{nome}</Texto>
    </View>
 }

 const styles = StyleSheet.create({
     item: {
        backgroundColor: '#FF8C00', 
        flexDirection: "row",
         borderBottomWidth: 1,
         borderBottomColor: "#ECECEC",
         paddingVertical: 16,
         alignItems: "center",
     },
     //CSS do texto da barra de rolagem
     nome: {
         fontSize: 20,
         lineHeight: 26,
         marginLeft: 11,
         color: "#464646",
     },
     imagem: {
        width: 80,
        height: 80,
     }
 })