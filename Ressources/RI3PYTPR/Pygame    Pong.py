import pygame

# initialisation de l'écran de jeu
pygame.init()


# Definit des couleurs RGB
BLACK = [0, 0, 0]
WHITE = [255, 255, 255]
GREEN = [0, 255, 0]
RED   = [255, 0, 0]
BLUE  = [0 , 0 , 255]

police = pygame.font.SysFont("Arial", 25)


#fonctions permettant de dessiner la balle et les deux raquettes
def Drawpalet(x, y):
   R = (x,y,palet_width,palet_height)
   pygame.draw.rect(screen, WHITE, R, 0)

def DrawBall(x,y):
   pygame.draw.circle(screen, WHITE, (x,y),10, 0)


# Initialise la fenêtre de jeu
screenWidth = 600
screenHeight = 400
screen = pygame.display.set_mode((screenWidth,screenHeight))
pygame.display.set_caption("PING")



# Gestion du rafraichissement de l'écran
clock = pygame.time.Clock()

# Cache le pointeur de la souris
pygame.mouse.set_visible(0)


# variables d'état

palet_height = 50
dist_mur   = 20  # distance du mur au bord de la raquette
palet_width  = 10  # epaisseur de la raquette

palet_G_x = dist_mur
palet_G_y = 50

palet_D_x = screenWidth - dist_mur
palet_D_y = 30

ball_x = int(screenWidth / 2)
ball_y = int(screenHeight / 2)
ball_speed_x = -2
ball_speed_y = -2
ball_radius  = 10

score_player1 = 0
score_player2 = 0

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
   # déplacement du palet gauche

   if KeysPressed[pygame.K_UP]:
       palet_G_y -= 2

   if KeysPressed[pygame.K_DOWN]:
       palet_G_y += 2

   if KeysPressed[pygame.K_q]:
       palet_D_y -= 2

   if KeysPressed[pygame.K_a]:
       palet_D_y += 2


   if palet_G_y < 0 :
      palet_G_y = 0

   if palet_G_y > screenHeight - palet_height :
       palet_G_y = screenHeight - palet_height


   # Déplacement de la balle
   ball_x += ball_speed_x
   ball_y += ball_speed_y

   if ball_y < ball_radius or ball_y > screenHeight - ball_radius :
       ball_speed_y *= -1

   # collision entre la balle et le palet de gauche
   if ball_x  <  dist_mur + palet_width + ball_radius :
       if ball_y > palet_G_y  and  ball_y  <  palet_G_y + palet_height :
          ball_speed_x *= -1

   if ball_x  > palet_D_x - ball_radius :
       if ball_y > palet_D_y  and  ball_y  <  palet_D_y + palet_height :
          ball_speed_x *= -1

   # collision avec les murs gauche et droit
   if ball_x < ball_radius :
      ball_x = screenWidth // 2
      ball_y = screenHeight // 2
      score_player1 += 1

   if ball_x > screenWidth - ball_radius :
      ball_x = screenWidth // 2
      ball_y = screenHeight // 2
      score_player2 += 1


   # AFFICHAGE
   # Dessine le fond
   screen.fill(BLACK)

   Drawpalet(palet_G_x, palet_G_y)
   Drawpalet(palet_D_x, palet_D_y)
   DrawBall(ball_x,ball_y)

   #  dessine le texte dans une zone de rendu à part
   texte = str(score_player1)+" : " + str(score_player2)
   if score_player1 == 3 :
      texte = "Joueur 1 GAGNANT"
   if score_player2 == 3 :
      texte = "Joueur 2 GAGNANT"

   zone = police.render( texte, True, GREEN)
   # affiche la zone de rendu au dessus de fenetre de jeu
   screen.blit(zone,(280,10))



   # Bascule l'image dessinée à l'écran
   pygame.display.flip()

    # Demande à pygame de se caler sur 30 FPS
   clock.tick(30)

# Ferme la fenêtre
del(police)
pygame.quit()
