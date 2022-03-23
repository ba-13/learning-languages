import imutils
import cv2

image = cv2.imread("./len_full.jpg")
(h, w, d) = image.shape
print(f"width = {w}, height = {h}, depth = {d}")

resized = cv2.resize(image, (200, 400))
cv2.imshow("Resized", resized)
cv2.waitKey(0)

r = 800.0/w
dim = (800, int(h*r))
resized = cv2.resize(image, dim)
cv2.imshow("Aspect Ratio considered", resized)
cv2.waitKey(0)

# no need to manually calculate aspect ratio
resized = imutils.resize(image, width=600)
cv2.imshow("Imutils used", resized)
cv2.waitKey(0)
