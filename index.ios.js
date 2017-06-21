// /**
//  * Sample React Native App
//  * https://github.com/facebook/react-native
//  * @flow
//  */

'user strict';

var React = require('react');
var ReactNative = require('react-native');

var styles = ReactNative.StyleSheet.create({

  text: {
    color: 'black',
    backgroundColor: 'white',
    fontSize: 30,
    margin: 80
  },
  container: {
    flex: 1
  }

});


class HelloWorld extends React.Component {

  render() {
    return <ReactNative.Text style={styles.text}>Hello World (Again)</ReactNative.Text>;

  }

}

class PropertyFinderApp extends React.Component {

  render() {
    return (
      <ReactNative.NavigatorIOS
      style={styles.container}
      initialRoute={{
        title: 'Property Finder',
        component: HelloWorld,
      }}/>
    );
  }

}
// class PropertyFinderApp extends React.Component {
//   render() {
//     return (
//       <ReactNative.NavigatorIOS
//         style={styles.container}
//         initialRoute={{
//           title: 'Property Finder',
//           component: HelloWorld,
//         }}/>
//     );
//   }
// }

ReactNative.AppRegistry.registerComponent('PropertyFinder', function() { return PropertyFinderApp });


// class PropertyFinderApp extends React.Component {
//   render() {
//     return React.createElement(ReactNative.Text, {style: styles.text}, "Hello World!");
//   }
// }

// var styles = ReactNative.StyleSheet.create({
//   text: {
//     color: 'black',
//     backgroundColor: 'white',
//     fontSize: 30,
//     margin: 80
//   }
// });






















// import React, { Component } from 'react';
// import {
//   AppRegistry,
//   StyleSheet,
//   Text,
//   View
// } from 'react-native';
//
// export default class PropertyFinder extends Component {
//   render() {
//     return (
//       <View style={styles.container}>
//         <Text style={styles.welcome}>
//           Welcome to React Native!
//         </Text>
//         <Text style={styles.instructions}>
//           To get started, edit index.ios.js
//         </Text>
//         <Text style={styles.instructions}>
//           Press Cmd+R to reload,{'\n'}
//           Cmd+D or shake for dev menu
//         </Text>
//       </View>
//     );
//   }
// }
//
// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: '#F5FCFF',
//   },
//   welcome: {
//     fontSize: 20,
//     textAlign: 'center',
//     margin: 10,
//   },
//   instructions: {
//     textAlign: 'center',
//     color: '#333333',
//     marginBottom: 5,
//   },
// });
//
// AppRegistry.registerComponent('PropertyFinder', () => PropertyFinder);
