import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    listaContainer: {
        flex: 1,
    },
    cardContainer: {
        width: '50%',
    },
    imagem: {
       width: '30%',
       height: '60%',
       alignSelf: 'center', 
    },
    card: {
        width: '90%',
        alignSelf: 'center',
        backgroundColor: 'red',
    },
    nomeProduto: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 16,
        textAlign: 'center',
    },
    titulo: {
        fontSize: 26,
        color: 'red',
        fontWeight: 'bold',
        textAlign: 'center',
        width: '100%',
    },
    textoLista: {
        fontSize: 16,
        paddingBottom: 10,
    }
})

export default styles;