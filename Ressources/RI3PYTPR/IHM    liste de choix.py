from tkinter import *
F = Tk()

def AffSelect(t):
    T = []
    for index in L.curselection():
        T.append(index)
    F.title(str(T))

Choix = Variable(F, ('Choix 2', 'Choix 3', 'Choix 4') )
L = Listbox(F, listvariable=Choix, selectmode="multiple")
L.insert(0,"Choix 1")
L.insert('end', 'Choix10', 'Choix11')
L.delete(2)

L.bind('<<ListboxSelect>>', AffSelect)
L.pack()

F.title("Premier test")
F.geometry("300x200")
F.mainloop()
