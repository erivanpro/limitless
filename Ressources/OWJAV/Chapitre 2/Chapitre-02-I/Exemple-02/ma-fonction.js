function ma_fonction(nb1,nb2,identifiant){
	var resultat_addition = nb1 + nb2 ;
	document.getElementById(identifiant).innerHTML=resultat_addition;
}
ma_fonction(12,23,"resultat_un");
ma_fonction(34,45,"resultat_deux");