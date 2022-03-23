import cv2
import imutils

image = cv2.imread("./len_full.jpg")
(h, w, d) = image.shape
print(f"width = {w}, height = {h}, depth = {d}")

blurred1 = cv2.GaussianBlur(image, (11, 11), 0)
cv2.imshow("Blurred Beauty", blurred1)
cv2.waitKey(0)

blurred2 = cv2.GaussianBlur(image, (5, 5), 0)
cv2.imshow("Blurred Beauty", blurred2)
cv2.waitKey(0)

print(blurred2[0][0])
blurred = cv2.GaussianBlur(image, (29, 29), 0)
cv2.imshow("Blurred Beauty", blurred)
cv2.waitKey(0)
