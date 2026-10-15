# MORPION
from tkinter import Tk, Canvas
import random
import copy

TAILLE = 300
JEU = [ [0,0,0],[0,0,0],[0,0,0]]


def AfficheGrille(c="black"):
   canvas.create_line((100,0),(100,300),width=3,fill=c)
   canvas.create_line((200,0),(200,300),width=3,fill=c)
   canvas.create_line((0,100),(300,100),width=3,fill=c)
   canvas.create_line((0,200),(300,200),width=3,fill=c)

JOUEUR_IA = 2
JOUEUR_HUMAIN = 1


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



def DetecteGagne(G):

   for j in [1,2] :
      for x in range(3):
         if G[x][0] == G[x][1] == G[x][2] == j : return j
      for y in range(3):
         if G[0][y] == G[1][y] == G[2][y] == j : return j
      if G[0][0] == G[1][1] == G[2][2] == j : return j
      if G[0][2] == G[1][1] == G[2][0] == j : return j
   return 0

def Score(G):
    J = DetecteGagne(G)
    if J == JOUEUR_HUMAIN : return -1
    else :
        if J == JOUEUR_IA : return 1
        else : return 0 # match nul

def ListeCasesVide(G) :
   L = []
   for x in range(3):
      for y in range(3):
         if G[x][y] == 0 :
            L.append((x,y))
   return L



def PROG() :
   AfficheGrille()
   AffichePions()

def Affiche():
   canvas.delete("all")
   AfficheGrille()
   AffichePions()


def simuIA(G, level):
   L = ListeCasesVide(G)
   nbCoups = len(L)
   if DetecteGagne(G) > 0 or nbCoups == 0 :
      return (Score(G),False)
   resultats = []
   for Coup in L :
      GG = copy.deepcopy(G)
      x,y = Coup
      GG[x][y] = JOUEUR_IA
      score = simuHumain(GG,level+1)[0]
      resultats.append( (score, Coup)  )
      #print(resultats)
   if level == 0 :
      print(level,resultats)
   bestCoup = (-100,False)
   for coup in resultats :
      if coup[0] > bestCoup[0] :
         bestCoup = coup
   return bestCoup

def simuHumain(G,level):
   L = ListeCasesVide(G)
   nbCoups = len(L)
   if DetecteGagne(G) > 0 or nbCoups == 0 :
      return (Score(G),False)

   resultats = []
   for Coup in L :
      GG = copy.deepcopy(G)
      x,y = Coup
      GG[x][y] = JOUEUR_HUMAIN
      score = simuIA(GG,level+1)[0]
      resultats.append( (score, Coup) )
   bestCoup = (100,False)
   for coup in resultats :
      if coup[0] < bestCoup[0] :
         bestCoup = coup
   return bestCoup


def click(event):
   global JEU
   Affiche()
   x = event.x // 100
   y = event.y // 100

   if len(ListeCasesVide(JEU)) == 0 or DetecteGagne(JEU) > 0: # relance une partie
      JEU = [ [0,0,0],[0,0,0],[0,0,0]]
      Affiche()
      return

   if JEU[x][y] != 0 : return # clique sur une zone déjà jouée

   # JOUEUR HUMAIN
   JEU[x][y] = JOUEUR_HUMAIN
   AffichePions()
   if DetecteGagne(JEU) == JOUEUR_HUMAIN :
      AfficheGrille("blue")
      return

   # JOUEUR IA

   if len(ListeCasesVide(JEU)) > 0 :
      score,coup = simuIA(JEU,0)
      x,y = coup
      JEU[x][y] = JOUEUR_IA
      AffichePions()
      if DetecteGagne(JEU) == JOUEUR_IA:
        AfficheGrille("red")
        return

# Création de la fenêtre de dessin
Mafenetre = Tk()
Mafenetre.geometry(str(TAILLE) +"x"+str(TAILLE))
canvas = Canvas(Mafenetre,width=TAILLE, height=TAILLE, borderwidth=0, highlightthickness=0,bg="lightgray")
canvas.pack()
Mafenetre.after(100,PROG)
Mafenetre.bind("<Button-1>", click)  ## ligne à rajouter
Mafenetre.mainloop()
