import argparse
import cv2
import imutils

ap = argparse.ArgumentParser()
ap.add_argument("-i", "--image", required=True, help="Path to input image")
args = vars(ap.parse_args())

image = cv2.imread(args["image"])
cv2.imshow("Original", image)
cv2.waitKey(0)

gray = cv2.cvtColor(image, cv2.COLOR_BGR2GRAY)
cv2.imshow("gray", gray)
cv2.waitKey(0)

thresh = cv2.threshold(gray, 100, 255, cv2.THRESH_BINARY)[1]

cv2.imshow("Thresh", thresh)
cv2.waitKey(0)

"""
Remove noise
Isolation of individual elements and joining disparate elements in image
Finding intensity bumps or holes
"""

"""
Kernel scans over the image, anchor usually being center of kernel
Dilation:
- max pixel value replaces the anchor value 
Erosion:
- local min over the kernel area is computed, which replaces the image pixel under the anchor point.
"""

# Removes grain-iness
# Particularly useful for removing small blobs in images, as sufficient iterations will completelly remove them
mask = thresh.copy()
mask = cv2.erode(mask, None, iterations=10)
cv2.imshow("Eroded", mask)
cv2.waitKey(0)

#
mask = thresh.copy()
mask = cv2.dilate(mask, None, iterations=10)
cv2.imshow("Dilated", mask)
cv2.waitKey(0)
