from tkinter import Tk, Canvas

TAILLE = 500

# votre programme

def PROG():
  r = TAILLE-1
  canvas.create_line(0,0,r,0 )
  canvas.create_line(0,r,r,r )
  canvas.create_line(0,0,0,r )
  canvas.create_line(r,0,r,r )

  canvas.create_line(0,0,r,r)
  canvas.create_line(0,r,r,0)
  canvas.create_oval(0,0,r,r)


# Création de la fenêtre de dessin

Mafenetre = Tk()
Mafenetre.geometry(str(TAILLE) +"x"+str(TAILLE))
canvas = Canvas(Mafenetre,width=TAILLE, height=TAILLE, borderwidth=0, highlightthickness=0,bg="lightgray")
canvas.pack()
Mafenetre.after(100,PROG)
Mafenetre.mainloop()
