from tkinter import *

def ud():
  F.title(d.get())

F = Tk()

d = StringVar()
d.set("A")

b1=Radiobutton(F,variable=d,text="Choix 1",value="A",command=ud)
b1.pack()
b2=Radiobutton(F,variable=d,text="Choix 1",value="B",command=ud)
b2.pack()
b3=Radiobutton(F,variable=d,text="Choix 3",value="C",command=ud)
b3.pack()


F.title("Premier test")
F.geometry("300x200")
F.mainloop()
