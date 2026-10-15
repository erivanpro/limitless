import 'AdresseFR.dart';
import 'Personne.dart';

void main() {

  String nom = "TRILLARD";
  String prenom = "Julien";
  String telephone = "0203040506";
  String adresse = "ENI Edition, Nantes";

  //Appel du constructeur en utilsant différents paramètres
  Personne u1 = Personne(prenom);
  Personne u2 = Personne(prenom, nom: nom);
  //Personne u3 = Personne(prenom, nom: nom, adresse: adresse, telephone: telephone);
  AdresseFR a3 = AdresseFR("44000", 15, "Avenue de la république", "Nantes");
  Personne u3 = Personne(prenom, nom: nom, adresse: a3, telephone: telephone);
  //Personne u5 = Personne(prenom, telephone: telephone, nom: nom, adresse: adresse);
  //Utilisation du constructeur nommé
  Personne u4 = Personne.etatCivil(prenom, nom);

  print("Le numéro de téléphone de u3 est : ${u3.telephone}");

  print("Le prénom de u1 est : ${u1.prenom}");

  //print("nom : ${u.getNom()}, prénom : ${u.prenom}");
  print(u1.toString());



  //Personne u2 = Personne();

  print(u1.nom);

}