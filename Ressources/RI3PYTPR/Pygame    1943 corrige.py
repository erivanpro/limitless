import pygame
import random
import math
 
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
LBateaux = [ [50,100,0]]
LTIRS = []
torpX = 0
torpY = -100

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
    # declenche un tir :
    for B in LBateaux :
        x = B[0]
        y = B[1]
        if random.randint(0,100) == 0 and B[2] == 0:
            DirCanon = [avion_x-x,avion_y-y]
            n2 = DirCanon[0]**2 + DirCanon[1]**2
            n = math.sqrt(n2)
            if n > 0 :
               DirCanon[0] /= n
               DirCanon[1] /= n
               x += DirCanon[0] * 20
               y += DirCanon[1] * 20
               LTIRS.append([x,y,DirCanon[0],DirCanon[1]])
    # déplacements des tirs :
    for T in LTIRS :
        T[0] += 2*T[2] # xtir += dx
        T[1] += 2*T[3] # ytir += dy
        
    # déplacements des torpilles :
    torpY -= 3
      
        
    # test collision avec l'avion :
    for T in LTIRS :
        xx = T[0]
        yy = T[1]
        d2 = (xx-avion_x)**2+(yy-avion_y)**2
        d = math.sqrt(d2)
        if d < 20 :
            VIE -= 15
            if VIE < 0 : VIE = 0
            T[0] = T[1] = 10000
    for B in LBateaux :
      v = [torpX-B[0], torpY-B[1]]
      d2 = v[0]**2 + v[1]**2
      d = math.sqrt(d2)
      if d < 10 : 
         print("BOUM")
         B[2] = compteur
         torpY = -100
         
    # ajout des navires :
    if random.randint(0,150) == 0 :
        y = -70
        
        x = random.randint(50,LARG-50)
        Superposition = False
        # evite de sortir un bateau à la meme abscise qu'un autre
        for B in LBateaux :
            if abs(x-B[0]) < 20 and B[1] < 100:
                Superposition = True
        if not Superposition :
           LBateaux.append([x,y,0])
        
    
    # LOGIQUE
    LEFT  = KeysPressed[pygame.K_LEFT]
    RIGHT = KeysPressed[pygame.K_RIGHT]
    UP    = KeysPressed[pygame.K_UP]
    DOWN  = KeysPressed[pygame.K_DOWN]
    
    if LEFT == 1 and RIGHT == 0 :  avion_x -= 3
    if LEFT == 0 and RIGHT == 1 :  avion_x += 3
    if UP == 1 and DOWN == 0 :    avion_y -= 3
    if UP == 0 and DOWN == 1 :    avion_y += 3
        
    if KeysPressed[pygame.K_SPACE] and torpY < 0: 
       torpX = avion_x
       torpY = avion_y
     
     
    # AFFICHAGE
    
    #MER
    screen.blit(MER,(0,compteur%HAUT))
    screen.blit(MER,(0,compteur%HAUT-HAUT))
        
 
   
    
    # VIE
    R = [ 30,10,VIE*3 ,10 ]
    pygame.draw.rect(screen,ROUGE,R)
    
    #TORPILLES
    Z = [torpX-4,torpY  -4,6,20]
    pygame.draw.ellipse(screen,[255,255,255],Z) 
     
    # Bateaux
    for B in LBateaux :
      ImageBateau = pygame.Surface((33,150),pygame.SRCALPHA )
      ImageBateau.fill([128,0,0,0])
     
      # coque
      x,y,Alive = B
      Alpha = 255
      if B[2] > 0 : # le bateau a été torpillé :
          Alpha = max(0,255-(compteur - B[2])*255/300)

      R = [ 0 , 0 ,26,130] 
      pygame.draw.ellipse(ImageBateau,[128,128,128,Alpha],R) 
      # canon
      DirCanon = [avion_x-x,avion_y-y]
      n2 = DirCanon[0]**2 + DirCanon[1]**2
      n = math.sqrt(n2)
      if n > 0 :
        DirCanon[0] /= n
        DirCanon[1] /= n
        d = 20
        P = [ 12 + d * DirCanon[0] , 70 + d * DirCanon[1] ]
        pygame.draw.line(ImageBateau,[255,255,255,Alpha],(12,70),P,4)
        
      #tourelle
      R = [3,61,20,20]
      pygame.draw.ellipse(ImageBateau,[0,0,0,Alpha],R) 
      screen.blit(ImageBateau,(x-12,y-70))
 
    #TIRS
    for T in LTIRS :
        xx = T[0]
        yy = T[1]
        Z = [xx-5,yy,10,10] 
        pygame.draw.ellipse(screen,JAUNE,Z) 
        

        
                
        
    # dessine l'avion
    R = [ avion_x - 5, avion_y - 10,10,40] 
    pygame.draw.ellipse(screen,ORANGE,R,)  
    R = [ avion_x - 20, avion_y ,6,20] 
    pygame.draw.rect(screen,ORANGE,R,)   
    R = [ avion_x + 15, avion_y ,6,20] 
    pygame.draw.rect(screen,ORANGE,R,)    
    R = [ avion_x -25, avion_y +5,50,10]
    pygame.draw.rect(screen,GRIS,R,)
             
    
   
 
    # 30 fps
    clock.tick(30)
    pygame.display.flip()
 

pygame.quit()