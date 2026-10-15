import {StyleSheet, TouchableOpacity, View} from 'react-native';
import React, {FC} from 'react';
import {CarItemProps} from './interface';
import {CustomImage, CustomText} from '../../../components';
import {COLORS, FONT} from '../../../utils/theme';
import {widthPercentageToDP} from 'react-native-responsive-screen';
import {RFValue} from 'react-native-responsive-fontsize';
import {navigate} from '../../../utils/navigation';
import SearchScreenSkeleton from '../../../components/Skeleton/SearchScreenSkeleton';
import useTranslate from '../../../hooks/useTranslate';

const CarItem: FC<CarItemProps> = ({
  id,
  name,
  images,
  price_per_day,
  price_per_hour,
  getHostCarsLoading,
}) => {
  const {t} = useTranslate();
  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() => navigate('CarDetails', {id})}>
      <CustomText text={name} textStyle={styles.name} />
      <CustomImage
        source={{uri: images[0]}}
        containerStyle={styles.imageContainer}
        style={styles.image}
        resizeMode="cover"
      />
      <View style={styles.priceContainer}>
        <CustomText
          text={`${price_per_day}€ ` + t('perDay')}
          textStyle={styles.price}
        />
        <CustomText
          text={`${price_per_hour}€ ` + t('perHour')}
          textStyle={styles.price}
        />
      </View>
    </TouchableOpacity>
  );
};

export default CarItem;

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.neutral50,
    marginVertical: widthPercentageToDP(2),
    borderRadius: widthPercentageToDP(6),
    padding: widthPercentageToDP(3),
    justifyContent: 'center',
    alignItems: 'center',
  },
  imageContainer: {
    width: widthPercentageToDP(80),
    height: widthPercentageToDP(40),
    borderRadius: widthPercentageToDP(3),
    paddingVertical: widthPercentageToDP(2),
  },
  image: {
    borderRadius: widthPercentageToDP(3),
  },
  priceContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: widthPercentageToDP(80),
  },
  name: {
    fontFamily: FONT.poppins600,
    fontWeight: '600',
    fontSize: RFValue(16),
  },
  price: {
    fontFamily: FONT.poppins600,
    fontWeight: '600',
    fontSize: RFValue(12),
  },
});
