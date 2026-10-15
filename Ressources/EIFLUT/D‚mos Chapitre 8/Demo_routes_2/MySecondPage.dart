import 'package:flutter/material.dart';

class MySecondPage extends StatelessWidget {
  MySecondPage({this.title});

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
              "Ecran n°2",
              style: TextStyle(fontWeight: FontWeight.bold, fontSize: 40, color: Colors.teal),
            ),
            Padding(padding: EdgeInsets.only(bottom: 20)),
            Text("Appuer sur ce bouton pour passer à l'écran suivant"),
            Padding(padding: EdgeInsets.only(bottom: 20)),
            RaisedButton(
                child: Text('Ecran n°1'),
                color: Colors.green,
                textColor: Colors.white,
                onPressed: () {
                  Navigator.pushNamed(context, '/route1');
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
      backgroundColor: Colors.teal[100],
    );
  }

}