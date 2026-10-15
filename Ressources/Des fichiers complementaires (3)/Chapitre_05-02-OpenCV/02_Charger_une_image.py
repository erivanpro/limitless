import numpy as np
import cv2
 
img = cv2.imread("Data\\image_01.jpg")
cv2.namedWindow("Image")
cv2.imshow("Image", img)
cv2.moveWindow("Image", 0, 0)
cv2.waitKey(0)
cv2.imwrite("image_01_opencv.jpg", img)
cv2.destroyAllWindows()

