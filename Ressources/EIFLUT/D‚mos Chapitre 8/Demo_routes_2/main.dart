import 'package:flutter/material.dart';
import 'MyFirstPage.dart';
import 'MySecondPage.dart';
import 'MyThirdPage.dart';

void main() => runApp(MyApp());

class MyApp extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: 'Flutter Demo',
      theme: ThemeData(
        primarySwatch: Colors.blue,
      ),
      home: MyFirstPage(title: 'Flutter Demo Home Page'),
      routes: <String, WidgetBuilder> {
        '/route1': (BuildContext context) => MyFirstPage(title: 'Page 1'),
        '/route2': (BuildContext context) => MySecondPage(title: 'Page 2'),
        '/route3': (BuildContext context) => MyThirdPage(title: 'Page 3'),
      },
    );
  }
}




