import 'Adresse.dart';
import 'ExceptionPerso.dart';

class AdresseFR extends Adresse{
  String _codePostal;

  AdresseFR(String codePostal, int numeroDeVoie, String nomDeLaVoie,
      String nomDeLaCommune ) : super(numeroDeVoie, nomDeLaVoie, nomDeLaCommune) {
    this.codePostal = codePostal;
  }

  String get codePostal => _codePostal;

  set codePostal(String value) {
    if (value.length == 5) {
      _codePostal = value;
    } else {
      throw ExceptionPerso(value.length);
    }
  }
}