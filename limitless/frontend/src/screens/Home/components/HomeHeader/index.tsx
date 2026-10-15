import React, { useEffect } from 'react';
import { Linking, StyleSheet, View } from 'react-native';
import { CustomButton, CustomImage, Row } from '../../../../components';
import { COLORS, IMAGES } from '../../../../utils/theme';
import { widthPercentageToDP } from 'react-native-responsive-screen';
import { CustomIcon } from '../../../../components/CustomIcon';
import { navigate } from '../../../../utils/navigation';
import { RFValue } from 'react-native-responsive-fontsize';
import useUserStore from '../../../../service/store/user.store';
import { useUserCar } from '../../../../hooks/useUserCar';
import { getUserLocation } from '../../../../utils/helper';
import { useLocation } from '../../../../hooks/useLocation';
import { useIsFocused } from '@react-navigation/native';
import { useSettings } from '../../../../hooks/useSettings';
import useLanguageStore from '../../../../service/store/language.store';
import useTranslate from '../../../../hooks/useTranslate';

const HomeHeader = () => {
  const { userDetails, setUserDetails }: any = useUserStore();
  const { language, setLanguage }: any = useLanguageStore();
  const { t } = useTranslate();

  const { getUserDetailQuery } = useUserCar();
  const stripeDashboardLink = userDetails?.host?.dashboard_login_link;
  const focus = useIsFocused();

  useEffect(() => {
    const handle = async () => {
      await getUserDetailQuery.refetch()?.then(data => {
        setUserDetails({ ...userDetails, ...data.data?.data });
        userDetails?.selected_language &&
          setLanguage(
            data.data?.data?.selected_language == 'ENGLISH' ? 'en' : 'fr',
          );
      });
    };
    handle();
  }, []);

  return (
    <View style={styles.container}>
      <CustomImage
        source={IMAGES.logoBlack}
        width={widthPercentageToDP(13)}
        height={widthPercentageToDP(13)}
        onPressImage={() => navigate('Home')}
      />

      
      <Row>
        <CustomButton
          title={t('myOrders')}
          onPress={() => {
            if (!getUserDetailQuery?.data) {
              return navigate('Signin');
            } else {
              navigate('MyOrders');
            }
          }}
          containerStyle={styles.ordersButton}
          textStyle={styles.ordersButtonText}
        />
        {!!stripeDashboardLink && (
          <CustomIcon
            type="Feather"
            icon="credit-card"
            style={styles.euroSign}
            onPress={() => Linking.openURL(stripeDashboardLink)}
          />
        )}
        <CustomIcon
          type="Ionicons"
          icon="notifications-outline"
          onPress={() => {
            if (!getUserDetailQuery?.data) {
              return navigate('Signin');
            } else {
              navigate('Notification');
            }
          }}
        />
      </Row>
    </View>
  );
};

export default HomeHeader;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: widthPercentageToDP(3),
  },
  euroSign: {
    marginRight: RFValue(10),
  },
  ordersButton: {
    backgroundColor: COLORS.neutral50,
    borderWidth: 1,
    borderColor: COLORS.neutral200,
    borderRadius: RFValue(7),
    minHeight: widthPercentageToDP(6),
    paddingHorizontal: widthPercentageToDP(1.6),
    marginRight: RFValue(6),
  },
  ordersButtonText: {
    color: COLORS.neutral700,
    fontFamily: 'Poppins-Medium',
    fontSize: RFValue(7),
  },
});
