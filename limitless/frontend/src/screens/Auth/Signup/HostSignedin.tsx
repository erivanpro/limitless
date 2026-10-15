import React, {useState} from 'react';
import {
  ActivityIndicator,
  FlatList,
  Linking,
  ScrollView,
  StyleSheet,
  View,
} from 'react-native';
import {
  CustomButton,
  CustomImage,
  CustomText,
  CustomWrapper,
} from '../../../components';
import {COLORS, FONT, IMAGES} from '../../../utils/theme';
import EmptyScreen from '../../../components/EmptyScreen';
import CarItem from '../../Hosting/components/CarItem';
import {widthPercentageToDP} from 'react-native-responsive-screen';
import {RFValue} from 'react-native-responsive-fontsize';
import {navigate} from '../../../utils/navigation';
import {useHostCar} from '../../../hooks/useHostCar';
import SearchScreenSkeleton from '../../../components/Skeleton/SearchScreenSkeleton';
import PendingModal from '../../../components/PendingModal/PendingModal';
import useUserStore from '../../../service/store/user.store';
import {useUserCar} from '../../../hooks/useUserCar';
import {useTranslate} from '../../../hooks/useTranslate';

const HostSignedin = () => {
  const {getHostCars, getHostCarsLoading} = useHostCar();
  const {userDetails} = useUserStore();
  const {t} = useTranslate();
  let data = getHostCars?.data?.pages[0]?.data?.cars;
  const stripeDashboardLink = userDetails?.host?.dashboard_login_link;
  const [processModal, setProcessModal] = useState({
    isVerified: false,
    isRejected: false,
  });

  const {getUserDetailQuery} = useUserCar();

  const handlePublishCar = async () => {
    await getUserDetailQuery.refetch();
    let user = getUserDetailQuery.data?.data;

    if (!user?.is_verified == !user?.is_rejected) {
      return setProcessModal(pre => ({...pre, isVerified: true}));
    }
    if (user?.is_rejected) {
      return setProcessModal(pre => ({...pre, isRejected: true}));
    }
    navigate('PublishCar', {});
  };

  let isVisibleModal = processModal?.isRejected || processModal?.isVerified;
  return (
    <CustomWrapper padding bottomInsert={0.1} backgroundColor={COLORS.white}>
      <CustomText text={t('manageMyCar')} textStyle={styles.title} />
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.actionRow}>
        <CustomButton onPress={() => navigate('OrderForMyCar')} containerStyle={styles.topButton}>
          <CustomText
            text={t('myOrders')}
            center
            numberOfLines={1}
            ellipsizeMode="tail"
            fontSize="S8"
            fontWeightPopins="500"
            textStyle={styles.topButtonText}
          />
        </CustomButton>


         <CustomButton
          onPress={handlePublishCar}
          containerStyle={styles.topButton}>
          <CustomText
            text={t('publishCar')}
            center
            numberOfLines={1}
            ellipsizeMode="tail"
            fontSize="S8"
            fontWeightPopins="500"
            textStyle={styles.topButtonText}
          />
        </CustomButton>

         <CustomButton
          onPress={() =>
            stripeDashboardLink && Linking.openURL(stripeDashboardLink)
          }
          disabled={!stripeDashboardLink}
          containerStyle={styles.topButton}>
          <CustomText
            text={t('manageMyMoney')}
            center
            numberOfLines={1}
            ellipsizeMode="tail"
            fontSize="S8"
            fontWeightPopins="500"
            textStyle={styles.topButtonText}
          />
        </CustomButton>

        <CustomButton
          onPress={() => navigate('HelpCenter')}
          containerStyle={styles.topButton}>
          <CustomText
            text={t('helpCenterTitle')}
            center
            numberOfLines={1}
            ellipsizeMode="tail"
            fontSize="S8"
            fontWeightPopins="500"
            textStyle={styles.topButtonText}
          />
        </CustomButton>
        <CustomButton
          onPress={() => navigate('EditProfile')}
          containerStyle={styles.topButton}>
          <CustomText
            text={t('editProfile')}
            center
            numberOfLines={1}
            ellipsizeMode="tail"
            fontSize="S8"
            fontWeightPopins="500"
            textStyle={styles.topButtonText}
          />
        </CustomButton>
       
       
      </ScrollView>
      {getHostCarsLoading ? (
        <View style={styles.loaderContainer}>
          <View style={{paddingVertical: RFValue(0)}}>
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
          renderItem={({item}) => <CarItem {...item} />}
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
  const {t} = useTranslate();
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
    gap: widthPercentageToDP(2),
    marginBottom: widthPercentageToDP(3.5),
    paddingRight: widthPercentageToDP(2),
  },
  topButton: {
    minWidth: widthPercentageToDP(23),
    backgroundColor: COLORS.neutral50,
    borderWidth: 1,
    borderColor: COLORS.neutral200,
    borderRadius: RFValue(8),
    minHeight: widthPercentageToDP(10),
    paddingHorizontal: widthPercentageToDP(1.2),
  },
  topButtonText: {
    fontFamily: FONT.poppins500,
    color: COLORS.neutral700,
    textAlign: 'center',
    fontSize: RFValue(7),
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
