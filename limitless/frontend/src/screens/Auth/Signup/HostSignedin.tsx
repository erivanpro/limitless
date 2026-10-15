import React, { useState } from 'react';
import { FlatList, Linking, ScrollView, StyleSheet, View } from 'react-native';
import {
  CustomButton,
  CustomImage,
  CustomText,
  CustomWrapper,
} from '../../../components';
import { COLORS, FONT, IMAGES } from '../../../utils/theme';
import EmptyScreen from '../../../components/EmptyScreen';
import CarItem from '../../Hosting/components/CarItem';
import { widthPercentageToDP } from 'react-native-responsive-screen';
import { RFValue } from 'react-native-responsive-fontsize';
import { navigate } from '../../../utils/navigation';
import { useHostCar } from '../../../hooks/useHostCar';
import SearchScreenSkeleton from '../../../components/Skeleton/SearchScreenSkeleton';
import PendingModal from '../../../components/PendingModal/PendingModal';
import useUserStore from '../../../service/store/user.store';
import { useUserCar } from '../../../hooks/useUserCar';
import { useTranslate } from '../../../hooks/useTranslate';

const HostSignedin = () => {
  const { getHostCars, getHostCarsLoading } = useHostCar();
  const { userDetails } = useUserStore();
  const { t } = useTranslate();
  let data = getHostCars?.data?.pages[0]?.data?.cars;
  const stripeDashboardLink = userDetails?.host?.dashboard_login_link;
  const [processModal, setProcessModal] = useState({
    isVerified: false,
    isRejected: false,
  });

  const { getUserDetailQuery } = useUserCar();

  const handlePublishCar = async () => {
    await getUserDetailQuery.refetch();
    let user = getUserDetailQuery.data?.data;

    if (!user?.is_verified && !user?.is_rejected) {
      return setProcessModal(pre => ({ ...pre, isVerified: true }));
    }
    if (user?.is_rejected) {
      return setProcessModal(pre => ({ ...pre, isRejected: true }));
    }
    navigate('PublishCar', {});
  };

  let isVisibleModal = processModal?.isRejected || processModal?.isVerified;
  const actionButtons = [
    {
      key: 'my-orders',
      label: t('myOrders'),
      onPress: () => navigate('OrderForMyCar'),
    },
    {
      key: 'publish-car',
      label: t('publishCar'),
      onPress: handlePublishCar,
    },
    {
      key: 'manage-my-money',
      label: t('manageMyMoney'),
      onPress: () =>
        stripeDashboardLink && Linking.openURL(stripeDashboardLink),
      disabled: !stripeDashboardLink,
    },
    {
      key: 'help-center',
      label: t('helpCenterTitle'),
      onPress: () => navigate('HelpCenter'),
    },
    {
      key: 'edit-profile',
      label: t('editProfile'),
      onPress: () => navigate('EditProfile'),
    },
  ];

  return (
    <CustomWrapper padding bottomInsert={0.1} backgroundColor={COLORS.white}>
      <CustomText text={t('manageMyCar')} textStyle={styles.title} />
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.actionRow}
      >
        {actionButtons.map(({ key, label, onPress, disabled }) => (
          <CustomButton
            key={key}
            onPress={onPress}
            disabled={disabled}
            containerStyle={styles.topButton}
          >
            <CustomText
              text={label}
              center
              fontWeightPopins="500"
              textStyle={styles.topButtonText}
            />
          </CustomButton>
        ))}
      </ScrollView>
      {getHostCarsLoading ? (
        <View style={styles.loaderContainer}>
          <View style={{ paddingVertical: RFValue(0) }}>
            {[1, 2, 3]?.map(i => (
              <View key={i}>
                <SearchScreenSkeleton />
              </View>
            ))}
          </View>
        </View>
      ) : (
        <FlatList
          showsVerticalScrollIndicator={false}
          scrollEnabled={!!data?.length}
          contentContainerStyle={
            data?.length
              ? styles.contentContainerStyle
              : styles.contentContainerEmptyStyle
          }
          data={data}
          renderItem={({ item }) => <CarItem {...item} />}
          ListEmptyComponent={ListEmptyComponent}
        />
      )}
      <CustomImage
        source={IMAGES.plusRoundIcon}
        containerStyle={styles.plusRoundIcon}
        onPressImage={handlePublishCar}
      />

      {isVisibleModal && (
        <PendingModal setState={setProcessModal} processModal={processModal} />
      )}
    </CustomWrapper>
  );
};

const ListEmptyComponent = () => {
  const { t } = useTranslate();
  return (
    <EmptyScreen
      image={IMAGES.addCarIcon}
      title={t('emptyOrdersForMyCars')}
      btnOnPress={() => {}}
      imageContainerStyle={{
        height: widthPercentageToDP(30),
      }}
    />
  );
};

const styles = StyleSheet.create({
  contentContainerStyle: {
    paddingBottom: widthPercentageToDP(30),
  },
  contentContainerEmptyStyle: {
    paddingBottom: widthPercentageToDP(30),
    flex: 1,
  },
  title: {
    paddingVertical: widthPercentageToDP(3),
    fontFamily: FONT.poppins600,
    fontWeight: '600',
    fontSize: RFValue(20),
  },
  actionRow: {
    flexDirection: 'row',
    gap: widthPercentageToDP(2.5),
    marginBottom: widthPercentageToDP(3.5),
    paddingRight: widthPercentageToDP(4),
  },
  topButton: {
    minWidth: widthPercentageToDP(28),
    flexShrink: 0,
    backgroundColor: COLORS.neutral50,
    borderWidth: 1,
    borderColor: COLORS.neutral200,
    borderRadius: RFValue(10),
    minHeight: widthPercentageToDP(12),
    paddingHorizontal: widthPercentageToDP(4),
    paddingVertical: widthPercentageToDP(3),
  },
  topButtonText: {
    fontFamily: FONT.poppins500,
    color: COLORS.neutral700,
    textAlign: 'center',
    fontSize: RFValue(11),
    lineHeight: RFValue(14),
  },
  plusRoundIcon: {
    position: 'absolute',
    right: widthPercentageToDP(1),
    bottom: widthPercentageToDP(27),
    height: widthPercentageToDP(22),
    width: widthPercentageToDP(22),
  },
  loaderContainer: {},
});

export default HostSignedin;
