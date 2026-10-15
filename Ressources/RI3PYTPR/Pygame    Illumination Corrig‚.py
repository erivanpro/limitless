# permet d'accéder aux fonctions du module pygame
import pygame
import random

# Definit des couleurs RGB
BLACK = [0, 0, 0]
WHITE = [255, 255, 255]
GREEN = [0, 255, 0]
RED   = [255, 0, 0]
BLUE  = [0 , 0 , 255]


# initialisation de l'écran de jeu
pygame.init()

# Initialise la fenêtre de jeu
TailleEcran = [600, 410]
screen = pygame.display.set_mode(TailleEcran)
pygame.display.set_caption("Illumination")

# Gestion du rafraichissement de l'écran
clock = pygame.time.Clock()



# calcule le produit scalaire entre 2 vecteurs
def PS(u,v):
  ux, uy = u
  vx, vy = v
  return ux * vx + uy * vy

# calcule le vecteur AB entre deux points A et B
def vAB(A,B):
  xA,yA = A
  xB,yB = B
  return (xB-xA,yB-yA)

# calcul un vecteur perpendiculaire au vecteur donné
def Rot90(v):
  x,y = v
  return (-y,x)

# L : lampe qui éclaire vers le point P
# Mur : segment MK
# recherche s et t tel que : L + s.LP = M1 + t.M1M2
# le point intersection est donné par L +sLP ou M1+t.M1M2
# sinon pas d'intersection retourne False
def DetectIntersection(L,P,M,K):
  LP  = vAB(L,P)
  LM  = vAB(L,M)
  MK  = vAB(M,K)

  w = Rot90(LP)
  MKw = PS(MK,w)
  LMw = PS(LM,w)

  n = Rot90(MK)
  LPn = PS(LP,n)
  LMn = PS(LM,n)

  if abs(LPn) < 0.001 :
      return False

  if abs(MKw) < 0.001 :
      return False

  s = LMn / LPn
  t = -LMw / MKw


  if t < 0 or t > 1 : return False

  xI = L[0] + s * LP[0]
  yI = L[1] + s * LP[1]
  return (s,xI,yI)

LMurs = []

LMurs.append(((50,200,),(150,100)))
LMurs.append(((200,150,),(300,170)))
LMurs.append(((300,80,),(400,70)))
LMurs.append(((400,150,),(480,200)))
LMurs.append(((450,300,),(450,380)))
LMurs.append(((200,230),(100,300)))

LBord = []
pas = 20
# dessine rayons
for t in range(0,600,pas):
    LBord.append((t,0))

for t in range(0,400,pas):
    LBord.append((0,t))
    LBord.append((600,t))




# Position de départ
lampe_x = 50
lampe_y = 400

# Vitesse et direction
lampe_change_x = 3
lampe_change_y = 3

lampe_rayon= 5

# Le jeu continue tant que l'utilisateur ne ferme pas la fenêtre
Termine = False

# BOUCLE PRINCIPALE DU PROGRAMME
while not Termine:
  # recupère la liste des évènements du joueur
  event = pygame.event.Event(pygame.USEREVENT)

  # EVENEMENTS
  # détecte le clic sur le bouton close de la fenêtre
  for event in pygame.event.get():
    if event.type == pygame.QUIT:
      Termine = True

  # LOGIQUE
  # Déplace la lampe
  lampe_x += lampe_change_x


  # Rebond
  if lampe_x > TailleEcran[0] or lampe_x < 0:
    lampe_change_x = lampe_change_x * -1

  # AFFICHAGE
  # Dessine le fond
  screen.fill(BLACK)


  # dessine
  pygame.draw.circle(screen,WHITE,[lampe_x,lampe_y],lampe_rayon )

  for M in LMurs :
    pygame.draw.line(screen,WHITE,M[0],M[1])

  # dessine rayons
  for B in LBord :
    A = (lampe_x,lampe_y)

    PlusProche = 9999999
    Inter = False
    for M in LMurs :
      I = DetectIntersection(A,B,M[0],M[1])
      if I != False :
        t,xI,yI  = I
        if t < PlusProche :
          PlusProche = t
          Inter = (xI,yI)
    if Inter != False :
        pygame.draw.line(screen,GREEN,A,Inter)
    else:
        pygame.draw.line(screen,GREEN,A,B)




  # Demande à pygame de se caler sur 30 FPS
  clock.tick(30)

  # Bascule l'image dessinée à l'écran
  pygame.display.flip()


# Ferme la fenêtre
pygame.quit()
