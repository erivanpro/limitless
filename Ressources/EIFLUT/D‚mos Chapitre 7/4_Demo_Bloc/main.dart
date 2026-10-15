import 'package:flutter/material.dart';
import 'package:flutterbloc/compteur_bloc.dart';

void main() => runApp(MyApp());

class MyApp extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: 'Flutter Demo',
      theme: ThemeData(
        primarySwatch: Colors.blue,
      ),
      home: MyHomePage(title: 'Flutter BLoC'),
    );
  }
}

class MyHomePage extends StatefulWidget {
  MyHomePage({Key key, this.title}) : super(key: key);
  final String title;

  @override
  _myHomePage createState() => _myHomePage();
}

class _myHomePage extends State<MyHomePage> {
  final CompteurBloc _compteurBloc = CompteurBloc();

  @override
  Widget build(BuildContext context) {
    return StreamBuilder<int>(
        stream: _compteurBloc.stream,
        initialData: 0,
        builder: (context, snapshot) {
          return Scaffold(
            appBar: AppBar(
              backgroundColor: Colors.red,
              title: Text('${widget.title} - ${snapshot.data}'),
            ),
            body: Center(
              child: Column(
                mainAxisAlignment: MainAxisAlignment.center,
                children: <Widget>[
                  Text('Valeur du compteur :'),
                  Text(
                    '${snapshot.data}',
                    style: TextStyle(
                        color: Colors.red,
                        fontSize: 35,
                        fontWeight: FontWeight.bold),
                  )
                ],
              ),
            ),
            floatingActionButton: FloatingActionButton(
              child: Icon(Icons.add),
              onPressed: () => _compteurBloc.incrementCompteur(),
              backgroundColor: Colors.red,
            ),
          );
        });
  }

  @override
  void dispose() {
    _compteurBloc.dispose();
    super.dispose();
  }
}
