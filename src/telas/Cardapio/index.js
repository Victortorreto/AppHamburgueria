import React from "react";
import {FlatList} from 'react-native';

import Menu from './componenteCardapio/Menu';

export default function Index({titulo}) {
    
    return <FlatList   
    ListHeaderComponent={() =>{
      return<>
          <Menu {...titulo}/>
          
      </>
    }}
  />

}
