import {useFonts, SpaceGrotesk_300Light, SpaceGrotesk_700Bold} from "@expo-google-fonts/space-grotesk";
import { View} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Produto from './src/telas/Produto';
import mock from './src/mocks/produto';

import Sobre from './src/telas/Sobre';
import mock_sobre from './src/mocks/sobre';

import Cardapio from './src/telas/Cardapio';
import mock_cardapio from './src/mocks/cardapio';

function MenuPromocao(){
  return <Produto {...mock}/>
}

function MenuSobre(){
  return <Sobre {...mock_sobre}/>
}

function MenuCardapio(){
  return <Cardapio {...mock_cardapio}/>
}

const Tab = createBottomTabNavigator();

function TabsMenu(){
  return <Tab.Navigator
            screenOptions={({route}) => ({
              tabBarIcon: ({focused, color, size}) => {
                let iconName

                if(route.name === "Sobre nós"){
                  iconName = focused
                  ? 'basket'
                  : 'basket-outline';
                } else if (route.name === "Promoções"){
                  iconName = focused
                  ? 'restaurant'
                  : 'restaurant-outline';
                } else if (route.name === "Menu"){
                  iconName = focused
                  ? 'list'
                  : 'list-outline'
                } else if (route.name === "Lista de Desejos"){
                  iconName = focused
                  ? 'earth'
                  : 'earth-outline'
                }
                return <Ionicons name={iconName} size={size} color={color}/>
              },
              tabBarActiveTintColor: 'red',
              tabBarInactiveTintColor: 'gray',
              tabBarHideOnKeyboard: true,
              headerShown: false,
            })}>
              <Tab.Screen name="Sobre nós" component={MenuSobre}/>
              <Tab.Screen name="Promoções" component={MenuPromocao}/>
              <Tab.Screen name="Menu" component={MenuCardapio}/>
              <Tab.Screen name="Lista de Desejos" component={MenuPromocao}/>
            </Tab.Navigator>
            
}

export default function App() {

  //Carrega a fonte para dentro do projeto
 const [fonteCarregada ] = useFonts({"SpaceX" : SpaceGrotesk_300Light,
                                      "SpaceBold" : SpaceGrotesk_700Bold})

  //Verifica se a fonte já foi carregada
  if(!fonteCarregada){
    return <View></View>
  }

  return <NavigationContainer>
            <TabsMenu/>
         </NavigationContainer>
}
