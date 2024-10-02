import React from 'react';
import { View } from 'react-native';
import { Card } from 'react-native-paper';
import Ionicons from 'react-native-vector-icons/Ionicons';

import Texto from '../../componentes/Texto';
import styles from '../ListaDesejos/estilos';

export default function ListaItem({id, nome, imagem}){
    return <View styles={styles.cardContainer}>
        <Card mode='contained' style={styles.card}>
            <Card.Content>
            <Card.Cover source={imagem} style={styles.imagem}></Card.Cover>
            <Texto style={styles.nomeProduto}>{nome}</Texto>
            </Card.Content>
        </Card>
    </View>
}