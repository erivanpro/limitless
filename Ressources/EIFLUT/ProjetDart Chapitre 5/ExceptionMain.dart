import 'Adresse.dart';
import 'AdresseFR.dart';
import 'ExceptionPerso.dart';
import 'Personne.dart';

void main() {

  String nom = null;

  try {
    nom.toUpperCase();
  } catch (e) {
    print("Problème sur toUpperCase : ${e.toString()}");
  }

  Personne p1 = Personne("Julien");

  try {
    print(p1.getNomEnMajuscule());
  } catch (e) {
    print(e);
  } finally {
    print("Je m'exécute quoiqu'il arrive !");
  }

  try {
    Adresse a1 = AdresseFR('111', 1, 'Rue de la paie', 'NANTES');
  } on ExceptionPerso catch (e) {
    print(' ${e.message} La valeur saisie fait ${e.source} caractères. Il manque ${e.offset} caractères.');
  } catch  (e) {
    print("Autre exception");
  }

}