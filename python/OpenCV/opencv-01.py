import imutils
import cv2

image = cv2.imread("./len_full.jpg")
(h, w, d) = image.shape
print(f"width = {w}, height = {h}, depth = {d}")

# pixel is a 3-tuple of form (B, G, R)
(B, G, R) = image[0, 0]
print(f"R={R}, G={G}, B={B}")

cv2.imshow("Lenna", image)
cv2.waitKey(0)

# @l startY:endY, startX:endX
# roi = image[350: 500, 50: 350]
roi = image[0: 200, 90: 300]
cv2.imshow("ROI", roi)
cv2.waitKey(0)
