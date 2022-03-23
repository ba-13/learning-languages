import argparse
import cv2
import imutils
import numpy as np

ap = argparse.ArgumentParser()
ap.add_argument("-i", "--image", required=True, help="Path to input image")
args = vars(ap.parse_args())

image = cv2.imread(args["image"])
(h, w, d) = image.shape
print(f"width = {w}, height = {h}, depth = {d}")
cv2.imshow("Original", image)
cv2.waitKey(0)
empty = np.ndarray((855, 400, 3))
print(image.shape, empty.shape)

gray = cv2.cvtColor(image, cv2.COLOR_BGR2GRAY)
cv2.imshow("gray", gray)
cv2.waitKey(0)

thresh = cv2.threshold(gray, 100, 255, cv2.THRESH_BINARY)[1]
cv2.imshow("Threshold", thresh)
cv2.waitKey(0)

"""
Masking: Hide regions
Here, we are finding the threshold, and below 100, value is kept 0. This is masked on the original image.
"""
mask = thresh.copy()
output = cv2.bitwise_and(image, image, mask=mask)
cv2.imshow("Output", output)
cv2.waitKey(0)
