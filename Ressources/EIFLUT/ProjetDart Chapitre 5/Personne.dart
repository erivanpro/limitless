import 'Adresse.dart';

class Personne<T extends Adresse> {
  String nom;
  String _prenom;
  String telephone;
  //String adresse;
  T adresse;

//  Personne(this.nom, this._prenom);

  //Un constructeur pour tous les attributs avec le prénom obligatoire
  Personne(this._prenom, {this.nom, this.telephone, this.adresse});

  //Un constructeur nommé etatCivil qui n'attend que le prénom et le nom
  Personne.etatCivil(this._prenom, this.nom);

  String get prenom => _prenom;

  set prenom(String value) {
    _prenom = value;
  }

  //  Personne(String nom, String prenom) {
//    this.nom = nom;
//    this._prenom = prenom;
//  }

  @override
  String toString() {
    return "l'Personne s'appelle $nom $_prenom";
  }

  String parler(String phrase) => "Une personne parle et dit $phrase";

  T getAdresse() {
    return adresse;
  }

  String getNomEnMajuscule() {
    if (nom != null) {
      return nom.toUpperCase();
    } else {
      throw 'LE NOM NE DOIT PAS ETRE NULL !!';
    }
  }

}