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
      home: MyHomePage(title: 'Flutter Demo Champs texte'),
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

  TextStyle _textStyleDefault = TextStyle(
    color: Colors.white,
  );

  TextStyle _textStyleSaisie = TextStyle(
    color: Colors.amber,
    fontWeight: FontWeight.bold,
  );

  String _tf = 'Aucun texte saisi';
  String _tfS = 'Aucun texte soumis';
  String _cTf = 'Aucun texte saisi';
  String _cTfS = 'Aucun texte soumis';

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      resizeToAvoidBottomPadding: true,
      appBar: AppBar(
        title: Text(widget.title),
      ),
      body: SingleChildScrollView(
        child: Center(
          child: Column(
            mainAxisAlignment: MainAxisAlignment.center,
            children: <Widget>[
              Text(
                'Formulaire',
                style: TextStyle(
                    fontWeight: FontWeight.bold,
                    fontSize: 40,
                    color: Colors.blue
                ),
              ),
              Divider(),
              Padding(padding: EdgeInsets.only(bottom: 20)),
              Container(
                height: MediaQuery.of(context).size.height*0.7,
                width: MediaQuery.of(context).size.width*0.9,
                child: Column(
                  mainAxisAlignment: MainAxisAlignment.center,
                  children: <Widget>[
                    Text('1- Saisie d\'un texte dans une TextField :'),
                    TextField(
                      decoration: InputDecoration(
                          hintText: 'Saisissez ce que vous voulez !',
                      ),
                      onChanged: (value) {
                        setState(() {
                          _tf = value;
                        });
                      },
                      onSubmitted: (value) {
                        setState(() {
                          _tfS = value;
                        });
                      },
                    ),
                    Padding(padding: EdgeInsets.only(bottom: 10)),
                    Text('2- Saisie d\'un texte dans une CupertinoTextField :'),
                    CupertinoTextField(
                      placeholder: 'Saisissez ce que vous voulez !',
                      onChanged: (value) {
                        setState(() {
                          _cTf = value;
                        });
                      },
                      onSubmitted: (value) {
                        setState(() {
                          _cTfS = value;
                        });
                      },
                    ),
                    Padding(padding: EdgeInsets.only(bottom: 40)),
                    Container(
                      width: MediaQuery.of(context).size.width*0.9,
                      //color: Colors.blue,
                      child: Column(
                        mainAxisAlignment: MainAxisAlignment.spaceAround,
                        children: <Widget>[
                          Padding(padding: EdgeInsets.only(top: 10)),
                          Text(
                            '1- Texte en cours de saisie dans TextField : ',
                            style: _textStyleDefault,
                          ),
                          Text(
                            '$_tf',
                            style: _textStyleSaisie,
                          ),
                          Text(
                            '1- Texte soumis dans TextField : ',
                            style: _textStyleDefault,
                          ),
                          Text(
                            '$_tfS',
                            style: _textStyleSaisie,
                          ),
                          Text(
                            '2- Texte en cours de saisie dans CupertinoTextField : ',
                            style: _textStyleDefault,
                          ),
                          Text(
                            '$_cTf',
                            style: _textStyleSaisie,
                          ),
                          Text(
                            '2- Texte soumis dans CupertinoTextField : ',
                            style: _textStyleDefault,
                          ),
                          Text(
                            '$_cTfS',
                            style: _textStyleSaisie,
                          ),
                          Padding(padding: EdgeInsets.only(bottom: 10)),
                        ],
                      ),
                      decoration: BoxDecoration(
                        color: Colors.blue,
                        boxShadow: [BoxShadow(
                          color: Colors.black,
                          blurRadius: 25.0,
                          spreadRadius: 5.0,
                          offset: Offset(0, 15)
                        )]
                      ),
                    )
                  ],
                ),
              ),
            ],
          ),
        ),
      ),
    );
  }
}
