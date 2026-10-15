import numpy as np
import cv2

cap = cv2.VideoCapture("Data\\cars_city.mp4")
 
color = (0,0,255)
line_width = 3 
point_1 = (100,100)
point_2 = (200,150)



def click(event, x, y, flags, param):
	global point_1, point_2, pressed
	if event == cv2.EVENT_LBUTTONDOWN:
		print("Pressed",x,y)
		point_1 = (x,y)
		point_2 = (x+100,y+50)

cv2.namedWindow("Image")
cv2.setMouseCallback("Image",click)

while(True):
	ret, frame = cap.read()

	frame = cv2.resize(frame, (0,0), fx=0.5,fy=0.5)
	 
	cv2.rectangle(frame, point_1, point_2, color, line_width) 

	cv2.imshow("Image",frame) 
	

	ch = cv2.waitKey(10)
	if ch & 0xFF == ord('q'):
		break

cap.release()
cv2.destroyAllWindows()
 