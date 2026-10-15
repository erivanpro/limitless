import { USER_SELECTED_LANGUAGE } from "../user/enums/user-onboarding-status.enum";

export const NOTIFICATIONS_MESSAGES = {
  BOOKING_CREATED: (
    name: string,
    car_name: string,
    lang: USER_SELECTED_LANGUAGE
  ) => ({
    message:
      lang === USER_SELECTED_LANGUAGE.FRENCH
        ? `${name} a réservé votre voiture ${car_name}`
        : `${name} has booked your car ${car_name}`,
  }),
  NEW_MESSAGE: (name: string, lang: USER_SELECTED_LANGUAGE) => ({
    message:
      lang === USER_SELECTED_LANGUAGE.FRENCH
        ? `${name} vient de vous envoyer un message`
        : `${name} just sent you a message`,
  }),
  PICKUP_COMPLETE: (lang: USER_SELECTED_LANGUAGE) => ({
    message:
      lang === USER_SELECTED_LANGUAGE.FRENCH
        ? `La prise en charge de votre voiture vient de commencer`
        : `Your car pickup has just started`,
  }),
  DROP_OFF_COMPLETE: (lang: USER_SELECTED_LANGUAGE) => ({
    message:
      lang === USER_SELECTED_LANGUAGE.FRENCH
        ? `Le retour de votre voiture est terminé`
        : `Your car drop off has been finished`,
  }),
  BOOKING_COMPLETED: (car_name: string, lang: USER_SELECTED_LANGUAGE) => ({
    message:
      lang === USER_SELECTED_LANGUAGE.FRENCH
        ? `Votre réservation de ${car_name} s'est terminée avec succès`
        : `Your booking of ${car_name} has been finished successfully`,
  }),
  BOOKING_CANCELLED: (
    car_name: string,
    user_name: string,
    lang: USER_SELECTED_LANGUAGE
  ) => ({
    message:
      lang === USER_SELECTED_LANGUAGE.FRENCH
        ? `Votre réservation de ${car_name} a été annulée par ${user_name}`
        : `Your booking of ${car_name} has been cancelled by ${user_name}`,
  }),
  PAYMENT_COMPLETED: (car_name: string, lang: USER_SELECTED_LANGUAGE) => ({
    message:
      lang === USER_SELECTED_LANGUAGE.FRENCH
        ? `Votre paiement pour ${car_name} a été effectué`
        : `Your payment of ${car_name} has been completed`,
  }),
  PAYMENT_FAILED: (car_name: string, lang: USER_SELECTED_LANGUAGE) => ({
    message:
      lang === USER_SELECTED_LANGUAGE.FRENCH
        ? `Votre paiement pour ${car_name} a échoué`
        : `Your payment of ${car_name} has been failed`,
  }),
  REVIEW_PENDING: (
    user_name: string,
    car_name: string,
    lang: USER_SELECTED_LANGUAGE
  ) => ({
    message:
      lang === USER_SELECTED_LANGUAGE.FRENCH
        ? `Bonjour ${user_name}, votre avis pour la voiture ${car_name} est toujours en attente. Nous apprécierions beaucoup votre retour !`
        : `Hi ${user_name}, your review for the ${car_name} is still pending. We'd greatly appreciate your feedback!`,
  }),
  REVIEW_COMPLETED: (
    car_name: string,
    user_name: string,
    lang: USER_SELECTED_LANGUAGE
  ) => ({
    message:
      lang === USER_SELECTED_LANGUAGE.FRENCH
        ? `Votre voiture ${car_name} a été évaluée par ${user_name}`
        : `Your car ${car_name} has been reviewed by ${user_name}`,
  }),
  REFUND_COMPLETED: (car_name: string, lang: USER_SELECTED_LANGUAGE) => ({
    message:
      lang === USER_SELECTED_LANGUAGE.FRENCH
        ? `Votre remboursement pour ${car_name} sera reçu dans un délai de 5 à 10 jours ouvrables`
        : `Your refund for ${car_name} will be received within 5-10 working days`,
  }),
  CAR_EXPIRED: (car_name: string, lang: USER_SELECTED_LANGUAGE) => ({
    message:
      lang === USER_SELECTED_LANGUAGE.FRENCH
        ? `Votre voiture ${car_name} a été dépubliée en raison de l'expiration de sa disponibilité, veuillez la renouveler`
        : `Your car ${car_name} has been unpublished due to expiration of its availability, please renew it`,
  }),
};
