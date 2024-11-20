import React, { useState } from "react";
import { TextInput, View, StatusBar, FlatList, Image, Text, StyleSheet } from 'react-native';
import Avatar from './componentePerfil/Avatar';

export default function Index() {
  // Estado para armazenar as fotos salvas
  const [savedPhotos, setSavedPhotos] = useState([]);

  // Função de callback para atualizar as fotos salvas
  const handleSavePhoto = (photoUri) => {
    setSavedPhotos((prevPhotos) => [
      ...prevPhotos,
      { id: Date.now().toString(), uri: photoUri },
    ]);
  };

  // Função para renderizar os itens da FlatList
  const renderItem = ({ item }) => (
    <View style={styles.photoContainer}>
      <Image source={{ uri: item.uri }} style={styles.imagePreview} />
    </View>
  );

  return (
    <View style={styles.container}>
      <StatusBar />
      
      {/* Passando o callback handleSavePhoto como prop para Avatar */}
      <Avatar onSavePhoto={handleSavePhoto} />

      {/* FlatList para exibir as fotos salvas */}
      <FlatList
        data={savedPhotos}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        horizontal={true} // Exibe as fotos de forma horizontal
        contentContainerStyle={styles.flatListContainer}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    width: '100%',
    paddingTop: 40,
  },
  photoContainer: {
    marginRight: 15,
  },
  imagePreview: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginTop: 20,
  },
  flatListContainer: {
    marginTop: 20,
    paddingHorizontal: 20,
  },
});
