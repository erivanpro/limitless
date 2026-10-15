import { useMutation} from '@tanstack/react-query';

import {ErrorResponse} from '../utils/types/errorType';

import Toast from 'react-native-toast-message';
import useUserStore from '../service/store/user.store';
import useTranslate from '../hooks/useTranslate';
import { languageService } from '../services/settingsService';

export const useSettings = (_?: any) => {
  const {setUserDetails, userDetails, setIsFcmToken} = useUserStore();
  const {t} = useTranslate();

  const saveLanguageMutation = useMutation({
    mutationFn: (abc: {language: string}) => {
      return languageService(abc);
    },
    onError: (error: ErrorResponse) => {
      console.log('ERROR', error);
      const errorMessage =
        (error?.response?.data as ErrorResponse)?.message ||
        'An unknown error occurred';
      Toast.show({
        type: 'error',
        text1: t('error'),
        text2: errorMessage,
      });
    },
    onSuccess: _ => {
      console.log(_);
    }, // no success handling as FCM token is being saved while calling the api;
  });


  return {
    saveLanguageMutation: saveLanguageMutation.mutate,
    languageLoading: saveLanguageMutation.isPending,

   
  };
};
