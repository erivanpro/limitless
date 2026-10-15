import 'package:flutter/material.dart';
import 'package:fluttersqflite/personne.dart';

void main() => runApp(MyApp());

class MyApp extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: 'Flutter Demo',
      theme: ThemeData(
        primarySwatch: Colors.blue,
      ),
      home: MyHomePage(title: 'Flutter Demo SQfLite'),
    );
  }
}

class MyHomePage extends StatefulWidget {
  MyHomePage({Key key, this.title}) : super(key: key);

  final String title;

  @override
  _MyHomePageState createState() => _MyHomePageState();
}

class _MyHomePageState extends State<MyHomePage> {
  Map<String, dynamic> mapPersonne = {
    'nom': 'DOE',
    'prenom': 'John',
    'age': '35'
  };
  Map<String, dynamic> mapPersonneRecuperee;
  Personne personneEnregistree = Personne();
  Personne personneRecuperee = Personne();
  PersonneProvider provider;

  Future<void> enregistrer() async {
    int id = await provider.insert(personneEnregistree);
    mapPersonneRecuperee = {'id': id};
    personneRecuperee = Personne.fromMap(mapPersonneRecuperee);
    showDialog(
        context: context,
        builder: (BuildContext context) {
          return AlertDialog(
            title: Text('Enregistrement'),
            content: Text('Les données ont été enregistrées !'),
          );
        });
  }

  Future<void> recuperer() async {
    if (personneRecuperee.toMap()['id'] != null) {
      personneRecuperee =
          await provider.getPersonne(personneRecuperee.toMap()['id']);
      setState(() {});
    } else {
      showDialog(
          context: context,
          builder: (BuildContext context) {
            return AlertDialog(
              title: Text('Récupération'),
              content: Text('Aucune donnée à récupérer !'),
            );
          });
    }
  }

  Future<void> supprimer() async {
    await provider.delete(personneRecuperee.toMap()['id']);
    setState(() {
      personneRecuperee = Personne();
    });
    showDialog(
        context: context,
        builder: (BuildContext context) {
          return AlertDialog(
            title: Text('Suppression'),
            content: Text('Les données ont été supprimées !'),
          );
        });
  }

  Future<PersonneProvider> getInstance() async {
    provider = await PersonneProvider.instance;
  }

  @override
  void initState() {
    super.initState();
    personneEnregistree = Personne.fromMap(mapPersonne);
    getInstance();
  }

