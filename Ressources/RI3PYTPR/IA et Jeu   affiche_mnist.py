import numpy as np
import mnist
import matplotlib.pyplot as plt



train_images = mnist.train_images()
train_labels = mnist.train_labels()
test_images = mnist.test_images()
test_labels = mnist.test_labels()

# montre les images de test

plt.show()
for i in range(100):

    image = test_images[i]
    image = np.array(image, dtype='float')
    pixels = image.reshape((28, 28))
    plt.imshow(pixels, cmap='gray')
    texte = "Categorie : " + str(test_labels[i])
    plt.title(texte)
    plt.pause(0.2)

