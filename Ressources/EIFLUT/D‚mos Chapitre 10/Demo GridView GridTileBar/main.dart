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
      home: MyHomePage(title: 'Flutter Demo GridView'),
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
      body: GridView.builder(
          gridDelegate:
              SliverGridDelegateWithFixedCrossAxisCount(crossAxisCount: 3),
          itemCount: _voitures.length,
          itemBuilder: (context, index) {
            final item = _voitures[index];
            return GridTileBar(
              backgroundColor: Colors.cyan,
              subtitle: Text(
                '${item.modele}',
                style: TextStyle(
                    color: Colors.white,
                    fontWeight: FontWeight.bold,
                    fontSize: 20),
                textAlign: TextAlign.end,
              ),
              title: Container(
                width: MediaQuery.of(context).size.width * 0.25,
                child: item.image,
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
