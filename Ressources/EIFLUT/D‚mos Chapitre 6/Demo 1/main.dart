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
      home: MyHomePage(title: 'Flutter Demo Home Page'),
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
  Icon _coeur = Icon(
    Icons.favorite_border,
    color: Colors.white,
  );
  bool _likeBool = false;
  int _indexSelectionne = 0;
  String _affichage = "0: Accueil";

  void _likeThis() {
    setState(() {
      if (_likeBool) {
        _coeur = Icon(
          Icons.favorite_border,
          color: Colors.white,
        );
        _likeBool = false;
      } else {
        _coeur = Icon(
          Icons.favorite,
          color: Colors.white,
        );
        _likeBool = true;
      }
    });
  }

  void _itemClique(int index) {
    setState(() {
      _indexSelectionne = index;
      switch (_indexSelectionne) {
        case 0:
          {
            _affichage = '$_indexSelectionne: Accueil';
          }
          break;
        case 1:
          {
            _affichage = '$_indexSelectionne: Mon compte';
          }
          break;
        case 2:
          {
            _affichage = '$_indexSelectionne: Statistiques';
          }
          break;
      }
    });
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text(widget.title),
        actions: <Widget>[
          IconButton(icon: _coeur, onPressed: _likeThis),
        ],
        backgroundColor: Colors.red,
      ),
      body: Center(
        child: Column(
          mainAxisAlignment: MainAxisAlignment.center,
          children: <Widget>[
            Text(
              '${_affichage}',
              style: TextStyle(color: Colors.red, fontSize: 40),
            ),
          ],
        ),
      ),
      floatingActionButton: FloatingActionButton(
        onPressed: _likeThis,
        backgroundColor: Colors.red,
        child: _coeur,
      ),
//      floatingActionButtonLocation: FloatingActionButtonLocation.centerDocked,
//      bottomNavigationBar: BottomAppBar(
//        color: Colors.red,
//        child: Container(
//          height: 50,
//          child: Row(
//            mainAxisAlignment: MainAxisAlignment.spaceAround,
//            children: <Widget>[
//              IconButton(
//                icon: Icon(
//                  Icons.add_location,
//                  color: Colors.white,
//                ),
//                onPressed: null,
//              ),
//              IconButton(
//                icon: Icon(
//                  Icons.forward,
//                  color: Colors.white,
//                ),
//                onPressed: null,
//              ),
//            ],
//          ),
//        ),
//        shape: CircularNotchedRectangle(),
//      ),
      bottomNavigationBar: BottomNavigationBar(
        items: const <BottomNavigationBarItem>[
          BottomNavigationBarItem(
              icon: Icon(
                Icons.home,
                color: Colors.white,
              ),
              title: Text(
                'Accueil',
                style: TextStyle(color: Colors.white),
              )),
          BottomNavigationBarItem(
              icon: Icon(
                Icons.supervised_user_circle,
                color: Colors.white,
              ),
              title: Text(
                'Mon compte',
                style: TextStyle(color: Colors.white),
              )),
          BottomNavigationBarItem(
              icon: Icon(
                Icons.assessment,
                color: Colors.white,
              ),
              title: Text(
                'Statistiques',
                style: TextStyle(color: Colors.white),
              )),
        ],
        backgroundColor: Colors.red,
        onTap: _itemClique,
        currentIndex: _indexSelectionne,
      ),
      drawer: Drawer(
        child: Column(
          children: <Widget>[
            DrawerHeader(
              child: Text(
                'Menu de navigation',
                style: TextStyle(
                    color: Colors.red,
                    fontWeight: FontWeight.bold,
                    fontSize: 25),
              ),
            ),
            Text('Lien 1'),
            Text('Lien 2'),
            Text('Lien 3'),
          ],
        ),
      ),
    );
  }
}
