/**
 * Buzz Password Manager
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import type { PropsWithChildren } from 'react';
import {

  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import customTheme from './buzzTheme';
import { FAB, Provider as PaperProvider, Appbar, List, Portal, Button, Modal, Text, TextInput, Searchbar } from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import PassCard from './components/PassCard';


function App(): JSX.Element {
  const [visible, setVisible] = React.useState(false);

  const showModal = () => setVisible(true);
  const hideModal = () => setVisible(false);

  return (
    <PaperProvider theme={customTheme}>
      <SafeAreaView style={styles.container}>
        <Appbar style={styles.appBar}>

          <Appbar.Content title="Buzz Password Manager" />
          {/* TODO: BLE sync feature coming in next release  */}
          {/* <Icon name="bluetooth" size={24} style={styles.appBarIcon} /> */}

        </Appbar>
        <Searchbar style={styles.searchBar} placeholder='Search for credentials' value='' />
        <ScrollView style={styles.passContainer}>
      
          <PassCard title="https://www.google.com" password="*****" />
          <PassCard title="https://www.facebook.com" password="*****" />
          <PassCard title="https://www.twitter.com" password="*****" />
          <PassCard title="https://www.instagram.com" password="*****" />
          <PassCard title="https://www.linkedin.com" password="*****" />
          <PassCard title="https://www.github.com" password="*****" />
          <PassCard title="https://www.youtube.com" password="*****" />
          <PassCard title="https://www.netflix.com" password="*****" />
          <PassCard title="https://www.spotify.com" password="*****" />
        </ScrollView>
        <FAB
          icon="plus"
          style={styles.fab}
          onPress={() => showModal()}
        />
      </SafeAreaView>

      <Portal>
        <Modal visible={visible} onDismiss={hideModal} contentContainerStyle={styles.containerStyle}>
          <TextInput value='' placeholder='Enter URL' label="URL" />
          <TextInput value='' placeholder='Enter Username' label="Username" />
          <TextInput value='' placeholder='Enter Password' label="Password" secureTextEntry={true} />
          <Button style={styles.containerBtn} mode="contained" onPress={() => hideModal()}> Add </Button>
          <Button style={styles.containerBtn} mode="contained" onPress={() => hideModal()}> Cancel </Button>
        </Modal>
      </Portal>
    </PaperProvider>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  fab: {
    position: 'absolute',
    margin: 16,
    right: 16,
    bottom: 16,
  },
  passContainer: {
    margin: 5
  },
  appBar: {
    flexDirection: 'row',
  },
  appBarIcon: {
    marginRight: 8,
    color: 'blue'
  },
  containerStyle: {
    backgroundColor: 'white',
    padding: 20,
    width: '80%',
    alignSelf: 'center',
  },
  containerBtn: {
    margin: 5
  },
  searchBar:{
    margin: 5
  }

});

export default App;
