from tkinter import *
F = Tk()
canvas = Canvas(F, background="white")
canvas.pack()

curId = -1
StartPoint = (0,0)

def Start(event):
    global curId, StartPoint
    x = event.x
    y = event.y
    StartPoint = (x,y)
    curId = canvas.create_rectangle((x,y),(x,y))

def Move(event):
    x1 = event.x
    y1 = event.y
    xmin = min(x1,StartPoint[0])
    ymin = min(y1,StartPoint[1])
    xmax = max(x1,StartPoint[0])
    ymax = max(y1,StartPoint[1])
    canvas.coords(curId,xmin,ymin,xmax,ymax)

def Fin(event):
    Move(event)

canvas.bind("<ButtonPress-1>", Start)
canvas.bind('<B1-Motion>', Move)
canvas.bind('<ButtonRelease-1>', Fin)

F.title("Premier test")
F.geometry("300x200")
F.mainloop()
