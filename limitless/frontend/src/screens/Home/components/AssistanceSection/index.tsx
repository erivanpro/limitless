import {FlatList, StyleSheet, View} from 'react-native';
import React from 'react';
import SectionHeading from '../SectionHeading';
import AssistanceCard from '../AssistanceCard';
import {IMAGES} from '../../../../utils/theme';
import {widthPercentageToDP} from 'react-native-responsive-screen';
import {useTranslate} from '../../../../hooks/useTranslate';

const AssistanceSection = () => {
  const {t} = useTranslate();

  const data = [
    {
      thumbnail: IMAGES.assistanceThumbnailBanner,
      image: IMAGES.assistanceThumbnailBanner,
      title: t('howDoesRentingWorkTitle'),
      id: 1,
      pageHeading: t('howRentingWorksPageHeading'),
      h1: t('rentingMadeEasy'),
      p1: t('rentingMadeEasyDesc'),
      h2: t('flexibleBookings'),
      p2: t('flexibleBookingsDesc'),
      h3: t('convenientReturns'),
      p3: t('convenientReturnsDesc'),
    },

    {
      thumbnail: IMAGES.assistanceThumbnail2,
      image: IMAGES.assistanceThumbnail2,
      title: t('howDoesHostingWorkTitle'),
      id: 2,
      pageHeading: t('howHostingWorksPageHeading'),
      h1: t('earnWithEase'),
      p1: t('earnWithEaseDesc'),
      h2: t('flexibleAvailability'),
      p2: t('flexibleAvailabilityDesc'),
      h3: t('flexiblePricing'),
      p3: t('flexiblePricingDesc'),
    },
  ];

  return (
    <View>
      <SectionHeading heading={t('help')} fontSize="S16" />
      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        data={data}
        renderItem={({item}) => <AssistanceCard {...item} />}
        ItemSeparatorComponent={() => ItemSeparatorComponent()}
      />
    </View>
  );
};

export default AssistanceSection;

const ItemSeparatorComponent = () => {
  return <View style={styles.separator} />;
};

const styles = StyleSheet.create({
  separator: {width: widthPercentageToDP(3)},
});
