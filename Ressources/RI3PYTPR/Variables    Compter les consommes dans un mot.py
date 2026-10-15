#Comptez les consommes dans un mot

print("Entrez un mot")
mot = input()
mot = mot.upper()

nb_voyelles = 0
nb_lettres = len(mot)

for i in range(nb_lettres) :
    lettre = mot[i]

    if lettre == "A" or lettre == "E" or lettre == "I" or lettre == "O" or lettre == "U" or lettre == "Y" :
         nb_voyelles = nb_voyelles + 1

nb_consonnes = nb_lettres - nb_voyelles

print ("Nombre de consommes : ", nb_consonnes )
