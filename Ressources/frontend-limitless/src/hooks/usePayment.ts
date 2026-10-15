import {useMutation, useQuery} from '@tanstack/react-query';
import {ErrorResponse} from '../utils/types/errorType';
import Toast from 'react-native-toast-message';
import {errorFormatter} from '../utils/helper';
import {
  detachPaymentService,
  paymentIntentService,
  paymentMethodListService,
  setupIntentService,
} from '../services/paymentService';
import useUserStore from '../service/store/user.store';
import useTranslate from '../hooks/useTranslate';

export const usePayment = params => {
  const {userDetails} = useUserStore();
  const {t} = useTranslate();

  const setupIntentMutation = useMutation({
    mutationFn: setupIntentService,
    onError: (error: ErrorResponse) => {
      Toast.show({
        type: 'error',
        text1: t('error'),
        text2: t(
          errorFormatter((error?.response?.data as ErrorResponse)?.message),
        ),
      });
    },
    onSuccess: data => {
      params?.successHandler(data);
      // navigate('VerifyOtp');

      console.log({data});
      console.log('setupIntentMutation', data.data);
      Toast.show({
        type: 'success',
        text1: t('success'),
        text2: t('cardAddedSuccessfully'),
      });
    },
  });

  const paymentIntentMutation = useMutation({
    mutationFn: paymentIntentService,
    onError: (error: ErrorResponse) => {
      Toast.show({
        type: 'error',
        text1: t('error'),
        text2: t(
          errorFormatter((error?.response?.data as ErrorResponse)?.message),
        ),
      });
    },
    onSuccess: data => {
      params?.successHandler(data);
      console.log('paymentIntentMutation', data.data);
      // navigate('VerifyOtp');



      Toast.show({
        type: 'success',
        text1: t('success'),
        text2: t('paymentSuccessful'),
      });
    },
  });

  const detachPaymentMutation = useMutation({
    mutationFn: detachPaymentService,
    onError: (error: ErrorResponse) => {
      Toast.show({
        type: 'error',
        text1: t('error'),
        text2: t(
          errorFormatter((error?.response?.data as ErrorResponse)?.message),
        ),
      });
    },
    onSuccess: data => {
      params?.successHandler(data);
      // navigate('VerifyOtp');

      Toast.show({
        type: 'success',
        text1: t('success'),
        text2: t('cardDeletedSuccessfully'),
      });
    },
  });

  const getPaymentCardListQuery = useQuery({
    queryKey: ['paymentCards'],
    queryFn: () => {
      let payload = {
        limit: 10,
        customer_id: userDetails?.stripe_customer_id,
      };
      return paymentMethodListService({...payload});
    },
  });

  return {
    setupIntent: setupIntentMutation.mutate,
    setupIntentLoading: setupIntentMutation.isPending,

    paymentIntent: paymentIntentMutation.mutate,
    paymentIntentLoading: paymentIntentMutation.isPending,

    detachPayment: detachPaymentMutation.mutate,
    detachPaymentLoading: detachPaymentMutation.isPending,

    getPaymentCardList: getPaymentCardListQuery,
    getPaymentCardListLoading: getPaymentCardListQuery.isPending,
  };
};
