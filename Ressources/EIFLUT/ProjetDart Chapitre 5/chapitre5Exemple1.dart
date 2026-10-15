void main() {
  //Point d'entrée du programme
  afficher();
  afficher2();
  String _prenomRecupere = obtenirUnPrenom();
  print(_prenomRecupere);

  print(mettrePrenomEnMajuscule("Julien"));
  print(mettrePrenomEnMajuscule2("Hugo"));

  var prenoms = ["Julien", "Jules", "Hugo"];
  prenoms.forEach((item) {
    print("${prenoms.indexOf(item)}: $item");
  });

  String nom = "TRILLARD";
  String prenom = "Julien";
  int age = 38;
  //Si on ne connait pas l'âge
  fonctionAvecParametreOptionnel(nom, prenom);
  //Si on le connait
  fonctionAvecParametreOptionnel(nom, prenom, age);


}
//La fonction afficher()
void afficher() {
  print("Hello World !");
}
//peut s'écrire aussi :
void afficher2() => print("Hello World !");

String obtenirUnPrenom() {
  String _prenom = "Julien";

  return _prenom;
}

//Avant
String mettrePrenomEnMajuscule(String prenom) {
  String _retour = "Hello ${prenom.toUpperCase()} !";
  return _retour;
}
//Equivalent en fonction fléchée :
String mettrePrenomEnMajuscule2(String prenom) => "Hello ${prenom.toUpperCase()} !";


void fonctionAvecParametreOptionnel(String nom, String prenom, [int age]) {
  if(age != null) {
    print("nom : $nom, prénom : $prenom, âge : $age");
  } else {
    print("nom : $nom, prénom : $prenom");
  }
}