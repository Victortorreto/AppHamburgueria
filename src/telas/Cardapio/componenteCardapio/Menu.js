import React from "react";
import {View, Image} from "react-native";
import{Avatar, Button, Card} from "react-native-paper";

import Texto from '../../../componentes/Texto';
import styles from '../estilosCardapio';


const LeftContent = props => <Avatar.Icon {...props} icon="folder" />

export default function Menu({ti}) {
    return <>
    <View style={styles.container}>
      {/* <Image style={styles.logo}source ={logo} resizeMode="contain"/>  */}
      <Texto style={styles.titulo}>{ti}</Texto>
      {/* <Image style={styles.im}source ={fome} resizeMode="contain"/>  */}
      
      <Card>
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
    </Card>
    </View> 

    </>

  }

  
   
  
  