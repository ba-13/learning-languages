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

thresh = cv2.threshold(gray, 100, 250, cv2.THRESH_BINARY)[1]
cnts = cv2.findContours(thresh.copy(), cv2.RETR_EXTERNAL,
                        cv2.CHAIN_APPROX_SIMPLE)
# Handles compatibility with contours across cv versions
cnts = imutils.grab_contours(cnts)
output = image.copy()

for c in cnts:
    cv2.drawContours(output, [c], -1, (255, 255, 250), 3)

text = "I found {} objects!".format(len(cnts))
cv2.putText(output, text, (10, 25),
            cv2.FONT_HERSHEY_PLAIN, 1.3, (240, 0, 160), 2)
cv2.imshow("Final", output)
cv2.waitKey(0)
