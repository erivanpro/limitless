abstract class Adresse {
  int _numeroDeVoie;
  String _nomDeLaVoie;
  String _nomDeLaCommune;

  Adresse(int numeroDeVoie, String nomDeLaVoie,
      String nomDeLaCommune) {
    this._numeroDeVoie = numeroDeVoie;
    this._nomDeLaVoie = nomDeLaVoie;
    this._nomDeLaCommune = nomDeLaCommune;
  }

  String get nomDeLaCommune => _nomDeLaCommune;

  set nomDeLaCommune(String value) {
    _nomDeLaCommune = value;
  }

  String get nomDeLaVoie => _nomDeLaVoie;

  set nomDeLaVoie(String value) {
    _nomDeLaVoie = value;
  }

  int get numeroDeVoie => _numeroDeVoie;

  set numeroDeVoie(int value) {
    _numeroDeVoie = value;
  }

}