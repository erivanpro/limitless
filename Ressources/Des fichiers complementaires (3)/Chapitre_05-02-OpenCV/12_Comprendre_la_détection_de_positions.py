import cv2 
import mediapipe as mp
 
 

draw_tool = mp.solutions.drawing_utils 
posEstimation = mp.solutions.pose 
pose = posEstimation.Pose()

  
cap = cv2.VideoCapture("Data\\player_2.mov")
 
 

while True:
    
    hasFrame, frame = cap.read()
     
    frame = cv2.resize(frame, (0,0), fx=0.5,fy=0.5)
    frameRGB = cv2.cvtColor(frame, cv2.COLOR_BGR2RGB) 
    results = pose.process(frameRGB) 
    if results.pose_landmarks : 
        draw_tool.draw_landmarks(frame, results.pose_landmarks, posEstimation.POSE_CONNECTIONS)

    print(results.pose_landmarks)

    cv2.imshow('Pose estimation', frame)
    cv2.moveWindow("Pose estimation", 0, 0)
    
    ch = cv2.waitKey(1)
    if ch & 0xFF == ord('q'):
        break

cap.release()
cv2.destroyAllWindows()

