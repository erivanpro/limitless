from tkinter import *
F = Tk()

#zone de dessin
canvas = Canvas(F, background="white")
canvas.pack(side=BOTTOM)


# choix du trait
Label(F,text ="Epaisseur du trait  ").pack(side="left")
epaiss = IntVar(F)
s = Spinbox(F, textvariable=epaiss, from_= 5, to=100, increment=5,width= 4)
s.pack(side="left")

#palette de couleur
Label(F,text ="   ").pack(side="left")
LC = [ "","red", "green", "blue", "yellow"]

def ChangeCoul(CoulName) :
    global coul
    coul = LC[CoulName]
    LCoul.config(background = coul)

def Coul1() : ChangeCoul(1)
def Coul2() : ChangeCoul(2)
def Coul3() : ChangeCoul(3)
def Coul4() : ChangeCoul(4)

Button(F, bg = LC[1],width=2,command=Coul1).pack(side="left")
Button(F, bg = LC[2],width=2,command=Coul2).pack(side="left")
Button(F, bg = LC[3],width=2,command=Coul3).pack(side="left")
Button(F, bg = LC[4],width=2,command=Coul4).pack(side="left")

LCoul = Label(F,width =5)
LCoul.pack(side="left")

#Forme de crayon
isCarre = BooleanVar(F,'0')
CB=Checkbutton(F,variable=isCarre,text="Forme carré")
CB.pack(side="left")

#tracé
def Draw(event):
  global lastP
  x = event.x
  y = event.y
  r = epaiss.get()
  if isCarre.get() :
   canvas.create_rectangle((x-r,y-r),(x+r,y+r),fill=coul,width=0)
  else :
    canvas.create_oval((x-r,y-r),(x+r,y+r),fill=coul,width=0)

canvas.bind("<ButtonPress-1>", Draw)
canvas.bind('<B1-Motion>', Draw)

ChangeCoul(1) # rouge par défaut
F.title("Projet paint")
F.mainloop()
