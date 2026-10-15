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
      home: MyHomePage(title: 'Flutter Demo'),
    );
  }
}

class MyHomePage extends StatelessWidget {
  MyHomePage({Key key, this.title}) : super(key: key);

  final String title;
  final SnackBar _snack = SnackBar(
    content: Text('Ceci est une SnackBar !'),
    duration: Duration(seconds: 4),
    backgroundColor: Colors.red,
    action: SnackBarAction(
        label: 'Clic',
        textColor: Colors.white,
        onPressed: () {
          //Action à effectuer
        }
    ),
  );

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text(title),
      ),
      body: Builder(builder: (BuildContext context) {
        return Center(
          child: Column(
            mainAxisAlignment: MainAxisAlignment.center,
            children: <Widget>[
              RaisedButton(
                onPressed: () {
                  Scaffold.of(context).showSnackBar(_snack);
                },
                color: Colors.blue,
                textColor: Colors.white,
                child: Text('Afficher la SnackBar'),
              ),
            ],
          ),
        );
      })
    );
  }
}


