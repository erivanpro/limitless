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
      home: MyHomePage(title: 'Flutter Stepper'),
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
  int _index = 0;
  List<Step> steps = [
    Step(title: Text('Palier 1'), content: Text('Ceci est le contenu du Stepper 1')),
    Step(title: Text('Palier 2'), content: Text('Ceci est le contenu du Stepper 2')),
    Step(title: Text('Palier 3'), content: Text('Ceci est le contenu du Stepper 3')),
    Step(title: Text('Palier 4'), content: Text('Ceci est le contenu du Stepper 4')),
  ];

  void _incrementStepper() {
    setState(() {
      if (_index > 0) {
        _index++;
      }
    });
  }

  void _decrementStepper() {
    setState(() {
      if (_index < steps.length) {
        _index--;
      }
    });
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
              'Stepper',
              style: Theme.of(context).textTheme.display1,
            ),
            Stepper(
              steps: steps,
              onStepContinue: _incrementStepper,
              onStepCancel: _decrementStepper,
              currentStep: _index,
            ),
          ],
        ),
      ),
    );
  }
}
