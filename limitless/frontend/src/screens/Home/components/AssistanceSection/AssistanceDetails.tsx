import { ScrollView, StyleSheet, View } from 'react-native';
import React from 'react';
import {
  CustomButton,
  CustomImage,
  CustomText,
  CustomWrapper,
  Row,
} from '../../../../components';
import { useRoute } from '@react-navigation/native';
import { COLORS, IMAGES } from '../../../../utils/theme';
import { navigateGoBack } from '../../../../utils/navigation';
import { RFValue } from 'react-native-responsive-fontsize';
import { widthPercentageToDP } from 'react-native-responsive-screen';
import { useTranslation } from 'react-i18next';
import * as Animatable from 'react-native-animatable';
import useAppAccentColor from '../../../../hooks/useAppAccentColor';

const AssistanceDetails = () => {
  const accentColor = useAppAccentColor();
  const route = useRoute();
  const data = route.params?.data || {};
  const { h1, h2, h3, p1, p2, p3, pageHeading, image } = data || {};
  const { t } = useTranslation();
  return (
    <CustomWrapper bottomInsert={-1}>
      <View style={styles.header}>
        <Row justifyContent="space-between">
          <CustomImage
            onPressImage={navigateGoBack}
            source={IMAGES.back}
            height={RFValue(34)}
            width={RFValue(34)}
          />
          <CustomText
            text={pageHeading}
            fontWeightPopins="600"
            fontSize="S14"
            center
          />
          <View />
        </Row>
      </View>
      <View style={styles.scrollViewContainer}>
        <ScrollView style={styles.scrollView}>
          <CustomText
            text={h1}
            fontWeightPopins="500"
            fontSize="S18"
            textStyle={styles.headingStyle}
          />
          <CustomText
            text={p1}
            fontWeightInter="500"
            fontSize="S12"
            color={COLORS.neutral500}
            textStyle={styles.paragraphStyle}
          />
          <CustomImage
            source={image}
            resizeMode="cover"
            containerStyle={styles.image}
          />
          <CustomText
            text={h2}
            fontWeightPopins="500"
            fontSize="S18"
            textStyle={styles.headingStyle}
          />
          <CustomText
            text={p2}
            fontWeightInter="500"
            fontSize="S12"
            color={COLORS.neutral500}
            textStyle={styles.paragraphStyle}
          />
          <CustomText
            text={h3}
            fontWeightPopins="500"
            fontSize="S18"
            textStyle={styles.headingStyle}
          />
          <CustomText
            text={p3}
            fontWeightInter="500"
            fontSize="S12"
            color={COLORS.neutral500}
            textStyle={styles.paragraphStyle}
          />

          <Animatable.View animation="bounceInUp" duration={500} delay={0}>
            <CustomButton
              containerStyle={[styles.buttonStyle, {backgroundColor: accentColor}]}
              title={t('letsgo')}
              onPress={navigateGoBack}
            />
          </Animatable.View>
        </ScrollView>
      </View>
    </CustomWrapper>
  );
};

export default AssistanceDetails;

const styles = StyleSheet.create({
  header: {
    paddingVertical: widthPercentageToDP(7),
    paddingHorizontal: widthPercentageToDP(4),
  },
  scrollViewContainer: {
    flex: 1,
    backgroundColor: COLORS.white,
    paddingHorizontal: widthPercentageToDP(4),
    paddingVertical: widthPercentageToDP(4),
    borderTopStartRadius: widthPercentageToDP(4),
    borderTopEndRadius: widthPercentageToDP(4),
  },
  scrollView: {
    flex: 1,
  },
  image: {
    borderRadius: widthPercentageToDP(4),
    maxHeight: widthPercentageToDP(60),
  },
  headingStyle: {
    paddingVertical: widthPercentageToDP(1),
  },
  paragraphStyle: {
    paddingVertical: widthPercentageToDP(1),
  },
  buttonStyle: {
    marginTop: 10,
    backgroundColor: 'transparent',
    borderRadius: 100,
  },
});
