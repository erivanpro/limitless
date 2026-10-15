from tkinter import *
import random
F = Tk()

DD = chr(0x2662)
DD5 = DD+DD+DD+DD+DD
D1 = chr(0x2680)
D2 = chr(0x2681)
D3 = chr(0x2682)
D4 = chr(0x2683)
D5 = chr(0x2684)
D6 = chr(0x2685)
LD = [ "",D1,D2,D3,D4,D5,D6]

def Tirage():
   t = ''
   total = 0
   for i in range(d.get()):
     des = random.randint(1,6)
     total += des
     t += LD[des]
   Resultat.config(text = t)
   L.config(text = total)


# le bouton pour lancer le tirage
B = Button(F, text = "Lancez !",command=Tirage)
B.grid(column=0,row=0,rowspan = 3, sticky="ewns")

#Choix du nombre de dés
d = IntVar()
d.set(1)

b1=Radiobutton(F,variable=d,text="1D6",value=1)
b1.grid(column=1,row=0)

b2=Radiobutton(F,variable=d,text="3D6",value=3)
b2.grid(column=1,row=1)

b3=Radiobutton(F,variable=d,text="5D6",value=5)
b3.grid(column=1,row=2)

# l'affichage du score
L = Label(F,text ="XX",bg="cyan", width=3)
L.grid(column=2,row=0,rowspan = 3, sticky="ewns")
L.config( font = "Arial 30")

#zone de dessin des dès
Resultat = Label(F, text=DD5,width=7)
Resultat.config( font = "Arial 80")
Resultat.grid(column=0,row=3,columnspan = 3)

F.title("Tirage de dés")
F.mainloop()
