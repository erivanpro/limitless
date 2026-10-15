# Calcul de la durée de remboursement d'un prêt
def Remboursement(montant_a_rembourser,taux_mensuel,versement) :
    interets_verses = montant_a_rembourser * taux_mensuel / 100
    remboursement = versement - interets_verses
    return (interets_verses, remboursement)

emprunt = 200000
a_rembourser = emprunt
versement = 1000
total_interet = 0
taux = 0.1
nb_mois = 0

while (a_rembourser > versement ) :
   interets, rembou = Remboursement(a_rembourser,taux,versement)
   total_interet += interets
   a_rembourser -= rembou
   nb_mois += 1
   print(nb_mois, a_rembourser)
nb_mois +=1 # dernier mois

print("Somme empruntée : ",emprunt)
print("Mensualités     : ",versement)
print("Nombre de mois  : ", nb_mois)
print("Interet versés  : ", int(total_interet))
