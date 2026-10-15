import 'package:provider/provider.dart';
import 'compteur_provider.dart';
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
      home: ChangeNotifierProvider(
        create: (_) => CompteurProvider(0),
        child: MyHomePage(title: 'Flutter Provider'),
      )
    );
  }
}

class MyHomePage extends StatelessWidget {
  MyHomePage({Key key, this.title}) : super(key: key);
  final String title;

  @override
  Widget build(BuildContext context) {
    final _compteurProvider = Provider.of<CompteurProvider>(context);
    return Scaffold(
      appBar: AppBar(
        title: Text('$title - ${_compteurProvider.counter}'),
      ),
      body: Center(
        child: Column(
          mainAxisAlignment: MainAxisAlignment.center,
          children: <Widget>[
            Text(
              'Valeur du compteur :',
            ),
            Text(
              '${_compteurProvider.counter}',
              style: Theme.of(context).textTheme.display1,
            ),
          ],
        ),
      ),
      floatingActionButton: FloatingActionButton(
        onPressed: _compteurProvider.increment,
        tooltip: 'Increment',
        child: Icon(Icons.add),
      ),
    );
  }
}




