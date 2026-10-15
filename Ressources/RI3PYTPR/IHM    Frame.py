from tkinter import *
F = Tk()

FR = Frame(F, bd=1, relief='solid')

L1 = Label(FR, text='Bonjour',bg="white")
L1.grid(row=0, column=0)
L2 = Label(FR, text='Test')
L2.grid(row=1, column=0)

FR.place(x=10, y = 10)

F.title("Premier test")
F.mainloop()
