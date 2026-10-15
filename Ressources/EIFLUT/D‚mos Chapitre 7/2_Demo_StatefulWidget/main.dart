import 'dart:math';
import 'dart:ui' as ui;
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
      home: Accueil(
        title: 'Stateful',
        color: Colors.orange,
      ),
    );
  }
}

class Accueil extends StatefulWidget {
  Accueil({Key key, this.title, this.color}) : super(key: key);

  final String title;
  Color color;

  @override
  _AccueilState createState() => _AccueilState();
}

class _AccueilState extends State<Accueil> {
  int _red = null;
  int _green = null;
  int _blue = null;

  void _changementCouleur() {
    _red = Random.secure().nextInt(256);
    _green = Random.secure().nextInt(256);
    _blue = Random.secure().nextInt(256);
    setState(() {
      widget.color = Color.fromRGBO(_red, _green, _blue, 1);
    });
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text(widget.title),
        backgroundColor: widget.color,
      ),
      body: Center(
        child: Column(
          mainAxisAlignment: MainAxisAlignment.center,
          children: <Widget>[
            Text(
              'La couleur affichée est :',
            ),
            Container(
              width: MediaQuery.of(context).size.width * 0.8,
              height: MediaQuery.of(context).size.height * 0.13,
              color: widget.color,
              child: Center(
                child: Text(
                  'R(${widget.color.red}), G(${widget.color.green}), B(${widget.color.blue})',
                  textAlign: TextAlign.center,
                  style: TextStyle(
                      color: Colors.white,
                      fontSize: 30,
                      fontWeight: FontWeight.bold),
                ),
              ),
            ),
//            CustomPaint(
//              size: Size(300, 100),
//              painter: Ligne(color: widget.color),
//            ),
          ],
        ),
      ),
      floatingActionButton: FloatingActionButton(
        onPressed: _changementCouleur,
        tooltip: 'Increment',
        child: Icon(Icons.color_lens),
        backgroundColor: widget.color,
      ),
    );
  }
}

class Ligne extends CustomPainter {
  Ligne({this.color});
  Color color = null;
  @override
  void paint(Canvas canvas, Size size) {
    final pointMode = ui.PointMode.polygon;
    final points = [Offset(150, 1), Offset(150, 255), Offset(300, 255)];
    final paint = Paint()
      ..color = (color == null ? Colors.black : color)
      ..strokeWidth = 4
      ..strokeCap = StrokeCap.round;
    canvas.drawPoints(pointMode, points, paint);
  }

  @override
  bool shouldRepaint(CustomPainter oldDelegate) {
    return false;
  }
}
