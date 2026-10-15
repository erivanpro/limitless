import 'dart:io';

import 'package:flutter/cupertino.dart';
import 'package:flutter/material.dart';
import 'package:font_awesome_flutter/font_awesome_flutter.dart';
import 'package:google_fonts/google_fonts.dart';

void main() => runApp(MyApp());

class MyApp extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: 'Flutter Demo',
      theme: ThemeData(
        primarySwatch: Colors.blue,
      ),
      home: MyHomePage(title: 'Icônes Flutter'),
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
        title: Text(title),
      ),
      body: Center(
        child: Column(
          mainAxisAlignment: MainAxisAlignment.center,
          children: <Widget>[
            Row(
              mainAxisAlignment: MainAxisAlignment.center,
              children: <Widget>[
                Text(
                  'Icône Material Design :',
                  style: TextStyle(
                      color: Colors.teal,
                      fontSize: 25,
                      fontWeight: FontWeight.bold
                  ),
                ),
                Padding(padding: EdgeInsets.all(10)),
                Icon(
                  Icons.home,
                  color: Colors.green,
                  size: 35,
                ),
              ],
            ),
            Row(
              mainAxisAlignment: MainAxisAlignment.center,
              children: <Widget>[
                Text(
                  'Icône iOS :',
                  style: TextStyle(
                      color: Colors.blueGrey,
                      fontSize: 25,
                      fontWeight: FontWeight.bold
                  ),
                ),
                Padding(padding: EdgeInsets.all(10)),
                Icon(
                  CupertinoIcons.home,
                  color: Colors.black,
                  size: 35,
                ),
              ],
            ),
            Row(
              mainAxisAlignment: MainAxisAlignment.center,
              children: <Widget>[
                Text(
                  'Icône font_awesome :',
                  style: TextStyle(
                      color: Colors.deepPurple,
                      fontSize: 25,
                      fontWeight: FontWeight.bold
                  ),
                ),
                Padding(padding: EdgeInsets.all(10)),
                Icon(
                  FontAwesomeIcons.home,
                  color: Colors.purple,
                  size: 35,
                ),
              ],
            ),
            Image.asset(
                'Assets/Images/flutter_logo_tm.png',
                width: 150,
            ),
            Image.network('https://www.editions-eni.fr/styles/france/images/logo_ENI.png'),
            Container(
              width: MediaQuery.of(context).size.width / 1.2,
              height: 100,
              color: Colors.black,
              child: Text(
                'Voici un texte quelconque',
                style: TextStyle(
                    color: Colors.brown,
                    fontWeight: FontWeight.bold,
                    fontSize: 50,
                    fontStyle: FontStyle.italic,
                ),
                textAlign: TextAlign.left,
                overflow: TextOverflow.visible,
              ),
            ),
            Padding(padding: EdgeInsets.all(20),),
            Text(
              'Police par défaut',
              style: TextStyle(fontSize: 20),
            ),
            Text(
              'Police Fruktur',
              style: TextStyle(
                  fontSize: 20,
                  color: Colors.purple,
                  fontFamily: 'Fruktur'
              ),
            ),
            Text(
                'Police Pacifico',
                style: GoogleFonts.pacifico(
                  textStyle: TextStyle(
                    fontSize: 20,
                    color: Colors.blue
                  ),
                ),
            ),
          ],
        ),
      ),
    );
  }
}

