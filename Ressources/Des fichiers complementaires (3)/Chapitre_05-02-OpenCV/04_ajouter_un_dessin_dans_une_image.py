import numpy as np
import cv2


img = cv2.imread("Data\\image_02.jpg")
cv2.namedWindow("Image")



color_1 = (0,0,255)
color_2 = (0,255,0)
line_width = 3
radius = 120
point_1 = (160,180)
point_2 = (480,410)
point_3 = (620,510)
 

img = cv2.resize(img, (800,600))
cv2.circle(img, point_1, radius, color_1, line_width)
cv2.rectangle(img, point_2, point_3, color_2, line_width) 
cv2.imshow("Image", img)
cv2.moveWindow("Image", 0, 0)

cv2.imwrite("image_02_opencv.jpg", img)

cv2.waitKey(0)
cv2.destroyAllWindows()