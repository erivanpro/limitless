from tkinter import *

def update():
   F.title(value.get())

F = Tk()
value = IntVar(F)
s = Spinbox(F, textvariable=value, from_= 0, to=5, increment=1)
s.config(command=update)
s.pack()

F.title("Premier test")
F.geometry("300x200")
F.mainloop()
