import numpy as np
import cv2

image = cv2.imread("Data\\image_02.jpg")



 
image = cv2.resize(image, (0,0), fx=0.5,fy=0.5)
blur_1 = cv2.GaussianBlur(image[50:150,100:150,:], (31,31),0)
blur_2 = cv2.GaussianBlur(image[50:150,260:310,:], (31,31),0)
blur_3 = cv2.GaussianBlur(image[10:80,370:420,:], (31,31),0)


cv2.imshow("Original_before",image)
image[50:150,100:150,:]= blur_1
image[50:150,260:310,:] = blur_2
image[10:80,370:420,:] = blur_3
cv2.imshow("Original_after",image)

cv2.waitKey(0)
cv2.destroyAllWindows()