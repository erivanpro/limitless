from tkinter import *
F = Tk()

canvas = Canvas(F, background="white")
id=canvas.create_oval((10,10), (50,50), width=2, outline='green')
canvas.pack()

def change():
   canvas.itemconfig(id, fill='blue')

F.title("Premier test")
F.geometry("300x200")
F.after(2000,change)
F.mainloop()
