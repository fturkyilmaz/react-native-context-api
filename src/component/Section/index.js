import React from 'react';
import {Text, useColorScheme, View, StyleSheet} from 'react-native';
import {useContext, MainContext} from '../../context';

export default function Section({children, title}) {
  const [state] = useContext(MainContext);

  const isDarkMode = state.theme === 'dark';

  const lightColor = '#FFF';

  const darkColor = '#000';

  const backgroundColor = {
    color: isDarkMode ? lightColor : darkColor,
  };

  return (
    <View style={styles.sectionContainer}>
      <Text style={[styles.sectionTitle, backgroundColor]}>{title}</Text>
      <Text style={[styles.sectionDescription, backgroundColor]}>
        {children}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});
