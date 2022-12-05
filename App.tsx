import Home from './Src/Screens/Home';
import HomeIcon from './Src/Components/Icons/HomeIcon';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Login from './Src/Screens/Login';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Messages from './Src/Screens/Messages';
import MessagesIcon from './Src/Components/Icons/MessagesIcon';
import {NavigationContainer} from '@react-navigation/native';
import NotificationIcon from './Src/Components/Icons/NotificationIcon';
import Notifications from './Src/Screens/Notifications';
import Profile from './Src/Screens/Profile';
import ProfileIcon from './Src/Components/Icons/ProfileIcon';
import React from 'react';
import Search from './Src/Screens/Search';
import SearchIcon from './Src/Components/Icons/SearchIcon';
import {StoreContext} from './Src/Stores/store.context';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createStackNavigator} from '@react-navigation/stack';
import {observable} from 'mobx';
import {useContext} from 'react';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

export default function App() {
  const {uiStore, authStore} = useContext(StoreContext);
  const theme = uiStore.getTheme();
  const {color, tabIconColor, backgroundColor} = theme;
  Ionicons.loadFont();
  MaterialCommunityIcons.loadFont();

  return (
    <NavigationContainer>
      <Stack.Navigator>
        {!authStore.isLoggedIn ? (
          <Stack.Screen
            options={() => ({
              headerShown: false,
              headerBackTitle: 'Login',
            })}
            name="Login"
            component={Login}
          />
        ) : null}
        <Stack.Screen
          name="HomeTabs"
          options={{headerShown: false}}
          component={HomeTabs}
        />
        <Stack.Screen
          options={({navigation}) => ({
            headerBackTitle: 'Home',
            headerStyle: {
              backgroundColor: backgroundColor,
            },
            headerTitleStyle: {
              color: color,
            },
            headerLeft: () => (
              <HomeIcon
                iconColor={tabIconColor}
                navigation={navigation}
                focused={false}
              />
            ),
          })}
          name="Profile"
          component={Profile}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

function HomeTabs() {
  const {uiStore} = useContext(StoreContext);
  const theme = uiStore.getTheme();
  const {backgroundColor, color, tabIconColor} = theme;

  return (
    <Tab.Navigator
      screenOptions={() => ({
        tabBarStyle: {backgroundColor: backgroundColor},
      })}>
      <Tab.Screen
        name="Home"
        component={Home}
        options={({navigation}) => ({
          title: 'Home',
          headerRight: () => (
            <ProfileIcon navigation={navigation} iconColor={tabIconColor} />
          ),
          tabBarIcon: ({focused}) => {
            return (
              <HomeIcon
                navigation={navigation}
                iconColor={tabIconColor}
                focused={focused}
              />
            );
          },
          tabBarLabelStyle: {color: color},
          headerStyle: {
            backgroundColor: backgroundColor,
          },
          headerTitleStyle: {
            color: color,
          },
        })}
      />
      <Tab.Screen
        name="Search"
        component={Search}
        options={{
          title: 'Search',
          tabBarIcon: ({focused}) => {
            return <SearchIcon iconColor={tabIconColor} focused={focused} />;
          },
          tabBarLabelStyle: {color: color},
          headerStyle: {
            backgroundColor: backgroundColor,
          },
          headerTitleStyle: {
            color: color,
          },
        }}
      />
      <Tab.Screen
        name="Notifications"
        component={Notifications}
        options={{
          title: 'Notifications',
          tabBarIcon: ({focused}) => {
            return (
              <NotificationIcon iconColor={tabIconColor} focused={focused} />
            );
          },
          tabBarLabelStyle: {color: color},

          headerStyle: {
            backgroundColor: backgroundColor,
          },
          headerTitleStyle: {
            color: color,
          },
        }}
      />
      <Tab.Screen
        name="Messages"
        component={Messages}
        options={{
          title: 'Messages',
          tabBarIcon: ({focused}) => {
            return <MessagesIcon iconColor={tabIconColor} focused={focused} />;
          },
          tabBarLabelStyle: {color: color},
          headerStyle: {
            backgroundColor: backgroundColor,
          },
          headerTitleStyle: {
            color: color,
          },
        }}
      />
    </Tab.Navigator>
  );
}

observable(App);
