# Dessin en texte
L = 31
T = []
for i in range(L) :
    T.append(["."]*L)

def Affichage():
   for y in range(L):
        for x in range(L):
            print(T[x][y]+T[x][y],end="")
        print()

def Setpixel(x,y,carac) :
    if x < 0 : return
    if y < 0 : return
    if x >= L : return
    if y >= L : return
    T[x][y] = carac

def LigneHoriz(x1,y,x2,carac):
    for x in range(x1,x2+1):
        Setpixel(x,y,carac)

def LigneVert(x,y1,y2,carac):
    for y in range(y1,y2):
        Setpixel(x,y,carac)

def Disque(x1,y1,r,carac):
    for x in range(x1-r,x1+r+1) :
        for y in range(y1-r,y1+r+1):
            if (x-x1)**2 + (y-y1)**2 <= r**2 :
                Setpixel(x,y,carac)

for x in range(0,L,3) :
    LigneVert(x,0,30,"#")

for y in range(0,30,3) :
    LigneHoriz(0,y,30,"=")

Disque(0,0,12,"O")
Disque(30,30,12,"O")

Affichage()
