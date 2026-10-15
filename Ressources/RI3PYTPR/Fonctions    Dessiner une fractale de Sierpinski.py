# Dessiner une fractale de Sierpiński
from tkinter import Tk, Canvas
TAILLE = 500

def Affiche(ListeTr):
   for T in ListeTr :
      A,B,C = T
      Listepoints = A + B + C
      canvas.create_polygon(Listepoints)

def Milieu(A,B):
   xA,yA = A
   xB,yB = B
   xm = (xA+xB) // 2
   ym = (yA+yB) // 2
   return (xm,ym)

def Division(ListeTr) :
   L = []
   for T in ListeTr :
      A,B,C = T
      mAB = Milieu(A,B)
      mAC = Milieu(A,C)
      mBC = Milieu(B,C)
      L.append ( [A,mAC,mAB])
      L.append ( [B,mBC,mAB])
      L.append ( [C,mBC,mAC])
   return L

LTriangles = [ [ (250,50), (50,400), (450,400) ] ]

def PROG():
   global LTriangles
   canvas.delete("all")
   LTriangles = Division(LTriangles)
   Affiche(LTriangles)
   Mafenetre.after(1000,PROG)

# Création de la fenêtre de dessin

Mafenetre = Tk()
Mafenetre.geometry(str(TAILLE) +"x"+str(TAILLE))
canvas = Canvas(Mafenetre,width=TAILLE, height=TAILLE, borderwidth=0, highlightthickness=0,bg="lightgray")
canvas.pack()
Mafenetre.after(100,PROG)
Mafenetre.mainloop()

