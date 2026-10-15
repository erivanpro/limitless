# MORPION - Etape 1
from tkinter import Tk, Canvas
import random

TAILLE = 300
JEU = [ [0,1,2],[0,1,2],[0,1,2]]

def AfficheGrille(c="black"):
   canvas.create_line((100,0),(100,300),width=3,fill=c)
   canvas.create_line((200,0),(200,300),width=3,fill=c)
   canvas.create_line((0,100),(300,100),width=3,fill=c)
   canvas.create_line((0,200),(300,200),width=3,fill=c)

def AffichePions():
   for x in range(3):
      for y in range(3):
         xx = x * 100
         yy = y * 100
         A = (xx+20,yy+20)
         B = (xx+80,yy+80)
         C = (xx+20,yy+80)
         D = (xx+80,yy+20)
         if JEU[x][y] == 1 :
            canvas.create_oval(A,B,fill="blue")
         if JEU[x][y] == 2 :
            canvas.create_line(A,B,fill="red",width=10)
            canvas.create_line(C,D,fill="red",width=10)

def PROG() :
   AfficheGrille()
   AffichePions()

# Création de la fenêtre de dessin
Mafenetre = Tk()
Mafenetre.geometry(str(TAILLE) +"x"+str(TAILLE))
canvas = Canvas(Mafenetre,width=TAILLE, height=TAILLE, borderwidth=0, highlightthickness=0,bg="lightgray")
canvas.pack()
Mafenetre.after(100,PROG)
Mafenetre.mainloop()
