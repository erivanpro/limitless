import 'package:flutter/material.dart';
import 'package:location/location.dart';

void main() => runApp(MyApp());

class MyApp extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: 'Flutter Demo',
      theme: ThemeData(
        primarySwatch: Colors.blue,
      ),
      home: MyHomePage(title: 'Flutter Demo GPS'),
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
  Location _location = Location();
  LocationData _locationData;

  @override
  void initState() {
    super.initState();
    _trouverPosition();
  }

  Future<void> _trouverPosition() async {
    try {
      _locationData = await _location.getLocation();
    } catch (e) {
      print('Erreur lors de la récupération de la position : $e');
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
            Text(
              'Position actuelle : ',
            ),
            Text(
              _locationData == null
                  ? 'En attente de position'
                  : 'Longitude : ${_locationData.longitude}',
              style: Theme.of(context).textTheme.display1,
            ),
            Text(
              _locationData == null
                  ? 'En attente de position'
                  : 'Latitude : ${_locationData.latitude}',
              style: Theme.of(context).textTheme.display1,
            ),
          ],
        ),
      ),
    );
  }
}
