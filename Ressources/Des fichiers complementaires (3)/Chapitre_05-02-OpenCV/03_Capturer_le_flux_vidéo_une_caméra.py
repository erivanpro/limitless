import numpy as np
import cv2

cap = cv2.VideoCapture("Data\\player_1.mov")

#cap = cv2.VideoCapture(0) # pour lire le flux vidéo directement depuis la caméra de votre ordinateur
 


while(True):
	ret, frame = cap.read()

	frame = cv2.resize(frame, (0,0), fx=0.5,fy=0.5)
	cv2.imshow("Image",frame)
	cv2.moveWindow("Image",0,0) 
	 
	ch = cv2.waitKey(1)
	if ch & 0xFF == ord('q'):
		break

cap.release()
cv2.destroyAllWindows()