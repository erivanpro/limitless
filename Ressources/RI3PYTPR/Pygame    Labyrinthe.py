import pygame
import math
 
 
# crée une palette de couleurs
palette = {} # initialise un dictionnaire
palette['B'] =  [  0,   0, 255]   # BLUE
palette[' '] =  [  0,   0,   0]   # BLACK
palette['W'] =  [255, 255, 255]   # WHITE
palette['G'] =  [  0, 255,   0]   # GREEN
palette['R'] =  [255,   0,   0]   # RED
palette['Y'] =  [255, 255,   0]   # YELLOW
palette['C'] =  [  0, 225, 255]   # CYAN


TAILLE = 40  # largeur d'une case du labyrinthe en pixels
 

# grille du jeu

LABY = [ 'BBBBBBBBBB', 
         'B        B',
         'B BB BBBBB',
         'B B  B   B',
         'B BB BB  B',
         'B B   BB B',
         'B  B  B  B',
         'BB BB BB B',
         'B   B    B',
         'BBBBBBBBBB' ]

HauteurLABY = len(LABY)
LargeurLABY = len(LABY[0])

#verification du plan
for ligne in LABY :
    if len(ligne) != LargeurLABY :
        print("La ligne >>" + ligne + "<< n a pas la même largeur que les autres")
        exit()

 
        
###################################################################################

def ToSprite(ascii):
   # on prend la largeur de la ligne la plus grande
   _larg = max( len(L) for L in ascii )
   _haut = len(pers1)
   
   sprite = pygame.Surface((_larg, _haut))

   for y in range(_haut):
      ligne = ascii[y]
      for x in range(len(ligne)):
         c = ligne[x]  # on recupere la lettre
         couleur = palette[c]  #on stocke le code couleur RVB
         sprite.set_at((x, y), couleur)
  
   return sprite


pers1= [ '   RRR    ', 
         '  RRWWR   ',
         '   RRR    ',
         '   YY     ',
         '   YYY     ',
         '   YY YG   ',
         '   GG      ',
         '   CC      ',
         '   CC      ',
         '  C  C     ',
         '  C  C    ' ]
         
pers2 = [ '   RRR    ', 
         '  RRWWR   ',
         '   RRR    ',
         '   YY     ',
         '   YYY     ',
         '   YY YG   ',
         '   GG      ',
         '   CC      ',
         '   CC      ',
         '   CC     ',
         '   CC    ' ]
         
clef = [ ' YY           ',
         'Y  YYYYYYYYYYY',
         'Y  Y      Y  Y ',
         ' YY       Y  Y ' ]


player_sprite = ToSprite(pers1)
player_x = 50
player_y = 50
print(player_sprite.get_width())
print(math.sqrt(16))

###################################################################################
 

pygame.init()
WINDOW_SIZE = [400, 400]
screen = pygame.display.set_mode(WINDOW_SIZE)
pygame.display.set_caption("LABYRINTHE")
done = False
clock = pygame.time.Clock()
 
# Boucle principale de programme
while not done:
    event = pygame.event.Event(pygame.USEREVENT)    
    
    for event in pygame.event.get():  
        if event.type == pygame.QUIT: 
            done = True  
            
    KeysPressed = pygame.key.get_pressed()
    
    
   
    
    # LOGIQUE
    
    if KeysPressed[pygame.K_UP]:
        player_y -= 1
        
    if KeysPressed[pygame.K_DOWN]:
        player_y += 1
       
       
    # AFFICHAGE
 
    # dessine les murs
    for ix in range(LargeurLABY):
        for iy in range(HauteurLABY):
            xpix = TAILLE * ix
            ypix = TAILLE * iy
            CodeCouleur = LABY[iy][ix]
            couleur = palette[CodeCouleur]
            pygame.draw.rect(screen,couleur,[xpix,ypix,TAILLE,TAILLE])
             
    # dessine le joueur
    screen.blit(player_sprite,(player_x,player_y))
   
 
    # 30 fps
    clock.tick(30)
    pygame.display.flip()
 

pygame.quit()