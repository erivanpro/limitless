from tkinter import *

def button1Clic():
    label1.config(text = "clic")
    label1.config(background = "white")

Mafenetre = Tk()

button1 = Button(Mafenetre, text="Test", command=button1Clic)
button1.pack()

label1 = Label(Mafenetre, text = "Essai")
label1.pack()

Mafenetre.title("Premier test")
Mafenetre.geometry("300x200")
Mafenetre.mainloop()
