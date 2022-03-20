import React, {useEffect} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  View,
  Linking,
  Button,
} from 'react-native';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import Section from '../../component/Section';
import Header from '../../component/Header';
import {useContext, MainContext} from '../../context';

export default function HomeScreen() {
  const [state, dispatch] = useContext(MainContext);

  const {theme, title, message, linkedin} = state;

  const isDarkMode = theme === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? '#000' : '#FFF',
    flex: 1,
  };

  useEffect(() => {
    console.log('Theme', theme);
  }, [theme]);

  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={backgroundStyle}>
        <Header />
        <View
          style={{
            backgroundColor: isDarkMode ? Colors.black : Colors.white,
          }}>
          <Section title={message}>{title}</Section>

          <View
            style={{
              paddingHorizontal: 24,
              marginVertical: 50,
              flexDirection: 'row',
              alignItems: 'center',
            }}>
            <Button
              title="Toggle Theme"
              onPress={() => dispatch({type: 'TOGGLE_THEME'})}
            />
            <Button
              title="Change Message"
              onPress={() =>
                dispatch({
                  type: 'TOGGLE_MESSAGE',
                  payload: "Hi everyone! I'm Furkan TÜRKYILMAZ",
                })
              }
            />
          </View>
          <Button title="LinkedIn" onPress={() => Linking.openURL(linkedin)} />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
