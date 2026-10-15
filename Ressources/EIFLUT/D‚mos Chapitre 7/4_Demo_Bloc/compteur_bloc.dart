import 'dart:async';

class CompteurBloc {

  final _streamCtrl = StreamController<int>();
  int _compteur = 0;

//  CompteurBloc() {
//    sink.add(_compteur);
//  }

  Sink<int> get sink => _streamCtrl.sink;
  Stream<int> get stream => _streamCtrl.stream;

  incrementCompteur() {
    sink.add(++_compteur);
  }

  dispose() => _streamCtrl.close();

}

