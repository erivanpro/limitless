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
      home: MyHomePage(title: 'Flutter Demo TextEditingController'),
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

  final _controller = TextEditingController();

  _afficherLaValeurDuChamp() {
    setState(() {
      _tf = _controller.text.toUpperCase();
    });
  }

  void initState() {
    super.initState();
    _controller.addListener(_afficherLaValeurDuChamp);
    _controller.value = TextEditingValue(text: '$_tf');
  }

  void dispose() {
    _controller.dispose();
    super.dispose();
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text(widget.title),
      ),
      body: Padding(
        padding: const EdgeInsets.all(20.0),
        child: Center(
          child: Column(
            mainAxisAlignment: MainAxisAlignment.center,
            children: <Widget>[
              Text(
                'Formulaire',
                style: TextStyle(
                    fontWeight: FontWeight.bold,
                    fontSize: 40,
                    color: Colors.blue),
              ),
              Divider(),
              Padding(padding: EdgeInsets.only(bottom: 40)),
              TextField(
                controller: _controller,
                decoration: InputDecoration(border: OutlineInputBorder()),
                keyboardType: TextInputType.text,
              ),
              Padding(padding: EdgeInsets.only(bottom: 20)),
              Container(
                width: MediaQuery.of(context).size.width * 0.9,
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
                    Padding(padding: EdgeInsets.only(bottom: 10)),
                  ],
                ),
                decoration: BoxDecoration(
                    color: Colors.blue,
                    borderRadius: BorderRadius.circular(5),
                    boxShadow: [
                      BoxShadow(
                          color: Colors.black,
                          blurRadius: 25.0,
                          spreadRadius: 5.0,
                          offset: Offset(0, 15))
                    ]),
              )
            ],
          ),
        ),
      ),
    );
  }
}
