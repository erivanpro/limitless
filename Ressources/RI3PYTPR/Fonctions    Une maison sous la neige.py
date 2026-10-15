# une maison sous la neige
from tkinter import Tk, Canvas
import random

TAILLE = 500

LNeige = []
for i in range(100) :
   x = random.randint(0,500)
   y = random.randint(0,500)
   r = random.randint(0,5)
   LNeige.append([x,y,r])

def AfficheNeige():
   for flocon in LNeige :
      x,y,r = flocon
      x1,y1 = x-r,y-r
      x2,y2 = x+r,y+r
      canvas.create_oval((x1,y1),(x2,y2),fill="white",width=0)

def DeplaceNeige():
   for flocon in LNeige :
      flocon[1] = (flocon[1] + 2 ) % 500
      flocon[0] += random.randint(0,2)-1

def AfficheMaison():
   # faire recherche sur : tkinter color name
   canvas.create_rectangle((100,200),(400,400),fill="wheat")
   canvas.create_rectangle((150,300),(250,350),fill="blue")
   canvas.create_rectangle((300,300),(350,400),fill="brown")
   LP = (100,200,200,100,300,100,400,200)
   canvas.create_polygon(LP,fill="sienna",outline="gray")
   canvas.create_oval((200,125),(300,175),fill="yellow",width=3)

def PROG() :
   canvas.delete("all")
   DeplaceNeige()
   AfficheMaison()
   AfficheNeige()
   Mafenetre.after(100,PROG)


# Création de la fenêtre de dessin
Mafenetre = Tk()
Mafenetre.geometry(str(TAILLE) +"x"+str(TAILLE))
canvas = Canvas(Mafenetre,width=TAILLE, height=TAILLE, borderwidth=0, highlightthickness=0,bg="lightgray")
canvas.pack()
Mafenetre.after(100,PROG)
Mafenetre.mainloop()
