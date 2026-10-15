# Tir aux ballons !
from tkinter import Tk, Canvas
import random, math

TAILLE = 500

LBallons = []
LCoul    = [ "red", "blue", "green", "yellow", "gray"]

def GenereBallonAlea() :
   if  random.randint(0,10) == 0 :
      x = random.randint(0,500)
      y = 550
      r = 50 + random.randint(0,50)
      coul = random.randint(0,4)
      LBallons.append( [x,y,r,LCoul[coul]] )

def Affichage() :
   canvas.delete("all")

   for B in LBallons :
      x, y, r, coul = B
      canvas.create_oval(x-r,y-r,x+r,y+r,fill=coul)

def DeplacementBallons():
   for B in LBallons :
      B[1] -= 3


def PROG():
   GenereBallonAlea()
   Affichage()
   DeplacementBallons()
   Mafenetre.after(50,PROG)

def Touche(Ballon,xs,ys):
   x,y,r,c = Ballon
   return (x-xs)**2+(y-ys)**2 <= r*r

# TIR
def click(event):
   global LBallons
   xs = event.x
   ys = event.y
   print("Position de la souris :", xs,ys)

   LSurvie = []
   for Ballon in LBallons :
      if not Touche(Ballon,xs,ys) :
         LSurvie.append(Ballon)

   LBallons = LSurvie

# Création de la fenêtre de dessin
Mafenetre = Tk()
Mafenetre.geometry(str(TAILLE) +"x"+str(TAILLE))
canvas = Canvas(Mafenetre,width=TAILLE, height=TAILLE, borderwidth=0, highlightthickness=0,bg="lightgray")
canvas.pack()
Mafenetre.bind("<Button-1>", click)
Mafenetre.after(100,PROG)
Mafenetre.mainloop()
