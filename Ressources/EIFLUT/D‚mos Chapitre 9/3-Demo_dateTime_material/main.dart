import 'package:flutter/cupertino.dart';
import 'package:flutter/material.dart';
import 'package:flutter_localizations/flutter_localizations.dart';

void main() => runApp(MyApp());

class MyApp extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: 'Flutter Demo',
      theme: ThemeData.light(),
      home: MyHomePage(title: 'Flutter Demo Date'),
      localizationsDelegates: [
        GlobalMaterialLocalizations.delegate,
        GlobalWidgetsLocalizations.delegate,
      ],
      supportedLocales: [
        const Locale('fr', 'FR'),
      ],
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
  var _date = null;
  TimeOfDay _heure = null;

  Future<Null> _selectionDate() async {
    DateTime _dateChoisie = await showDatePicker(
      context: context,
      initialDate: DateTime.now(),
      firstDate: DateTime(1900),
      lastDate: DateTime(2030),
    );

    if (_dateChoisie != null) {
      setState(() {
        _date = _dateChoisie;
      });
    }
  }

  Future<Null> _selectionHeure() async {
    TimeOfDay _heureChoisi =
        await showTimePicker(context: context, initialTime: TimeOfDay.now());

    if (_heureChoisi != null) {
      setState(() {
        _heure = _heureChoisi;
      });
    }
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
            RaisedButton(
                child: Text('Ouvrir un DatePicker'),
                color: Colors.blue,
                textColor: Colors.white,
                elevation: 8,
                onPressed: () {
                  _selectionDate();
                }),
            RaisedButton(
                child: Text('Ouvrir un TimePicker'),
                color: Colors.green,
                textColor: Colors.white,
                elevation: 8,
                onPressed: () {
                  _selectionHeure();
                }),
            Padding(padding: EdgeInsets.only(bottom: 20)),
            Text(
              'Voici la date choisie:',
            ),
            Text(
              _date == null
                  ? 'Aucune date choisie'
                  : '${_date.day}/${_date.month}/${_date.year}',
              style: _date == null
                  ? TextStyle(color: Colors.blue)
                  : TextStyle(
                      color: Colors.blue,
                      fontWeight: FontWeight.bold,
                      fontSize: 40),
            ),
            Padding(padding: EdgeInsets.only(bottom: 20)),
            Text(
              'Voici l\'heure choisie:',
            ),
            Text(
              _heure == null
                  ? 'Aucune heure choisie'
                  : '${_heure.format(context)}',
              style: _heure == null
                  ? TextStyle(color: Colors.green)
                  : TextStyle(
                      color: Colors.green,
                      fontWeight: FontWeight.bold,
                      fontSize: 40),
            ),
          ],
        ),
      ),
    );
  }
}
