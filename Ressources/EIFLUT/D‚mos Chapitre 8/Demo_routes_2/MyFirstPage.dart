import 'package:flutter/material.dart';

class MyFirstPage extends StatelessWidget {
  MyFirstPage({this.title});

  final String title;

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text('$title'),
        backgroundColor: Colors.green,
      ),
      body: Center(
        child: Column(
          mainAxisAlignment: MainAxisAlignment.center,
          children: <Widget>[
            Text(
              "Ecran n°1",
              style: TextStyle(
                  fontWeight: FontWeight.bold,
                  fontSize: 40,
                  color: Colors.green),
            ),
            Padding(padding: EdgeInsets.only(bottom: 20)),
            Text("Appuer sur un bouton pour passer à un autre écran"),
            Padding(padding: EdgeInsets.only(bottom: 20)),
            RaisedButton(
                child: Text('Ecran n°2'),
                color: Colors.teal,
                textColor: Colors.white,
                onPressed: () {
                  Navigator.pushNamed(context, '/route2');
                }),
            RaisedButton(
                child: Text('Ecran n°3'),
                color: Colors.blue,
                textColor: Colors.white,
                onPressed: () {
                  Navigator.pushNamed(context, '/route3');
                }),
          ],
        ),
      ),
      backgroundColor: Colors.green[100],
    );
  }
}
