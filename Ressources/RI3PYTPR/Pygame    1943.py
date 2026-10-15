import pygame
import random
 
# Definit des couleurs RGB
NOIR  = [0, 0, 0]
BLANC = [255,255,255]
VERT  = [0, 255, 0]
ROUGE = [255, 0, 0]
BLEU  = [0 , 0 , 255]
GRIS  = [128,128,128]
CYAN  = [0,255,255]
JAUNE = [255,255,0]
ORANGE= [255,150,0]
VERT  = [0,255,255]
MAUVE = [180,80,255]
LARG = 400
HAUT = 600
WINDOW_SIZE = [LARG, HAUT]

  
 
  
MER = pygame.Surface((LARG, HAUT))
pygame.draw.rect(MER, BLEU, [0,0,LARG,HAUT])
for i in range(2000) :
    x = random.randint(0,LARG-1)
    y = random.randint(1,HAUT-1)
    MER.set_at((x, y), BLANC)

 
avion_x = LARG//2
avion_y = HAUT - 50
VIE = 100
LBateaux = [ [50,100]]

###########################################
 

pygame.init()

screen = pygame.display.set_mode(WINDOW_SIZE)
pygame.display.set_caption("1943")
done = False
clock = pygame.time.Clock()
 
# Boucle principale de programme
compteur = 0
while not done:
    compteur += 1
    event = pygame.event.Event(pygame.USEREVENT)    
    
    for event in pygame.event.get():  
        if event.type == pygame.QUIT: 
            done = True  
            
    KeysPressed = pygame.key.get_pressed()
    
    # avance bateau
    for B in LBateaux :
        B[1] += 1
   
    
    # LOGIQUE
    LEFT  = KeysPressed[pygame.K_LEFT]
    RIGHT = KeysPressed[pygame.K_RIGHT]
    UP    = KeysPressed[pygame.K_UP]
    DOWN  = KeysPressed[pygame.K_DOWN]
    
    if LEFT == 1 and RIGHT == 0 :  avion_x -= 3
    if LEFT == 0 and RIGHT == 1 :  avion_x += 3
    if UP == 1 and DOWN == 0 :    avion_y -= 3
    if UP == 0 and DOWN == 1 :    avion_y += 3
        
       
    # AFFICHAGE
    
    #MER
    screen.blit(MER,(0,compteur))
 
    # dessine l'avion
    R = [ avion_x - 5, avion_y - 10,10,40] 
    pygame.draw.ellipse(screen,ORANGE,R,)  
    R = [ avion_x - 20, avion_y ,6,20] 
    pygame.draw.rect(screen,ORANGE,R,)   
    R = [ avion_x + 15, avion_y ,6,20] 
    pygame.draw.rect(screen,ORANGE,R,)    
    R = [ avion_x -25, avion_y +5,50,10]
    pygame.draw.rect(screen,GRIS,R,)
    
    # VIE
    R = [ 30,10,30+VIE*3 ,10 ]
    pygame.draw.rect(screen,ROUGE,R)
     
    # Bateaux
    for B in LBateaux :
      # coque
      x,y = B
      R = [ x - 12, y - 70,26,130] 
      pygame.draw.ellipse(screen,GRIS,R,) 
      # canon
      DirCanon = [0,1]
      d = 20
      P = [ x + d * DirCanon[0], y + d * DirCanon[1] ]
      pygame.draw.line(screen,BLANC,(x,y),P,4)
      #tourelle
      R = [x-9,y-9,20,20]
      pygame.draw.ellipse(screen,NOIR,R) 
      
             
    
   
 
    # 30 fps
    clock.tick(30)
    pygame.display.flip()
 

pygame.quit()