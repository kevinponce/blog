{
  "name": "blogs-python-webcam",
  "url": "/blogs/python/webcam",
  "title": "How capture webcam in python",
  "component": "blogs-post",
  "date": "2019-01-16",
  "tags": ["blog"],
  "params": {
    "blog": {
      "description": "Getting access to your webcam is could not be any easier in python",
      "hero": "https://s3-us-west-2.amazonaws.com/s.cdpn.io/17779/yosemite-3.jpg",
      "thumbnail" : {
        "img": "http://deghq.com/yapp/front-labs/codepen-assets/bmw-M4.jpg",
        "alt": "hero bmw"
      },
      "body": "<p>Here is a simple tutorial on how to capture your webcam in python.</p>\n<p>First you need install cv2.</p>\n<code>$ pip3 install cv2</code>\n\n<p>Now create the following file:</p>\n<code>import cv2\nimport numpy as np\n\ncap = cv2.VideoCapture(0)\n\nfourcc = cv2.VideoWriter_fourcc('M','J','P','G')\nout = cv2.VideoWriter()\nsucces = out.open('output.avi',fourcc, 15.0, (1280,720),True)\n\nwhile True:\nret, frame = cap.read()\ncv2.imshow('frame', frame)\nout.write(frame)\n\nif cv2.waitKey(1) & 0xff == ord('q'):\nbreak\n\ncap.release();\nout.release();\n\ncv2.destroyAllWindows()\n</code>\n<p>Voila.</p>",
      "date": "1/16",
      "tags": ["python", "ai", "webcam"]
    },
    "menu-theme": "dark"
  }
}
