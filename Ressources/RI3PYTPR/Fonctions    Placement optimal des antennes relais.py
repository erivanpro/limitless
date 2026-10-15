#placement optimal des antennes relais
from tkinter import Tk, Canvas
import random

TAILLE = 500

def CreeMaisons():
    L = []
    for i in range(200) :
        x = random.normalvariate(250,70)
        y = random.normalvariate(250,70)
        L.append((x,y))
    return L

def AfficheMaisons(LMaisons,couleur):
    for M in LMaisons :
        x,y = M
        canvas.create_rectangle(x,y,x+5,y+5, fill=couleur)

def MaisonsDansZone(LMaisons,xc,yc) :
    L = []
    for M in LMaisons :
        x,y = M
        if (x-xc)**2+(y-yc)**2 <= 100**2 :
            L.append(M)
    return L

def MeilleurePosAntenne(LMaisons) :
    best = 0
    for x in range(0,500,10) :
        for y in range(0,500,10) :
            nb = len(MaisonsDansZone(LMaisons,x,y))
            if nb > best :
                best = nb
                bestPos = (x,y)
    return bestPos

def PlaceAntenne(LMaisons,couleur):
    x,y = MeilleurePosAntenne(LMaisons)
    canvas.create_oval(x-100,y-100,x+100,y+100)
    L = MaisonsDansZone(LMaisons,x,y)
    AfficheMaisons(L,couleur)
    for M in L :
        LMaisons.remove(M)

def PROG():
    canvas.delete("all")
    LMaisons = CreeMaisons()
    AfficheMaisons(LMaisons,"black")
    PlaceAntenne(LMaisons,"green")
    PlaceAntenne(LMaisons,"red")
    PlaceAntenne(LMaisons,"blue")

def click(e):
    PROG()

# Création de la fenêtre de dessin
Mafenetre = Tk()
Mafenetre.geometry(str(TAILLE) +"x"+str(TAILLE))
canvas = Canvas(Mafenetre,width=TAILLE, height=TAILLE, borderwidth=0, highlightthickness=0,bg="lightgray")
canvas.pack()
Mafenetre.after(100,PROG)
Mafenetre.bind("<Button-1>", click)
Mafenetre.mainloop()
