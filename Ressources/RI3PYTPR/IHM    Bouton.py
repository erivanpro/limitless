from tkinter import *

def button1Clic():
    button1.config(background = "red")
    print("bonjour")

Mafenetre = Tk()

button1 = Button(Mafenetre, text="Rouge", command=button1Clic)
button1.pack()

Mafenetre.title("Premier test")
Mafenetre.geometry("300x200")
Mafenetre.mainloop()
