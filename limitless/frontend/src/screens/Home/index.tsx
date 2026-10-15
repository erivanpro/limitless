import React, { useEffect, useRef, useState } from 'react';
import * as Animatable from 'react-native-animatable';
import {
  CalendarTimePicker,
  CustomButton,
  CustomImage,
  CustomWrapper,
  GooglePlacesInput,
} from '../../components';
import { AssistanceSection, HomeHeader, PopularVehicles } from './components';
import { COLORS, IMAGES } from '../../utils/theme';
import { widthPercentageToDP } from 'react-native-responsive-screen';

import {
  Button,
  Dimensions,
  ImageStyle,
  RefreshControl,
  ScrollView,
  StyleProp,
} from 'react-native';
import MMKVStorage from '../../utils/MMKVStorage';
import { navigate } from '../../utils/navigation';
import { BottomSheetModal } from '@gorhom/bottom-sheet';
import { useUserCar } from '../../hooks/useUserCar';
import useUserStore from '../../service/store/user.store';
import { useIsFocused } from '@react-navigation/native';
import { useLocation } from '../../hooks/useLocation';
import { getUserLocation } from '../../utils/helper';
import { set } from 'react-native-reanimated';
import useTranslate from '../../hooks/useTranslate';
import useAppAccentColor from '../../hooks/useAppAccentColor';

const HomeScreen = () => {
  // Variables
  const focus = useIsFocused();
  const { t, language } = useTranslate();
  const accentColor = useAppAccentColor();

  const { saveUserLocation } = useLocation();
  const calenderBottomSheetRef = useRef<BottomSheetModal>(null);
  const [location, setLocation] = useState('');

  const [date, setDate] = useState({ start: '', end: '' });
  const [time, setTime] = useState({ start: '', end: '' });
  const [refreshing, setRefreshing] = useState(false);

  const googlePlaceAutoCompleteRef = useRef<any>();

  // Functions
  const HandleContinue = () => {
    calenderBottomSheetRef.current?.close();
  };

  const handleRefreshLocation = async () => {
    if (refreshing) return;
    setRefreshing(true);
    await handleLocation();
    setRefreshing(false);
  };

  const handleLocation = async () => {
    try {
      const res = await getUserLocation();
      console.log('===>>>', { res });
      if (res?.lat) {
        saveUserLocation({
          location: {
            lat: Number(res?.lat),
            long: Number(res?.lng),
          },
        });
      } else {
        saveUserLocation({
          location: {
            lat: undefined,
            long: undefined,
          },
        });
      }
    } catch (error) {
      console.log('Error fetching location:', error);
    }
  };

  useEffect(() => {
    handleLocation();
  }, []);

  // UseEffects
  useEffect(() => {
    googlePlaceAutoCompleteRef.current?.setAddressText('');
    setDate({ start: '', end: '' });
    setTime({ start: '', end: '' });
  }, [focus]);
  const HandleFindCars = () => {
    let payload = {
      location: googlePlaceAutoCompleteRef?.current?.getAddressText(),
      date: {
        start: '',
        end: '',
      },
      time: {
        start: '',
        end: '',
      },
    };
    if (date.end) {
      payload.date.start = String(date.start);
      payload.date.end = String(date.end);
    }
    if (time.end) {
      payload.time.start = String(time.start);
      payload.time.end = String(time.end);
    }
    navigate('Search', {
      data: payload,
    });
  };

  useEffect(() => {
    const checkOnboardingStatus = async () => {
      const onboardingStatus = await MMKVStorage.getItem('hasSeenOnboarding');
      console.log('onboardingStatus on home', onboardingStatus);
    };

    checkOnboardingStatus();
    handleLocation();
  }, []);

  return (
    <CustomWrapper padding backgroundColor={COLORS.white}>
      <HomeHeader />

      <ScrollView
        contentContainerStyle={styles.contentContainerStyle}
        showsVerticalScrollIndicator={false}
        keyboardShouldPersistTaps="always"
        refreshControl={
          <RefreshControl
            refreshing={refreshing}
            onRefresh={() => handleRefreshLocation()}
          />
        }
      >
        <GooglePlacesInput
          inputRef={googlePlaceAutoCompleteRef}
          value={location}
          predefinedPlaces={[]}
          setAddress={e => {
            setLocation(e);
          }}
        />
        <CalendarTimePicker
          calenderBottomSheetRef={calenderBottomSheetRef}
          handleContinue={HandleContinue}
          date={date}
          time={time}
          setDate={setDate}
          setTime={setTime}
        />

        <CustomButton
          containerStyle={[
            styles.findCarsButton,
            { backgroundColor: accentColor },
          ]}
          title={t('findCars')}
          onPress={HandleFindCars}
        />

        {/*
        <Animatable.View
          animation={{
            0: { opacity: 0, transform: [{ scale: 0.95 }] }, // start slightly smaller & invisible
            1: { opacity: 1, transform: [{ scale: 1 }] }, // end fully visible & normal size
          }}
          duration={500}
          delay={300}
          useNativeDriver
        >
          <CustomImage
            source={
              language === 'en' ? IMAGES.homeBanner1 : IMAGES.homeBanner1FR
            }
            style={styles.homeBanner as StyleProp<ImageStyle>}
            onPressImage={() => navigate('Search' as any)}
          />
        </Animatable.View>
        */}

        <Animatable.View
          animation={{
            0: { opacity: 0, transform: [{ scale: 0.95 }] }, // start invisible and slightly smaller
            1: { opacity: 1, transform: [{ scale: 1 }] }, // end fully visible and normal size
          }}
          duration={500} // animation duration
          delay={500} // delay to stagger after banners, optional
          useNativeDriver
        >
          <PopularVehicles />
        </Animatable.View>

        {/*
        <Animatable.View
          animation={{
            0: { opacity: 0, transform: [{ scale: 0.95 }] }, // start slightly smaller and invisible
            1: { opacity: 1, transform: [{ scale: 1 }] }, // end fully visible and normal size
          }}
          duration={500} // animation duration
          delay={300} // optional delay
          useNativeDriver
        >
          <CustomImage
            source={
              language === 'en' ? IMAGES.homeBanner2 : IMAGES.homeBanner2FR
            }
            style={styles.homeBanner as StyleProp<ImageStyle>}
            onPressImage={() => navigate('Hosting')}
          />
        </Animatable.View>
      */}

        <AssistanceSection />
      </ScrollView>
    </CustomWrapper>
  );
};

const styles = {
  homeBanner: {
    width: '100%',
    height: (Dimensions.get('screen').width / 1.7) * 0.692,
    marginVertical: widthPercentageToDP(6),
    zIndex: 1,
  },
  contentContainerStyle: {
    paddingBottom: widthPercentageToDP(30),
  },
  findCarsButton: {
    backgroundColor: 'transparent',
    width: 150,
    borderRadius: 100,
    height: 50,
  },
};
export default HomeScreen;
