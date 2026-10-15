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
      home: MyHomePage(title: 'Flutter Demo SimpleDialog'),
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
  String _choix = 'Aucun choix';
  String _source = '';

  void _choixDuSimpleDialog(String choix, int source) {
    setState(() {
      switch(source) {
        case 1:
          _source = 'SimpleDialog';
          break;
        case 2:
          _source = 'BottomSheet';
          break;
        case 3:
          _source = 'CupertinoActionSheet';
          break;
      }
      _choix = choix;
    });
  }

  Future<void> _quelChoix() async {
    switch (await showDialog<ListeChoix>(
        context: context,
        barrierDismissible: false,
        builder: (BuildContext context) {
          return SimpleDialog(
            title: const Text('Choisissez un mode de transport :'),
            children: <Widget>[
              SimpleDialogOption(
                child: Row(
                  mainAxisAlignment: MainAxisAlignment.start,
                  children: <Widget>[
                    Icon(Icons.directions_car),
                    const Text(' Voiture')
                  ],
                ),
                onPressed: () {
                  Navigator.pop(context, ListeChoix.Voiture);
                },
              ),
              SimpleDialogOption(
                child: Row(
                  mainAxisAlignment: MainAxisAlignment.start,
                  children: <Widget>[
                    Icon(Icons.airplanemode_active),
                    const Text(' Avion')
                  ],
                ),
                onPressed: () {
                  Navigator.pop(context, ListeChoix.Avion);
                },
              ),
              SimpleDialogOption(
                child: Row(
                  mainAxisAlignment: MainAxisAlignment.start,
                  children: <Widget>[
                    Icon(Icons.directions_boat),
                    const Text(' Bateau')
                  ],
                ),
                onPressed: () {
                  Navigator.pop(context, ListeChoix.Bateau);
                },
              ),
            ],
          );
        }
    )){
      case ListeChoix.Voiture:
        _choixDuSimpleDialog('Voiture',1);
        break;
      case ListeChoix.Avion:
        _choixDuSimpleDialog('Avion',1);
        break;
      case ListeChoix.Bateau:
        _choixDuSimpleDialog('Bateau',1);
        break;
    }
  }


  Future<void> _quelChoixCupertino() async {
    switch (await showCupertinoModalPopup<ListeChoix>(
        context: context,
        builder: (BuildContext context) {
          return CupertinoActionSheet(
            title: const Text('Choisissez un mode de transport :'),
            actions: <Widget>[
              CupertinoActionSheetAction(
                child: Row(
                  mainAxisAlignment: MainAxisAlignment.start,
                  children: <Widget>[
                    Icon(Icons.directions_car),
                    const Text(' Voiture')
                  ],
                ),
                onPressed: () {
                  Navigator.pop(context, ListeChoix.Voiture);
                },
              ),
              CupertinoActionSheetAction(
                child: Row(
                  mainAxisAlignment: MainAxisAlignment.start,
                  children: <Widget>[
                    Icon(Icons.airplanemode_active),
                    const Text(' Avion')
                  ],
                ),
                onPressed: () {
                  Navigator.pop(context, ListeChoix.Avion);
                },
              ),
              CupertinoActionSheetAction(
                child: Row(
                  mainAxisAlignment: MainAxisAlignment.start,
                  children: <Widget>[
                    Icon(Icons.directions_boat),
                    const Text(' Bateau')
                  ],
                ),
                onPressed: () {
                  Navigator.pop(context, ListeChoix.Bateau);
                },
              ),
            ],
          );
        }
    )){
      case ListeChoix.Voiture:
        _choixDuSimpleDialog('Voiture',3);
        break;
      case ListeChoix.Avion:
        _choixDuSimpleDialog('Avion',3);
        break;
      case ListeChoix.Bateau:
        _choixDuSimpleDialog('Bateau',3);
        break;
    }
  }

  Future<void> _quelChoixBottom() async {
    switch (await showModalBottomSheet<ListeChoix>(
        context: context,
        isDismissible: false,
        builder: (BuildContext context) {
          return Center(
            child: Container(
              color: Colors.green[200],
              child: Column(
                mainAxisAlignment: MainAxisAlignment.spaceAround,
                children: <Widget>[
                  Text(
                    'Choisissez un mode de transport :',
                    style: TextStyle(
                      fontWeight: FontWeight.bold,
                      fontSize: 25,
                    ),
                    textAlign: TextAlign.center,
                  ),
                  Divider(),
                  SimpleDialogOption(
                    child: Row(
                      mainAxisAlignment: MainAxisAlignment.start,
                      children: <Widget>[
                        Icon(Icons.directions_car),
                        const Text(' Voiture')
                      ],
                    ),
                    onPressed: () {
                      Navigator.pop(context, ListeChoix.Voiture);
                    },
                  ),
                  Divider(),
                  SimpleDialogOption(
                    child: Row(
                      mainAxisAlignment: MainAxisAlignment.start,
                      children: <Widget>[
                        Icon(Icons.airplanemode_active),
                        const Text(' Avion')
                      ],
                    ),
                    onPressed: () {
                      Navigator.pop(context, ListeChoix.Avion);
                    },
                  ),
                  Divider(),
                  SimpleDialogOption(
                    child: Row(
                      mainAxisAlignment: MainAxisAlignment.start,
                      children: <Widget>[
                        Icon(Icons.directions_boat),
                        const Text(' Bateau')
                      ],
                    ),
                    onPressed: () {
                      Navigator.pop(context, ListeChoix.Bateau);
                    },
                  ),
                ],
              ),
            )
          );
        }
    )){
      case ListeChoix.Voiture:
        _choixDuSimpleDialog('Voiture',2);
        break;
      case ListeChoix.Avion:
        _choixDuSimpleDialog('Avion',2);
        break;
      case ListeChoix.Bateau:
        _choixDuSimpleDialog('Bateau',2);
        break;
    }
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text(widget.title),
        backgroundColor: Colors.green,
      ),
      body: Center(
        child: Column(
          mainAxisAlignment: MainAxisAlignment.center,
          children: <Widget>[
            RaisedButton(
                child: Text('Ouvrir une SimpleDialog'),
                color: Colors.green,
                textColor: Colors.white,
                onPressed: _quelChoix,
            ),
            RaisedButton(
              child: Text('Ouvrir une BottomSheet'),
              color: Colors.green[700],
              textColor: Colors.white,
              onPressed: _quelChoixBottom,
            ),
            RaisedButton(
              child: Text('Ouvrir une CupertinoActionSheet'),
              color: Colors.green[800],
              textColor: Colors.white,
              onPressed: _quelChoixCupertino,
            ),
            Padding(padding: EdgeInsets.only(bottom: 30)),
            Text(
              'Voici le choix fait avec $_source :',
            ),
            Padding(padding: EdgeInsets.only(bottom: 15)),
            Text(
              '$_choix',
              style: TextStyle(
                color: Colors.green,
                fontWeight: FontWeight.bold,
                fontSize: 40
              ),
            ),
          ],
        ),
      ),
      backgroundColor: Colors.green[50],
    );
  }
}



enum ListeChoix {
  Voiture,
  Avion,
  Bateau
}
