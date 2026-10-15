# Test si un point appartient au rectangle
from tkinter import Tk, Canvas

TAILLE = 500

xmin,ymin = 100,100
xmax,ymax = 400,300

def fond():
    canvas.create_rectangle(xmin,ymin,xmax,ymax)


def click(event):
    xs = event.x
    ys = event.y
    print("Position de la souris :", xs,ys)

    dedans = True
    if xs > xmax : dedans = False
    if xs < xmin : dedans = False
    if ys > ymax : dedans = False
    if ys < ymin : dedans = False

    r = 10
    if dedans :
        # dessinne une croix
        canvas.create_line(xs-r,ys-r,xs+r,ys+r)
        canvas.create_line(xs-r,ys+r,xs+r,ys-r)
    else:
        # dessine un cercle
        canvas.create_oval(xs-r,ys-r,xs+r,ys+r)


# Création de la fenêtre de dessin

Mafenetre = Tk()
Mafenetre.geometry(str(TAILLE) +"x"+str(TAILLE))
canvas = Canvas(Mafenetre,width=TAILLE, height=TAILLE, borderwidth=0, highlightthickness=0,bg="lightgray")
canvas.pack()
Mafenetre.bind("<Button-1>", click)
Mafenetre.after(100,fond)
Mafenetre.mainloop()
