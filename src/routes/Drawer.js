import * as React from 'react';
import 'react-native-gesture-handler';
import {
  View,
  Text,
  StyleSheet,
} from 'react-native';

import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';

const Drawer = createDrawerNavigator();

import Inicial from '../screens/Inicial';

export default props => (
  <NavigationContainer>
    <Drawer.Navigator>
      <Drawer.Screen
        name="Inicial"
        component={Inicial}
        options={styles.header}
      />

    </Drawer.Navigator>
  </NavigationContainer >
)

const styles = StyleSheet.create({
  header: {
    headerTitleAlign: 'center',
    headerStyle: {
      backgroundColor: '#1C86EE'
    },
    headerTintColor: '#FFF',
    headerTitle: () => (
      <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
        <Text style={styles.textTitle}>Aplicativo básico</Text>
      </View>
    )
  },
  textTitle: {
    paddingLeft: 4,
    color: '#E8E8E8',
    fontSize: 16,
    fontWeight: '400',
    textAlign: 'center'
  }
})