import 'Marcheur.dart';
import 'Personne.dart';

class Salarie extends Personne implements Marcheur{
  double salaire;

  Salarie(String prenom, this.salaire) : super(prenom);


//  String parler(String phrase) {
//    return super.parler(phrase) + ", il s'agit d'un salarié";
//  }

  String parler(String phrase) {
    return "Un salarié parle et dit $phrase";
  }

  @override
  void marcher() {
    print("Je marche comme un salarié !");
  }

}