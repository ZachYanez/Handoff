import {StyleSheet, View} from 'react-native';

import Avatar from '../Components/ProfileComponents/Avatar';
import Header from '../Components/ProfileComponents/Header';
import ParallaxScrollView from 'react-native-parallax-scroll-view';
import ProfileBody from '../Components/ProfileComponents/ProfileBody';
// import {Button} from 'react-native';
import React from 'react';
import {StoreContext} from '../Stores/store.context';
import {useContext} from 'react';

interface ProfileProps {
  navigation: any;
}

export default function Profile({}: ProfileProps) {
  const {uiStore} = useContext(StoreContext);

  const theme = uiStore.getTheme();

  const {backgroundColor} = theme;

  // const logOut = () => {
  //   authStore.logOut();
  //   navigation.navigate('Login');
  // };

  // const deleteUser = () => {
  //   authStore.deleteAll();
  //   navigation.navigate('Login');
  // };

  return (
    <ParallaxScrollView
      backgroundColor={backgroundColor}
      contentBackgroundColor={backgroundColor}
      parallaxHeaderHeight={styles.headerHeight.height}
      renderForeground={() => (
        <>
          <Header />
          <View style={styles.avatar}>
            <Avatar />
          </View>
        </>
      )}>
      <ProfileBody />
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  headerHeight: {
    height: 250,
  },
  container: {
    height: '100%',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  avatar: {position: 'relative', bottom: 30, left: 5},
});

{
  /* <Button color={color} title={'Log out'} onPress={() => logOut()} />
      <Button
        color={color}
        title={'Delete User'}
        onPress={() => deleteUser()}
      /> */
}
