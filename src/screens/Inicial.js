import * as React from 'react';
import {
  View,
  StatusBar,
  StyleSheet,
  SafeAreaView
} from 'react-native';

import { connect } from 'react-redux';

import Icon from 'react-native-vector-icons/AntDesign';
Icon.loadFont();

class Inicial extends React.Component {
  render() {
    return (
      <SafeAreaView style={{ flex: 1 }}>
        <StatusBar backgroundColor="#1874CD" barStyle="light-content" />
        <View style={{ flex: 1 }}>

        </View>
      </SafeAreaView>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1C86EE'
  }
})

const mapStateProps = state => ({

});

export default connect(mapStateProps, {

})(Inicial);
