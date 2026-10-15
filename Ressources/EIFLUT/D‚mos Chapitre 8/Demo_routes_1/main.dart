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
      home: MyHomePage(title: 'Flutter Demo Routes'),
    );
  }
}

class MyHomePage extends StatelessWidget {
  MyHomePage({Key key, this.title}) : super(key: key);

  final String title;

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text('$title'),
        backgroundColor: Colors.teal,
      ),
      body: Center(
        child: Column(
          mainAxisAlignment: MainAxisAlignment.center,
          children: <Widget>[
            Text(
              "Ecran n°1",
              style: TextStyle(fontWeight: FontWeight.bold, fontSize: 40, color: Colors.teal),
            ),
            Padding(padding: EdgeInsets.only(bottom: 20)),
            Text("Appuer sur ce bouton pour passer à l'écran suivant"),
            Padding(padding: EdgeInsets.only(bottom: 20)),
            RaisedButton(
                child: Text('Suivant'),
                color: Colors.teal,
                textColor: Colors.white,
                onPressed: () {
                  Navigator.push(
                      context,
                      MaterialPageRoute(
                          builder: (BuildContext context) =>
                              MySecondPage(title: title)));
                }),
          ],
        ),
      ),
    );
  }
}

class MySecondPage extends StatelessWidget {
  MySecondPage({this.title});

  final String title;

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text('$title'),
      ),
      body: Center(
        child: Column(
          mainAxisAlignment: MainAxisAlignment.center,
          children: <Widget>[
            Text(
              "Ecran n°2",
              style: TextStyle(fontWeight: FontWeight.bold, fontSize: 40, color: Colors.blue),
            ),
            Padding(padding: EdgeInsets.only(bottom: 20)),
            Text("Appuer sur ce bouton pour revenir à l'écran précédent"),
            Padding(padding: EdgeInsets.only(bottom: 20)),
            RaisedButton(
                child: Text('Précédent'),
                color: Colors.blue,
                textColor: Colors.white,
                onPressed: () {
                  Navigator.pop(context);
                }),
          ],
        ),
      ),
    );
  }
}
