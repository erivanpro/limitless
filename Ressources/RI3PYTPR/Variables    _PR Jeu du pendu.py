# Jeu du pendu

# on ne traite que des mots avec des lettres différentes
mot = "CHEVAL"

print("Jeu du pendu !!")
print("Entrez une lettre suivie de la touche Entrée")
for i in range(6) :
  essai = input()
  essai = essai.upper()
  pos = mot.find(essai)

  if pos < 0 :
    print ("# " * len(mot))
  else :
    nbgauche = pos
    nbdroit = len(mot) - pos - 1
    print ("# " * nbgauche, end='')
    print (essai + " ", end='')
    print ("# " * nbdroit)

print("Proposez un mot : ")
monmot = input()
monmot = monmot.upper()
if monmot == mot :
  print("GAGNE")
else :
  print("PERDU")
