from tkinter import *
F = Tk()


L1 = Label(F,text = "11111",bg='white')
L1.pack(side=LEFT)

L2 = Label(F,text = "22222",bg='white')
L2.pack(side=LEFT)

L3 = Label(F,text = "33333",bg='white')
L3.pack(side=TOP)

L4 = Label(F,text = "4444",bg='white')
L4.pack(side=BOTTOM)

L5 = Label(F,text = "55555",bg='white')
L5.pack(side=RIGHT)

L6 = Label(F,text = "66666",bg='white')
L6.pack(side=LEFT)

F.title(F,"Premier test")
F.geometry("300x200")

F.title(F,"Premier test")
F.mainloop()
