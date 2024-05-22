import React from "react"
import {StyleSheet, TouchableOpacity} from "react-native";
import Texto from './Texto';

export default function Botao({textoBotao, acaoBotao}){
    return  <TouchableOpacity style={styles.botao} onPress={acaoBotao}>
              <Texto style={styles.botaoTexto}>{textoBotao}</Texto>
            </TouchableOpacity>  
}

const styles = StyleSheet.create({
  botao: {
    marginTop: 16,
    backgroundColor: "red",
    paddingVertical: 16,
    borderRadius: 6, 
    width:340,
    alignSelf: 'center',
    borderColor: 'black', 
    borderWidth: 1,
    
  },
  botaoTexto: {
    textAlign: "center",
    color: "black",
    fontSize: 20,
    lineHeight: 26,
    fontWeight: "bold",
  }
});