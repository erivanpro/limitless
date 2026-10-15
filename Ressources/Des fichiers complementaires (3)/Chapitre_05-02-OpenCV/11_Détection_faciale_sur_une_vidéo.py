import cv2

cap = cv2.VideoCapture("Data\\friends.mov")
 
path_xml_face = "haarcascade_frontalface_default.xml"
face_cascade = cv2.CascadeClassifier(path_xml_face)
 

while(True):
	ret, frame = cap.read()

	frame = cv2.resize(frame, (0,0), fx=0.5,fy=0.5)
	gray = cv2.cvtColor(frame,cv2.COLOR_BGR2GRAY)
	faces = face_cascade.detectMultiScale(gray, scaleFactor=1.10, minNeighbors=5, minSize=(40,40))
	
	for x,y,w,h in faces :
		cv2.rectangle(frame, (x,y), (x+w,y+h), (0,255,0), 2)
	
	 

	cv2.imshow("Image",frame)
    
	ch = cv2.waitKey(1)
	if ch & 0xFF == ord('q'):
		break
 

cap.release()
cv2.destroyAllWindows()