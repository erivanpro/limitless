import cv2
from ultralytics import YOLO

# Charger le modèle YOLOv8 ou un autre modèle: yolov8n.pt, yolov8m.pt, etc.
model = YOLO('yolov8l.pt')  

 
cap = cv2.VideoCapture("Data\\cars_city.mp4")

if not cap.isOpened():
    print("Impossible d'ouvrir la vidéo.")
    exit()

while True:
    ret, frame = cap.read()
    frame = cv2.resize(frame, (640, 360))
    results = model(frame)[0]  
    for box in results.boxes:
        x1, y1, x2, y2 = box.xyxy[0]
        conf = float(box.conf[0])
        cls_id = int(box.cls[0]) 
        class_name = model.model.names[cls_id]

        # Dessiner la bounding box
        cv2.rectangle(
            frame, 
            (int(x1), int(y1)), 
            (int(x2), int(y2)), 
            (0, 255, 0), 2
        )

        # Afficher le label (classe + confiance)
        text = f"{class_name} {conf:.2f}"
        cv2.putText(
            frame, 
            text, 
            (int(x1), int(y1) - 10), 
            cv2.FONT_HERSHEY_SIMPLEX, 
            0.5, 
            (0, 255, 0), 
            2
        )
    cv2.imshow("YOLOv8 - player_1.mov", frame)
    if cv2.waitKey(1) & 0xFF == ord('q'):
        break

cap.release()
cv2.destroyAllWindows()