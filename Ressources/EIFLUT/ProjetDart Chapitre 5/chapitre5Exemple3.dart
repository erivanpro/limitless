import 'AdresseFR.dart';
import 'AdresseUS.dart';
import 'Personne.dart';
import 'Salarie.dart';
import 'Utilisateur.dart';
import 'SalarieExtension.dart';

main() {
  Salarie s1 = Salarie('Paul', 1500);

  s1.nom = "Durand";
  s1.telephone = "0203040506";

  print("Le salarié s s'appelle : ${s1.prenom} ${s1.nom}, il gagne ${s1.salaire} par mois");

  Personne p1 = Salarie("John", 3000);

  print(p1.runtimeType);

  Personne p2 = s1;

  Salarie s2 = p1;

  if (p1.runtimeType == Salarie) {
    Salarie s3 = p1;
    print("Salaire de s3 : ${s3.salaire}");
  }

  print(s1.parler("bonjour"));

  Utilisateur u2 = Utilisateur("Bob", "login", "1234");

  s1.marcher();

  //Erreur
  //Utilisateur u1 = p1;

  u2.metier = "Développeur";

  List<String> competences = ["Flutter", "Dart", "Java", "c++"];

  print(u2.competence(competences));
  
  print("Le salaire de s1 est de ${s1.convertirSalaireDollars().toStringAsFixed(2)} dollars");

  print("Le taux euro/dollar est de : ${SalarieExtension.getTauxEuroDollard()}");

  AdresseFR aFr = AdresseFR('44000', 110, 'rue de la Paix', "NANTES");

  AdresseUS aUs = AdresseUS('3302', 'CA', 150, "Hollywood", "Los Angeles");

  Personne<AdresseFR> p3 = Personne("John", nom: "Doeuf", adresse: aFr);

  Personne<AdresseUS> p4 = Personne("John", nom: "Doe", adresse: aUs);

  //Personne<String> p5 = Personne("James");

  print(p3.getAdresse().runtimeType);
  print(p4.getAdresse().runtimeType);


}