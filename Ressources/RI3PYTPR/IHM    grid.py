from tkinter import *
F = Tk()

L1 = Label(F,text = "1",bg='white')
L1.grid(column=0,row=0, sticky="W")

L2 = Label(F,text = "2",bg='white')
L2.grid(column=1,row=0,sticky="E")

L3 = Label(F,text = "33333",bg='white')
L3.grid(column=0,row=1)

L4 = Label(F,text = "44444",bg='white')
L4.grid(column=1,row=1)

L5 = Label(F,text = "55555",bg='white')
L5.grid(column=0,row=5,columnspan = 2)

L6 = Label(F,text = "66666",bg='white')
L6.grid(column=0,row=5,columnspan = 2,sticky="WE")

F.title("Premier test")
F.geometry("300x200")
F.mainloop()
