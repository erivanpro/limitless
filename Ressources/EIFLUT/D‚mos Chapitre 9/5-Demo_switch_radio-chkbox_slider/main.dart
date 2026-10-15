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
      home: MyHomePage(title: 'Flutter Demo choix'),
    );
  }
}

class MyHomePage extends StatefulWidget {
  MyHomePage({Key key, this.title}) : super(key: key);

  final String title;

  @override
  _MyHomePageState createState() => _MyHomePageState();
}

enum RadioChoix { Voiture, Avion, Bateau }

class _MyHomePageState extends State<MyHomePage> {
  bool _choixSwitch = false;
  RadioChoix _choixRadio = RadioChoix.Avion;
  Icon _iconRadio = Icon(Icons.airplanemode_active);
  Map _mapTransport = {
    RadioChoix.Voiture: false,
    RadioChoix.Avion: false,
    RadioChoix.Bateau: false,
  };
  double _choixSlider = 5.0;

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
              'Choix de l\'utilisateur',
              style: TextStyle(color: Colors.blueGrey, fontSize: 38),
            ),
            Divider(),
            Text(
              'Switch',
              style: TextStyle(fontWeight: FontWeight.bold, fontSize: 30),
            ),
            Row(
              mainAxisAlignment: MainAxisAlignment.center,
              children: <Widget>[
                Switch(
                    value: _choixSwitch,
                    activeColor: Colors.green,
                    activeTrackColor: Colors.amber,
                    inactiveTrackColor: Colors.red[200],
                    inactiveThumbColor: Colors.red,
                    onChanged: (value) {
                      setState(() {
                        _choixSwitch = value;
                      });
                    }),
                CupertinoSwitch(
                    value: _choixSwitch,
                    activeColor: Colors.cyan,
                    onChanged: (value) {
                      setState(() {
                        _choixSwitch = value;
                      });
                    }),
              ],
            ),
            Text(_choixSwitch ? 'Pour' : 'Contre'),
            Divider(),
            Text(
              'Radio',
              style: TextStyle(fontWeight: FontWeight.bold, fontSize: 30),
            ),
            Row(
              mainAxisAlignment: MainAxisAlignment.center,
              children: <Widget>[
                Radio(
                    value: RadioChoix.Voiture,
                    groupValue: _choixRadio,
                    activeColor: Colors.green,
                    onChanged: (value) {
                      setState(() {
                        _choixRadio = value;
                        _iconRadio = Icon(Icons.directions_car);
                      });
                    }),
                Text('Voiture', style: _choixRadio == RadioChoix.Voiture ? TextStyle(color: Colors.green, fontWeight: FontWeight.bold) : TextStyle()),
                Radio(
                    value: RadioChoix.Avion,
                    groupValue: _choixRadio,
                    activeColor: Colors.green,
                    onChanged: (value) {
                      setState(() {
                        _choixRadio = value;
                        _iconRadio = Icon(Icons.airplanemode_active);
                      });
                    }),
                Text('Avion', style: _choixRadio == RadioChoix.Avion ? TextStyle(color: Colors.green, fontWeight: FontWeight.bold) : TextStyle()),
                Radio(
                    value: RadioChoix.Bateau,
                    groupValue: _choixRadio,
                    activeColor: Colors.green,
                    onChanged: (value) {
                      setState(() {
                        _choixRadio = value;
                        _iconRadio = Icon(Icons.directions_boat);
                      });
                    }),
                Text('Bateau', style: _choixRadio == RadioChoix.Bateau ? TextStyle(color: Colors.green, fontWeight: FontWeight.bold) : TextStyle()),
              ],
            ),
            _iconRadio,
            Divider(),
            Text('Checkbox',
              style: TextStyle(fontWeight: FontWeight.bold, fontSize: 30),
            ),
            Row(
              mainAxisAlignment: MainAxisAlignment.center,
              children: <Widget>[
                Checkbox(
                    activeColor: Colors.green,
                    value: _mapTransport[RadioChoix.Voiture],
                    onChanged: (value) {
                      setState(() {
                        _mapTransport[RadioChoix.Voiture] = value;
                      });
                    }
                ),
                Text('Voiture', style: _mapTransport[RadioChoix.Voiture] ? TextStyle(color: Colors.green) : TextStyle()),
                Checkbox(
                    activeColor: Colors.green,
                    value: _mapTransport[RadioChoix.Avion],
                    onChanged: (value) {
                      setState(() {
                        _mapTransport[RadioChoix.Avion] = value;
                      });
                    }
                ),
                Text('Avion', style: _mapTransport[RadioChoix.Avion] ? TextStyle(color: Colors.green) : TextStyle()),
                Checkbox(
                    activeColor: Colors.green,
                    value: _mapTransport[RadioChoix.Bateau],
                    onChanged: (value) {
                      setState(() {
                        _mapTransport[RadioChoix.Bateau] = value;
                      });
                    }
                ),
                Text('Bateau', style: _mapTransport[RadioChoix.Bateau] ? TextStyle(color: Colors.green) : TextStyle()),
              ],
            ),
            Row(
              mainAxisAlignment: MainAxisAlignment.center,
              children: <Widget>[
                Icon(Icons.directions_car, color: _mapTransport[RadioChoix.Voiture] ? Colors.green : Colors.grey[300],),
                Icon(Icons.airplanemode_active, color: _mapTransport[RadioChoix.Avion] ? Colors.green : Colors.grey[300],),
                Icon(Icons.directions_boat, color: _mapTransport[RadioChoix.Bateau] ? Colors.green : Colors.grey[300],),
              ],
            ),
            Divider(),
            Text('Slider',
              style: TextStyle(fontWeight: FontWeight.bold, fontSize: 30),
            ),
            Slider(
                value: _choixSlider,
                label: '$_choixSlider',
                activeColor: Colors.green,
                inactiveColor: Colors.green[100],
                min: 0.0,
                max: 10.0,
                divisions: 10,
                onChanged: (value) {
                  setState(() {
                    _choixSlider = value;
                  });
                },
            ),
            Container(
              width: MediaQuery.of(context).size.width*0.92,
              child: CupertinoSlider(
                  value: _choixSlider,
                  activeColor: Colors.orange,
                  thumbColor: Colors.orange,
                  min: 0.0,
                  max: 10.0,
                  divisions: 10,
                  onChanged: (value) {
                    setState(() {
                      _choixSlider = value;
                    });
                  },
              ),
            ),
            Text(
              'Valeur du Slider : $_choixSlider',
              style: TextStyle(
                color: _choixSlider <5 ? Colors.red : Colors.green
              ),
            ),
          ],
        ),
      ),
    );
  }
}
