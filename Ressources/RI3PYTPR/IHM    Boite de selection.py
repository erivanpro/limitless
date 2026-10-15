from tkinter import *
import tkinter.ttk

def on_select(event=None):
   F.title(cb.get())

F = Tk()

cb = tkinter.ttk.Combobox(F, values=("A", "B", "C", "D", "E"))
cb.set("A")
cb.pack()
cb.bind('<<ComboboxSelected>>', on_select)


F.title("Premier test")
F.geometry("300x200")
F.mainloop()
