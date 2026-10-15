class Personne {
  String _nom;
  String _prenom;
  String _age;

  Personne(this._nom, this._prenom, this._age);

  String get age => _age;

  set age(String value) {
    _age = value;
  }

  String get prenom => _prenom;

  set prenom(String value) {
    _prenom = value;
  }

  String get nom => _nom;

  set nom(String value) {
    _nom = value;
  }
}