  @override
  void dispose() {
    super.dispose();
    provider.close();
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text(widget.title),
      ),
      body: Center(
        child: Column(
          mainAxisAlignment: MainAxisAlignment.spaceAround,
          children: <Widget>[
            Icon(
              Icons.account_circle,
              size: 80.0,
              color: Colors.blue,
            ),
            Text('Données soumises :'),
            Container(
              height: MediaQuery.of(context).size.height * 0.25,
              width: MediaQuery.of(context).size.width * 0.8,
              decoration: BoxDecoration(
                  color: Colors.grey,
                  shape: BoxShape.rectangle,
                  borderRadius: BorderRadius.circular(20.0)),
              child: Column(
                mainAxisAlignment: MainAxisAlignment.spaceEvenly,
                children: <Widget>[
                  Row(
                    mainAxisAlignment: MainAxisAlignment.center,
                    children: <Widget>[
                      Text(
                        'Nom : ',
                        style: TextStyle(color: Colors.white),
                      ),
                      Text('${personneEnregistree.toMap()['nom']}',
                          style: TextStyle(
                              fontSize: 30.0,
                              color: Colors.white,
                              fontWeight: FontWeight.bold)),
                    ],
                  ),
                  Row(
                    mainAxisAlignment: MainAxisAlignment.center,
                    children: <Widget>[
                      Text(
                        'Prénom : ',
                        style: TextStyle(color: Colors.white),
                      ),
                      Text('${personneEnregistree.toMap()['prenom']}',
                          style: TextStyle(
                              fontSize: 30.0,
                              color: Colors.white,
                              fontWeight: FontWeight.bold)),
                    ],
                  ),
                  Row(
                    mainAxisAlignment: MainAxisAlignment.center,
                    children: <Widget>[
                      Text(
                        'Age : ',
                        style: TextStyle(color: Colors.white),
                      ),
                      Text('${personneEnregistree.toMap()['age']}',
                          style: TextStyle(
                              fontSize: 30.0,
                              color: Colors.white,
                              fontWeight: FontWeight.bold)),
                    ],
                  ),
                ],
              ),
            ),
            Text('Données récupérées :'),
            Container(
              height: MediaQuery.of(context).size.height * 0.25,
              width: MediaQuery.of(context).size.width * 0.8,
              decoration: BoxDecoration(
                  color: Colors.blue,
                  shape: BoxShape.rectangle,
                  borderRadius: BorderRadius.circular(20.0)),
              child: Column(
                mainAxisAlignment: MainAxisAlignment.spaceEvenly,
                children: <Widget>[
                  Row(
                    mainAxisAlignment: MainAxisAlignment.center,
                    children: <Widget>[
                      Text(
                        'id : ',
                        style: TextStyle(color: Colors.white),
                      ),
                      personneRecuperee.toMap()['id'] != null
                          ? Text('${personneRecuperee.toMap()['id']}',
                              style: TextStyle(
                                  fontSize: 25.0,
                                  color: Colors.white,
                                  fontWeight: FontWeight.bold))
                          : Text(
                              'Aucune donnée',
                              style: TextStyle(color: Colors.white),
                            )
                    ],
                  ),
                  Row(
                    mainAxisAlignment: MainAxisAlignment.center,
                    children: <Widget>[
                      Text(
                        'Nom : ',
                        style: TextStyle(color: Colors.white),
                      ),
                      personneRecuperee.toMap()['nom'] != null
                          ? Text('${personneRecuperee.toMap()['nom']}',
                              style: TextStyle(
                                  fontSize: 25.0,
                                  color: Colors.white,
                                  fontWeight: FontWeight.bold))
                          : Text(
                              'Aucune donnée',
                              style: TextStyle(color: Colors.white),
                            )
                    ],
                  ),
                  Row(
                    mainAxisAlignment: MainAxisAlignment.center,
                    children: <Widget>[
                      Text(
                        'Prénom : ',
                        style: TextStyle(color: Colors.white),
                      ),
                      personneRecuperee.toMap()['prenom'] != null
                          ? Text('${personneRecuperee.toMap()['prenom']}',
                              style: TextStyle(
                                  fontSize: 25.0,
                                  color: Colors.white,
                                  fontWeight: FontWeight.bold))
                          : Text(
                              'Aucune donnée',
                              style: TextStyle(color: Colors.white),
                            )
                    ],
                  ),
                  Row(
                    mainAxisAlignment: MainAxisAlignment.center,
                    children: <Widget>[
                      Text(
                        'Age : ',
                        style: TextStyle(color: Colors.white),
                      ),
                      personneRecuperee.toMap()['age'] != null
                          ? Text('${personneRecuperee.toMap()['age']}',
                              style: TextStyle(
                                  fontSize: 25.0,
                                  color: Colors.white,
                                  fontWeight: FontWeight.bold))
                          : Text(
                              'Aucune donnée',
                              style: TextStyle(color: Colors.white),
                            )
                    ],
                  ),
                ],
              ),
            ),
            Divider(),
            Row(
              mainAxisAlignment: MainAxisAlignment.spaceEvenly,
              children: <Widget>[
                FlatButton(
                    onPressed: enregistrer,
                    color: Colors.green,
                    textColor: Colors.white,
                    child: Text('Enregistrer')),
                FlatButton(
                    onPressed: recuperer,
                    color: Colors.blue,
                    textColor: Colors.white,
                    child: Text('Lire les données')),
                FlatButton(
                    onPressed: supprimer,
                    color: Colors.red,
                    textColor: Colors.white,
                    child: Icon(
                      Icons.delete,
                      color: Colors.white,
                    ))
              ],
            )
          ],
        ),
      ),
    );
  }
}
