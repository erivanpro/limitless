from tkinter import *
F = Tk()

P = PanedWindow(F)
l1 = Label(P, text='P1', background="white")
l2 = Label(P, text='P2', background="white")
l3 = Label(P, text='P3', background="white")
P.add(l1, height=100, width = 200)
P.add(l2, height=100, width = 200)
P.add(l3, height=100, width = 200)
P.grid(row=0, column=0)

F.title("Premier test")
F.mainloop()
