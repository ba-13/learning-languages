import cv2
import imutils

# Drawing operations happen in-place
image = cv2.imread("./len_full.jpg")

output = image.copy()
(h, w, d) = output.shape
print(f"width = {w}, height = {h}, depth = {d}")

# src, (top-left-pt), (bottom-left-pt), (B G R), stroke
cv2.rectangle(output, (90, 10), (300, 200), (0, 0, 255), 1)
cv2.rectangle(output, (100, 350), (300, 500), (255, 0, 0), 1)
cv2.rectangle(output, (150, 60), (250, 160), (0, 255, 0), 1)

cv2.circle(output, (260, 230), 30, (200, 200, 80), 2)

cv2.line(output, (90, 10), (90, 400), (200, 200, 200), 1)

# src, text, (start-pt), font, scale, color, thickness
cv2.putText(output, "Sexiest Standard Lady!", (20, h - 40),
            cv2.FONT_HERSHEY_SIMPLEX, 0.7, (200, 255, 200), 2)

cv2.imshow("rectangle", output)
cv2.waitKey(0)
