import React from 'react';
import {ScrollView, StyleSheet} from 'react-native';
import {RFValue} from 'react-native-responsive-fontsize';
import {widthPercentageToDP} from 'react-native-responsive-screen';
import {
  CustomButton,
  CustomImage,
  CustomText,
  CustomWrapper,
} from '../../components';
import {navigate} from '../../utils/navigation';
import {IMAGES, FONT, COLORS, SHADOWS} from '../../utils/theme';
import useUserStore from '../../service/store/user.store';
import {useTranslate} from '../../hooks/useTranslate';

const HostNotSignedin = () => {
  const {userDetails} = useUserStore();
  const {t} = useTranslate();

  const HandlePublishCar = () => {
    if (userDetails?.id) {
      navigate('SignupComplete', {user_type: 'host'});
    } else {
      navigate('Signup', {user_type: 'host'});
    }
  };

  const HandleSignin = () => {
    if (userDetails?.user_type.includes('host')) {
    }

    if (userDetails?.id) {
      navigate('SignupComplete', {user_type: 'host'});
    } else {
      navigate('Signin', {user_type: 'host'});
    }
  };
  return (
    <CustomWrapper>
      <ScrollView>
        <CustomText
          text={t('getVerifiedAndPublishCar')}
          textStyle={styles.heading}
        />
        <CustomText
          text={t('monetizeYourIdleCar')}
          style={styles.description}
        />
        <CustomImage source={IMAGES.hostingCar} style={styles.image} />
        <CustomButton
          loading={false}
          title={t('publishCar')}
          onPress={HandlePublishCar}
          containerStyle={styles.publishCar}
        />

        <CustomButton
          loading={false}
          title={t('signInButton')}
          onPress={HandleSignin}
          containerStyle={styles.signin}
          textStyle={styles.signinText}
        />
      </ScrollView>
    </CustomWrapper>
  );
};

const styles = StyleSheet.create({
  heading: {
    fontSize: RFValue(26),
    fontFamily: FONT.poppins600,
    lineHeight: RFValue(30),
    // maxWidth: widthPercentageToDP(69),
    paddingHorizontal: widthPercentageToDP(5),
    paddingTop: widthPercentageToDP(15),
    paddingBottom: widthPercentageToDP(1),
  },
  description: {
    color: COLORS.neutral400,
    fontSize: RFValue(14),
    fontFamily: FONT.inter500,
    paddingHorizontal: widthPercentageToDP(5),
  },
  image: {
    width: '100%',
    height: widthPercentageToDP(78),
  },
  publishCar: {
    marginHorizontal: widthPercentageToDP(5),
    marginVertical: widthPercentageToDP(5),
  },
  signin: {
    marginHorizontal: widthPercentageToDP(5),
    backgroundColor: COLORS.white,
    borderWidth: 1,
    borderColor: COLORS.white,
    ...SHADOWS.light,
    marginBottom: widthPercentageToDP(5),
  },
  signinText: {
    color: COLORS.primary,
  },
});

export default HostNotSignedin;
