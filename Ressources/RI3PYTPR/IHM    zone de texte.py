from tkinter import *

def button1Clic():
    label1.config(text = text.get())

def button2Clic():
    text.set("Hello")

def TextChange(a,b,c):
    print( text.get() )


F = Tk()

button1 = Button(F, text="Get", command=button1Clic)
button1.pack()
label1 = Label(F, text = "Get info")
label1.pack()

button2 = Button(F, text="Set Hello", command=button2Clic)
button2.pack()

text     = StringVar(F)
TextEdit = Entry(F, textvariable=text)
TextEdit.pack()
text.trace("w", TextChange)

TextEdit2 = Entry(F, textvariable=text)
TextEdit2.pack()

F.title("Premier test")
F.geometry("300x200")
F.mainloop()
