# Création d'un labyrinthe
import random
from tkinter import Tk, Canvas

TAILLE = 500

# initialisation de la grille des numéros
NumCases = []
for i in range(10):
    L = []
    for j in range(10):
        L.append(j+i*10)
    NumCases.append(L)

# initialisation de la liste des murs
LMurs = []
for y in range(10):
    for x in range(9):
        LMurs.append((x,y,x+1,y))
for y in range(9):
    for x in range(10):
        LMurs.append((x,y,x,y+1))

#dessin
def DessineBordDroit(x,y,coul) :
    x *= 50
    y *= 50
    canvas.create_line(x+50,y,x+50,y+50,fill=coul,width = 3)

def DessineBordBas(x,y,coul) :
    x *= 50
    y *= 50
    canvas.create_line(x,y+50,x+50,y+50,fill=coul,width = 3)

def DessineMur(Mur,coul ="black") :
    x1,y1 , x2,y2 = Mur
    if y1==y2 : DessineBordDroit(x1,y1,coul)
    else :      DessineBordBas(x1,y1,coul)

def AfficheNumero():
   for x in range(10):
       for y in range(10):
          xx = x * 50 + 20
          yy = y * 50 + 20
          num = NumCases[x][y]
          canvas.create_text(xx,yy,text=str(num))

def Affichage(MurRetiré=False) :
    #affichage des murs
    canvas.delete("all")
    for M in LMurs :
        DessineMur(M)
    if MurRetiré != False :
      DessineMur(MurRetiré,"red")
    AfficheNumero()

##############################################################

# dans la grille des numéros, change old pour new
def Change(old,new):
   for i in range(10):
       for j in range(10):
           if NumCases[i][j] == old :
               NumCases[i][j] = new

# choisit le mur à retirer
def MurARetirer() :
    L = []
    for Mur in LMurs :
        x1,y1, x2,y2 = Mur
        if NumCases[x1][y1] != NumCases[x2][y2] :
           L.append(Mur)

    if len(L) == 0 :
       return False

    pos = random.randint(0,len(L)-1)
    return L[pos]

#retire un mur
def RetireMur():
    Mur = MurARetirer()
    if L == False : return

    # retire un mur
    LMurs.remove(Mur)
    x1,y1 , x2,y2 = Mur
    numcase1 = NumCases[x1][y1]
    numcase2 = NumCases[x2][y2]
    Change(numcase2,numcase1)
    return Mur


def TODO() :
    MurRetiré = RetireMur()
    Affichage(MurRetiré)
    Mafenetre.after(100,TODO)


# Création de la fenêtre de dessin

Mafenetre = Tk()
Mafenetre.geometry(str(TAILLE) +"x"+str(TAILLE))
canvas = Canvas(Mafenetre,width=TAILLE, height=TAILLE, borderwidth=0, highlightthickness=0,bg="lightgray")
canvas.pack()
Mafenetre.after(100,TODO)
Mafenetre.mainloop()
