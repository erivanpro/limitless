import 'Personne.dart';
import 'Profession.dart';

class Utilisateur extends Personne with Profession {
  String login;
  String motDePasse;

  Utilisateur(String prenom, this.login, this.motDePasse) : super('prenom');


}