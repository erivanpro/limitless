# Bataille navale
import random
from tkinter import Tk, Canvas

TAILLE = 500

#initialisation de la grille
Grille = []
for i in range(10):
    Grille.append([0]*10)

Grille[0][0] = 1
Grille[0][2] = Grille[1][2] = 2
Grille[0][4] = Grille[1][4] = Grille[2][4] = 3
Grille[0][6] = Grille[1][6] = Grille[2][6] = Grille[3][6]  = 4


# couleur de chaque classe de bateau / évite des if if if
fillColor = [ "white", "blue", "yellow", "green", "red"]

def Affichage() :

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
