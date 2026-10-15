from tkinter import *

def updatecb():
  F.title(ischecked.get())

F = Tk()
ischecked = BooleanVar(F, '1')

CB=Checkbutton(F,variable=ischecked,text="test",command=updatecb)
CB.pack()

F.title("Premier test")
F.geometry("300x200")
F.mainloop()
