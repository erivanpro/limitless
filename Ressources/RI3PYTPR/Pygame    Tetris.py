import pygame
import copy
import random

# initialisation de l'écran de jeu
pygame.init()

# Definit des couleurs RGB
NOIR  = (0, 0, 0)
VERT  = (0, 255, 0)
ROUGE = (255, 0, 0)
BLEU  = (0 , 0 , 255)
GRIS  = (128,128,128)
CYAN  = (0,255,255)
JAUNE = (255,255,0)
ORANGE= (255,150,0)
VERT  = (0,255,255)
MAUVE = (180,80,255)
LCoul = [ NOIR, GRIS, CYAN, JAUNE, MAUVE, ORANGE, BLEU, ROUGE, VERT ]

# PIECES
P_I = [ [0,2,0],
        [0,2,0],
        [0,2,0] ]

P_T = [ [0,0,0],
        [4,4,4],
        [0,4,0]]
        
P_O = [ [3,3,0],
        [3,3,0],
        [0,0,0] ]

P_L = [ [0,0,0],
        [5,5,5],
        [5,0,0] ]

P_J = [ [0,0,0],
        [6,6,6],
        [0,0,6]]

P_Z = [ [7,7,0],
        [0,7,7],
        [0,0,0] ]

P_S = [ [0,8,8],
        [8,8,0],
        [0,0,0]]

LP  = [ P_I, P_T, P_O, P_L, P_J, P_Z, P_S]
 
            
def AffPiece():
    P = LP[idpiece]
    for dx in range(3):
        for dy in range(3):
            c = P[dy][dx]
            if c != 0:
               idcoul = int(c)
               xx = (px+dx) * LCASE
               yy = (py+dy) * LCASE
               R = (xx,yy,LCASE,LCASE)
               pygame.draw.rect(screen,LCoul[idcoul],R)

              

# DECORS
LIGNE_VIDE = [1,1] + [0]*11 + [1]*2
DECOR = []
for i in range(16):
    DECOR.append(LIGNE_VIDE.copy())
DECOR.append([1]*15)
DECOR.append([1]*15)

LCASE = 20
def AfficheDecors():
    for y in range(len(DECOR)) :
        for x in range(len(DECOR[0])):
            xx = x * LCASE
            yy = y * LCASE
            id = DECOR[y][x]

            pygame.draw.rect(screen,LCoul[id],(xx,yy,LCASE,LCASE))
            pygame.draw.rect(screen,NOIR,(xx,yy,LCASE,LCASE),1)


# Initialise la fenêtre de jeu
screenWidth = 300
screenHeight = 360
screen = pygame.display.set_mode((screenWidth,screenHeight))
pygame.display.set_caption("MINI TETRIS")


# Gestion du rafraichissement de l'écran
clock = pygame.time.Clock()
# Cache le pointeur de la souris
pygame.mouse.set_visible(0)


# variables d'état
# piece courante
idpiece = 1
px  = 6
py  = 0
rot = 0
#Touches
KEyDown  = 0
KeyUp    = 0
KeyLeft  = 0
KeyRight = 0

#compteur d'affichage
comptage = 0


# Le jeu continue tant que l'utilisateur ne ferme pas la fenêtre
Termine = False

# Boucle principale de jeu
while not Termine:
   # recupère la liste des évènements du joueur
   event = pygame.event.Event(pygame.USEREVENT)

   # EVENEMENTS
   # détecte le clic sur le bouton close de la fenêtre
   for event in pygame.event.get():
      if event.type == pygame.QUIT:
         Termine = True

   # récupère la liste des touches claviers appuyeées sous la forme d'une liste de booléens
   KeysPressed = pygame.key.get_pressed()

   # LOGIQUE
   # déplacement de la pièce
   comptage += 1
   if comptage % 40 == 0 :
           py += 1
       

   if KeysPressed[pygame.K_UP] and KeyUp == 0:
        pass

   if KeysPressed[pygame.K_LEFT] and KeyLeft == 0:
        pass

   if KeysPressed[pygame.K_RIGHT] and KeyRight == 0:
        pass
            
   if KeysPressed[pygame.K_DOWN] and KeyDown == 0:
        pass
    

   KeyDown  = KeysPressed[pygame.K_DOWN]
   KeyUp    = KeysPressed[pygame.K_UP]
   KeyLeft  = KeysPressed[pygame.K_LEFT]
   KeyRight = KeysPressed[pygame.K_RIGHT]



   # AFFICHAGE
   # Dessine le fond
   AfficheDecors()
   AffPiece()

   # Bascule l'image dessinée à l'écran
   pygame.display.flip()

    # Demande à pygame de se caler sur 30 FPS
   clock.tick(30)

# Ferme la fenêtre
pygame.quit()
