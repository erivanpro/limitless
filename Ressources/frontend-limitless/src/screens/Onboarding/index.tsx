import {ImageBackground, StyleSheet, View} from 'react-native';
import React from 'react';
import {COLORS, IMAGES} from '../../utils/theme';
import {CustomButton, CustomText} from '../../components';
import {widthPercentageToDP} from 'react-native-responsive-screen';
import {RFValue} from 'react-native-responsive-fontsize';
import {navigateReset} from '../../utils/navigation';
import useUserStore from '../../service/store/user.store';
import {useTranslate} from '../../hooks/useTranslate';

const Onboarding = () => {
  const {setOnboardingStatus} = useUserStore();
  const {t} = useTranslate();

  const HandleNavigate = async () => {
    setOnboardingStatus?.(true);
    navigateReset('RootStack');
  };
  return (
    <ImageBackground
      source={IMAGES.onboarding}
      resizeMode="cover"
      style={styles.backgroundImage}>
      <View style={styles.container}>
        <CustomText text={t('onboardingSubtitle')} textStyle={styles.heading} />
        <CustomButton
          title={t('letsGo')}
          onPress={HandleNavigate}
          containerStyle={styles.btnContainer}
        />
      </View>
    </ImageBackground>
  );
};

export default Onboarding;

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
  },
  container: {
    flex: 1,
    justifyContent: 'space-between',
    paddingTop: widthPercentageToDP(20),
    paddingBottom: widthPercentageToDP(10),
    paddingHorizontal: widthPercentageToDP(10),
  },
  heading: {
    fontFamily: 'Poppins-Regular',
    fontSize: RFValue(50),
    color: COLORS.white,
    fontWeight: '600',
    lineHeight: RFValue(60),
  },
  btnContainer: {
    borderRadius: 100,
  },
});
