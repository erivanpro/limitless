# affichez le calendrier du mois

print("Entrez le nombre de jours dans le mois : ")
nbjours = int(input())
print("Entrez le premier jour du mois : 1 pour lundi, 7 pour dimanche")
ColDepart = int(input())

print("LUN MAR MER JEU VEN SAM DIM")

NbColVides = ColDepart - 1
LargeurCol = 4
print( " " * LargeurCol *  NbColVides, end="")
ColCourante = ColDepart # 1 col du lundi, 7 col du dimanche

for i in range(nbjours) :
  print("{0:3d} ".format(i+1), end="")
  ColCourante = ColCourante + 1
  if ColCourante == 8 :
    print() # une nouvelle ligne commence
    ColCourante = 1
