import 'package:flutter/material.dart';

void main() => runApp(MyApp());

class MyApp extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: 'Flutter Demo',
      theme: ThemeData(
        primarySwatch: Colors.blue,
      ),
      home: MyHomePage(title: 'Flutter Demo ListView'),
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
  List<Voiture> _voitures = [
    Voiture('Renault', 'Twingo', Image.asset('images/car1.png')),
    Voiture('Citroën', 'C5', Image.asset('images/car2.png')),
    Voiture('Ford', 'Focus', Image.asset('images/car3.png')),
    Voiture('Porsche', 'Carrera', Image.asset('images/car2.png')),
    Voiture('Ferrari', 'F340', Image.asset('images/car5.png')),
    Voiture('Renault', 'Twingo', Image.asset('images/car1.png')),
    Voiture('Citroën', 'C5', Image.asset('images/car2.png')),
    Voiture('Ford', 'Focus', Image.asset('images/car3.png')),
    Voiture('Porsche', 'Carrera', Image.asset('images/car4.png')),
    Voiture('Ferrari', 'F340', Image.asset('images/car5.png')),
    Voiture('Renault', 'Twingo', Image.asset('images/car1.png')),
    Voiture('Citroën', 'C5', Image.asset('images/car2.png')),
    Voiture('Ford', 'Focus', Image.asset('images/car3.png')),
    Voiture('Porsche', 'Carrera', Image.asset('images/car4.png')),
    Voiture('Ferrari', 'F340', Image.asset('images/car5.png')),
  ];

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text(widget.title),
        backgroundColor: Colors.cyan,
      ),
      body: ListView.builder(
          itemCount: _voitures.length,
          itemBuilder: (context, index) {
            final item = _voitures[index];
            return Dismissible(
              key: Key(item.modele),
              background: Container(
                child: Icon(
                  Icons.delete,
                  size: 40,
                  color: Colors.white,
                ),
                color: Colors.cyan,
              ),
              onDismissed: (direction) {
                setState(() {
                  _voitures.removeAt(index);
                });
                Scaffold.of(context).showSnackBar(SnackBar(
                    content: Text('Voiture ${item.modele} supprimée !')));
              },
              child: Card(
                margin: EdgeInsets.fromLTRB(20, 10, 20, 5),
                child: Container(
                  height: 50,
                  decoration: BoxDecoration(
                    boxShadow: [
                      BoxShadow(
                          color: Colors.grey,
                          blurRadius: 10,
                          offset: Offset(-15.0, 0.0))
                    ],
                    gradient: LinearGradient(
                        colors: [Colors.cyan[50], Colors.cyan[600]],
                        begin: Alignment.centerLeft,
                        end: Alignment.centerRight),
                  ),
                  child: InkWell(
                    child: Row(
                      mainAxisAlignment: MainAxisAlignment.spaceEvenly,
                      children: <Widget>[
                        Text(
                          '${item.modele}',
                          style: TextStyle(
                              color: Colors.cyan[700],
                              fontWeight: FontWeight.bold,
                              fontSize: 30),
                        ),
                        Text(
                          '${item.marque}',
                          style: TextStyle(color: Colors.white),
                        ),
                      ],
                    ),
                    onTap: () {
                      showDialog(
                          context: context,
                          builder: (BuildContext context) {
                            return AlertDialog(
                              backgroundColor: Colors.cyan,
                              title: Text(
                                'Photo de la voiture ${item.modele}',
                                style: TextStyle(color: Colors.white),
                              ),
                              content: item.image,
                            );
                          });
                    },
                  ),
                ),
              ),
            );
          }),
    );
  }
}

class Voiture {
  String marque;
  String modele;
  Image image;

  Voiture(this.marque, this.modele, this.image);
}
