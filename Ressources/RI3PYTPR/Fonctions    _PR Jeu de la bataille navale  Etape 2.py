# Bataille navale
import random
from tkinter import Tk, Canvas

TAILLE = 500

#initialisation de la grille
Grille = []
for i in range(10):
    Grille.append([0]*10)

# verifie si le bateau de longeur b et direction d
# peut etre posé à la coordonnée (x,y)
def Verif(x,y,dir,n):
    if dir == 0 :  # positionnement vertical
        x2 = x
        y2 = y + n - 1
    else :
        x2 = x + n -1
        y2 = y

    if x2 > 9 : return False
    if y2 > 9 : return False

    # calcul du rectangle englobant
    xmin,ymin = x-1,y-1
    xmax,ymax = x2+1,y2+1

    # découpe du rectangle pour qu'il reste dans la grille
    if xmin < 0 : xmin = 0
    if ymin < 0 : ymin = 0
    if xmax > 9 : xmax = 9
    if ymax > 9 : ymax = 9

    # verifie que les cases sont disponibles

    for x in range(xmin,xmax+1) :
        for y in range(ymin,ymax+1):
            if Grille[x][y] > 0 : return False
    return True

# placement des bateaux
def Scenario() :
    scenar = [ (1,4), (2,3), (3,2), (4,1) ]  # nb/longeur
    for typebateau in scenar :

        # essai placement aléatoire
        nbbateau = typebateau[0]
        nbcases = typebateau[1]
        for i in range(nbbateau) :
            x = random.randint(0,9)
            y = random.randint(0,9)
            dir = random.randint(0,1)
            while Verif(x,y,dir,nbcases) == False :
              x = random.randint(0,9)
              y = random.randint(0,9)
              dir = random.randint(0,1)

            # la position est validée, on place le bateau
            if dir == 0 :
                for i in range(nbcases) :
                    Grille[x][y+i] = nbcases
            else :
                for i in range(nbcases) :
                    Grille[x+i][y] = nbcases

# couleur de chaque classe de bateau / évite des if if if
fillColor = [ "white", "blue", "yellow", "green", "red"]

def Affichage() :
    Scenario()

    #affichage texte :
    for y in range(10):
        for x in range(10):
            id = Grille[x][y]
            if id == 0 : print(" .",end = "")
            else :
                print(" {0}".format(id),end="")
        print()

    #affichage de la grille en grisé:
    for y in range(10):
        for x in range(10):
            id = Grille[x][y]
            xx = x * 50
            yy = y * 50
            c = "lightgray"
            canvas.create_rectangle(xx,yy,xx+50,yy+50,fill=c)

# traitement du clic souris
def click(event) :
    x = event.x // 50
    y = event.y // 50
    id = Grille[x][y]

    xx = x * 50
    yy = y * 50
    # dessin de la case et du tir
    c = fillColor[id]
    canvas.create_rectangle(xx,yy,xx+50,yy+50, fill = c)
    if id > 0 :
      canvas.create_oval(xx+20,yy+20,xx+30,yy+30, fill = "red")

# Création de la fenêtre de dessin

Mafenetre = Tk()
Mafenetre.geometry(str(TAILLE) +"x"+str(TAILLE))
canvas = Canvas(Mafenetre,width=TAILLE, height=TAILLE, borderwidth=0, highlightthickness=0,bg="lightgray")
canvas.pack()
Mafenetre.after(100,Affichage)
Mafenetre.bind("<Button-1>", click)
Mafenetre.mainloop()
