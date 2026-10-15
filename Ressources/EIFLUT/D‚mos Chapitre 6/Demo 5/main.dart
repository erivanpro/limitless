import 'package:flutter/cupertino.dart';
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
      home: MyHomePage(title: 'Flutter Buttons'),
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
  String _choixBtn = 'Aucun bouton';

  void _quelBouton(String btn) {
    setState(() {
      switch (btn) {
        case 'fab':
          {
            _choixBtn = "FloatingActionButton";
          }
          break;
        case 'raised':
          {
            _choixBtn = 'RaisedButton';
          }
          break;
        case 'flat':
          {
            _choixBtn = 'FlatButton';
          }
          break;
        case 'icon':
          {
            _choixBtn = 'IconButton';
          }
          break;
        case 'iconCircle':
          {
            _choixBtn = 'IconButton avec fond';
          }
          break;
        case 'outline':
          {
            _choixBtn = 'OutlineButton';
          }
          break;
        case 'cupertino':
          {
            _choixBtn = 'CupertinoButton';
          }
          break;
      }
    });
  }

  void _fabOnPressed() {
    _quelBouton('fab');
  }

  void _raisedButtonOnPressed() {
    _quelBouton('raised');
  }

  void _flatButtonOnPressed() {
    _quelBouton('flat');
  }

  void _iconButtonOnPressed() {
    _quelBouton('icon');
  }

  void _iconButtonCircleOnPressed() {
    _quelBouton('iconCircle');
  }

  void _outlineButtonOnPressed() {
    _quelBouton('outline');
  }

  void _cupertinoOnPressed() {
    _quelBouton('cupertino');
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text(widget.title),
      ),
      body: Center(
        child: Column(
          mainAxisAlignment: MainAxisAlignment.center,
          children: <Widget>[
            Text(
              'Le bouton appuyé est : ',
            ),
            Text(
              '$_choixBtn',
              style: TextStyle(
                  color: Colors.red, fontSize: 30, fontWeight: FontWeight.bold),
            ),
            Padding(padding: EdgeInsets.all(30)),
            RaisedButton(
              onPressed: _raisedButtonOnPressed,
              child: Text(
                'RaisedButton',
                style: TextStyle(color: Colors.white),
              ),
              color: Colors.red,
              elevation: 8,
            ),
            FlatButton(
              onPressed: _flatButtonOnPressed,
              child: Text(
                'FlatButton',
              ),
              color: Colors.green,
              textColor: Colors.white,
              shape: RoundedRectangleBorder(
                  borderRadius: BorderRadius.circular(30.0)),
            ),
            IconButton(
              icon: Icon(Icons.accessibility),
              onPressed: _iconButtonOnPressed,
              color: Colors.blue,
              iconSize: 40,
            ),
            Ink(
              decoration: const ShapeDecoration(
                shape: CircleBorder(),
                color: Colors.blueAccent,
              ),
              child: IconButton(
                icon: Icon(Icons.accessibility_new),
                onPressed: _iconButtonCircleOnPressed,
                color: Colors.white,
              ),
            ),
            OutlineButton(
              onPressed: _outlineButtonOnPressed,
              child: Text(
                  'OutlineButton',
                  style: TextStyle(color: Colors.deepPurple),
              ),
              borderSide: BorderSide(
                color: Colors.deepPurple,
              ),
            ),
            CupertinoButton(
                child: Text('CupertinoButton'),
                onPressed: _cupertinoOnPressed,
                color: Colors.teal,
            )
          ],
        ),
      ),
      floatingActionButton: FloatingActionButton(
        onPressed: _fabOnPressed,
        tooltip: 'Increment',
        child: Icon(Icons.add),
        backgroundColor: Colors.red,
      ),
    );
  }
}
