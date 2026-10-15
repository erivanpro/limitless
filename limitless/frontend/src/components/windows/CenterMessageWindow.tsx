import React from 'react';
import {StyleSheet, View} from 'react-native';
import Modal from 'react-native-modal';
import {RFValue} from 'react-native-responsive-fontsize';
import {widthPercentageToDP as wp} from 'react-native-responsive-screen';

import {COLORS, FONT} from '../../utils/theme';
import useCenterMessageWindowStore from '../../service/store/centerMessageWindow.store';
import CustomButton from '../CustomButton';
import {CustomText} from '../CustomText';
import useAppAccentColor from '../../hooks/useAppAccentColor';

const CenterMessageWindow = () => {
  const accentColor = useAppAccentColor();
  const {isVisible, title, message, buttonText, hideWindow} =
    useCenterMessageWindowStore();

  return (
    <Modal
      isVisible={isVisible}
      onBackdropPress={hideWindow}
      onBackButtonPress={hideWindow}
      backdropOpacity={0.45}
      useNativeDriver>
      <View style={styles.container}>
        <CustomText
          text={title}
          center
          color={COLORS.error600}
          textStyle={styles.title}
        />
        <CustomText
          text={message}
          center
          color={COLORS.neutral700}
          textStyle={styles.description}
        />
        <CustomButton
          title={buttonText}
          onPress={hideWindow}
          containerStyle={[styles.button, {backgroundColor: accentColor}]}
        />
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.white,
    borderRadius: RFValue(12),
    paddingHorizontal: wp(6),
    paddingVertical: wp(5),
    gap: RFValue(8),
  },
  title: {
    fontFamily: FONT.poppins600,
    fontWeight: '700',
    fontSize: RFValue(14),
  },
  description: {
    fontFamily: FONT.poppinsRegular,
    fontSize: RFValue(12),
    lineHeight: RFValue(18),
  },
  button: {
    marginTop: RFValue(6),
    width: '100%',
    borderRadius:100,
  },
});

export default CenterMessageWindow;
