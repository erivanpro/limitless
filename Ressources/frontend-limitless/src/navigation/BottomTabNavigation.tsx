import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { COLORS, IMAGES, SHADOWS } from '../utils/theme';
import { ChatList, Home, Hosting, Search, Setting } from '../screens';
import { StyleSheet, TouchableWithoutFeedback, View } from 'react-native';
import { CustomImage } from '../components';
import { heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { Source } from 'react-native-fast-image';
import { BottomTabBarButtonProps } from '@react-navigation/bottom-tabs';
import { navigate } from '../utils/navigation';
import useUserStore from '../service/store/user.store';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

const Tab = createBottomTabNavigator();

interface TabbarItem {
  id: number;
  name: string;
  image: Source;
  component: React.ComponentType;
}

const BottomTabNavigation = () => {
  const { accessToken } = useUserStore();
  const { bottom } = useSafeAreaInsets();
  let Tabbar: TabbarItem[] = [
    {
      id: 1,
      name: 'Home',
      image: IMAGES.home,
      component: Home,
    },
    {
      id: 2,
      name: 'Search',
      image: IMAGES.search,
      component: Search,
    },
    {
      id: 3,
      name: 'Hosting',
      image: IMAGES.hostingCarBottomTab,
      component: Hosting,
    },
    {
      id: 4,
      name: 'Chat',
      image: IMAGES.bottomtabChat,
      component: ChatList,
    },
    {
      id: 5,
      name: 'Setting',
      image: IMAGES.setting,
      component: Setting,
    },
  ];

  const renderTabBarButton = (
    props: { focused: boolean; size: number },
    image: Source,
    tab: TabbarItem,
  ) => {
    const { focused, size } = props;
    return (
      <TouchableWithoutFeedback
        onPress={
          tab.name === 'Chat' && !accessToken
            ? () => navigate('UserAuthScreen')
            : () => navigate(tab.name as never)
        }
      >
        <View style={styles.buttonContainer}>
          <View
            style={[
              styles.iconContainer,
              focused ? styles.iconContainerFocused : undefined,
            ]}
          >
            <CustomImage
              source={image}
              height={hp(3)}
              width={hp(3)}
              resizeMode="contain"
              disabled={true}
            />
          </View>
        </View>
      </TouchableWithoutFeedback>
    );
  };

  return (
    <Tab.Navigator
      screenOptions={{ headerShown: false, tabBarShowLabel: false }}
    >
      {Tabbar.map(tab => (
        <Tab.Screen
          name={tab.name}
          component={tab.component}
          key={tab.id}
          options={{
            tabBarStyle: { ...styles.tabBarStyle, bottom: bottom + hp(2) },
            tabBarIcon: ({ focused, size }) =>
              renderTabBarButton({ focused, size }, tab.image, tab),
          }}
        />
      ))}
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  tabBarStyle: {
    backgroundColor: COLORS.white,
    position: 'absolute',
    // left and right do not works on initial load, so as a workaround we have used marginHorizontal
    // left: hp(5),
    // right: hp(5),
    height: hp(8),
    marginHorizontal: hp(2),
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    // flex: 1,
    paddingBottom: 0,
    paddingTop: hp(1.5),
    borderRadius: 80,
    borderWidth: 1,
    borderColor: COLORS.white,
    ...SHADOWS.light,
  },
  buttonContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  iconContainer: {
    padding: hp(1.5),
    borderRadius: hp(80),
    backgroundColor: 'transparent',
  },
  iconContainerFocused: {
    backgroundColor: COLORS.black,
    ...SHADOWS.medium,
  },
});

export default BottomTabNavigation;
