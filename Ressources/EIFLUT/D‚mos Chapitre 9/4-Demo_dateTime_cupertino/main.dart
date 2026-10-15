
import 'package:flutter/material.dart';
import 'package:flutter/cupertino.dart';

void main() => runApp(MyApp());

class MyApp extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: 'Flutter Demo',
      theme: ThemeData(
        primarySwatch: Colors.blue,
      ),
      home: MyHomePage(title: 'Flutter Demo CupertinoDatePicker'),
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
  DateTime _date = null;
  TimeOfDay _heure = null;


  Widget _datePicker() {
    return CupertinoDatePicker(
        mode: CupertinoDatePickerMode.date,
        initialDateTime: DateTime.now(),
        minimumDate: DateTime(1900),
        maximumDate: DateTime(2030),
        onDateTimeChanged: (value) {
          setState(() {
            _date = value;
          });
        });
  }

  Widget _timePicker() {
    return CupertinoDatePicker(
        minuteInterval: 1,
        mode: CupertinoDatePickerMode.time,
        use24hFormat: true,
      initialDateTime: DateTime.now(),
      onDateTimeChanged: (value) {
          setState(() {
            _heure = TimeOfDay.fromDateTime(value);
          });
      },
        );
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
                  showModalBottomSheet(
                      context: context,
                      builder: (BuildContext context) {
                        return Container(
                          height: MediaQuery.of(context).size.height/3,
                          child: _datePicker(),
                        );
                      });
                }
            ),
            RaisedButton(
                child: Text('Ouvrir un TimePicker'),
                color: Colors.green,
                textColor: Colors.white,
                elevation: 8,
                onPressed: () {
                  showModalBottomSheet(
                      context: context,
                      builder: (BuildContext context) {
                        return Container(
                          height: MediaQuery.of(context).size.height/3,
                          child: _timePicker(),
                        );
                      });
                }
            ),
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
                  : '${_heure.hour}:${_heure.minute}',
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
      backgroundColor: Colors.white,
    );
  }
}
