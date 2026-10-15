class ExceptionPerso implements FormatException {
  int _source;
  ExceptionPerso(this._source);

  @override
  String get message => "Le code postal doit comporter 5 caractères !";

  @override
  int get offset => 5-_source;

  @override
  get source => _source;
}