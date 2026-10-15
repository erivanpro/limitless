import numpy as np
import cv2


black = np.zeros([150,200,3],'uint8')
cv2.imshow("Black",black)

color = black.copy()
color[:,:] = (255,0,0)
cv2.imshow("Blue",color)
print(color[0,0,:])

cv2.waitKey(0)
cv2.destroyAllWindows()