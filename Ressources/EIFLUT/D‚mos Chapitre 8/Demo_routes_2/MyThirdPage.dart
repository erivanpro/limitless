import 'package:flutter/material.dart';

class MyThirdPage extends StatelessWidget {
  MyThirdPage({this.title});

  final String title;

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text('$title'),
        backgroundColor: Colors.blue,
      ),
      body: Center(
        child: Column(
          mainAxisAlignment: MainAxisAlignment.center,
          children: <Widget>[
            Text(
              "Ecran n°3",
              style: TextStyle(fontWeight: FontWeight.bold, fontSize: 40, color: Colors.blue),
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
                child: Text('Ecran n°2'),
                color: Colors.teal,
                textColor: Colors.white,
                onPressed: () {
                  Navigator.pushNamed(context, '/route2');
                }),
          ],
        ),
      ),
      backgroundColor: Colors.blue[100],
    );
  }

}