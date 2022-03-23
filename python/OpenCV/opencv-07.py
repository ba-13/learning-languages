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

# setting all pixels less than 225 as 0 (background)
# maxval if src(x,y) > thresh, else 0.
thresh = cv2.threshold(gray, 190, 200, cv2.THRESH_BINARY)[1]
cv2.imshow("Thresholding", thresh)
cv2.waitKey(0)
