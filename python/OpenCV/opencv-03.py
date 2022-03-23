import cv2
import imutils

image = cv2.imread("./len_full.jpg")
(h, w, d) = image.shape
print(f"width = {w}, height = {h}, depth = {d}")

center = (w//2, h//2)
M = cv2.getRotationMatrix2D(center, -45, 1.0)
rotated = cv2.warpAffine(image, M, (w, h))
cv2.imshow("OpenCV Rotation", rotated)
cv2.waitKey(0)

rotated = imutils.rotate(image, 45)
print(rotated.shape)
cv2.imshow("Imutils Rotation", rotated)
cv2.waitKey(0)

# No clipping happens
rotated = imutils.rotate_bound(image, -30)
cv2.imshow("Imutils Bound Rotation", rotated)
cv2.waitKey(0)
