import 'Salarie.dart';

final double _tauxEuroDollar = 1.11;

extension SalarieExtension on Salarie {
  double convertirSalaireDollars() {
    return this.salaire * _tauxEuroDollar;
  }

  static double getTauxEuroDollard() {
    return _tauxEuroDollar;
  }
}