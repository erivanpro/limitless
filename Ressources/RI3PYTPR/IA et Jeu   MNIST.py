import numpy as np
import mnist
from keras.models import Sequential
from keras.layers import Dense
from keras.utils import to_categorical
import matplotlib.pyplot as plt

train_images = mnist.train_images()
train_labels = mnist.train_labels()
test_images = mnist.test_images()
test_labels = mnist.test_labels()


# normalise les images entre -0.5 et 0.5
train_images = (train_images / 255)
test_images  = (test_images / 255)

# transforme les images 2D en vecteur 1D
train_images = train_images.reshape((-1, 784))
test_images  = test_images.reshape((-1, 784))

# Construit le réseau
#model = Sequential([ Dense(10, activation='softmax', input_shape=(784,)) ])

# Construit le réseau
model = Sequential([
Dense(32, activation='relu', input_shape=(784,)),
Dense(10, activation='softmax' ) ])


model.compile(optimizer='adam',loss='categorical_crossentropy',metrics=['accuracy'])

# Entrainement.
model.fit(train_images,to_categorical(train_labels),epochs=5,batch_size=32,verbose=1)

print("***********************")

#validation
R = model.evaluate(test_images,  to_categorical(test_labels))
print("Reussite ",R[1])
