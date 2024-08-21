import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    logo: {
        width: 300,
        height: 300,
        alignSelf: "center",
    },
    container: {
        backgroundColor: "orange",
    },
    trajetoria: {
        fontSize: 20,
        paddingHorizontal: 20,
        textAlign: "justify"    
    },
    im: {
        width: "100%", 
    },
    video: {
        width: '100%', // ou um valor fixo
        height: 300, // ajuste conforme necessário
    }
});

export default styles;
