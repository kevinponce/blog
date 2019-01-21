{
  "name": "blog-arduino-ping",
  "url": "arduino/ping",
  "title": "Arduino Ping",
  "component": "blogs-post",
  "tags": [
    "blog",
    "arduino",
    "ping"
  ],
  "params": {
    "blog": {
      "description": "A Ping Ultrasonic Range Finder is a basic building block of electronics, and integrating it with Arduino could not be any easier.",
      "hero": "https://s3-us-west-2.amazonaws.com/s.cdpn.io/17779/yosemite-3.jpg",
      "body": "<p>A Ping Ultrasonic Range Finder is a basic building block of electronics, and integrating it with Arduino could not be any easier.</p>\r\n<p>Here are some simple instructions to create a basic range finder with and Ping sensor and an Arduino</p>\r\n\r\n<h2>Connect Ping sensor ground to the Arduino ground.</h2>\r\n<h2>Connect Ping sensor 5V to the Arduino 5v.</h2>\r\n<h2>Connect Ping signal in to the Arduino digital 7.</h2>\r\n<h2>Open up Arduino Studio and paste the following code:</h2>\r\n\r\n<code raw>\r\nconst int pingPin = 7;\r\n\r\nvoid setup() {\r\n  // initialize serial communication:\r\n  Serial.begin(9600);\r\n}\r\n\r\nvoid loop() {\r\n  // establish variables for duration of the ping, and the distance result\r\n  // in inches and centimeters:\r\n  long duration, inches, cm;\r\n\r\n  // The PING))) is triggered by a HIGH pulse of 2 or more microseconds.\r\n  // Give a short LOW pulse beforehand to ensure a clean HIGH pulse:\r\n  pinMode(pingPin, OUTPUT);\r\n  digitalWrite(pingPin, LOW);\r\n  delayMicroseconds(2);\r\n  digitalWrite(pingPin, HIGH);\r\n  delayMicroseconds(5);\r\n  digitalWrite(pingPin, LOW);\r\n\r\n  // The same pin is used to read the signal from the PING))): a HIGH pulse\r\n  // whose duration is the time (in microseconds) from the sending of the ping\r\n  // to the reception of its echo off of an object.\r\n  pinMode(pingPin, INPUT);\r\n  duration = pulseIn(pingPin, HIGH);\r\n\r\n  // convert the time into a distance\r\n  inches = microsecondsToInches(duration);\r\n  cm = microsecondsToCentimeters(duration);\r\n\r\n  Serial.print(inches);\r\n  Serial.print(\"in, \");\r\n  Serial.print(cm);\r\n  Serial.print(\"cm\");\r\n  Serial.println();\r\n\r\n  delay(100);\r\n}\r\n\r\nlong microsecondsToInches(long microseconds) {\r\n  // According to Parallax's datasheet for the PING))), there are 73.746\r\n  // microseconds per inch (i.e. sound travels at 1130 feet per second).\r\n  // This gives the distance travelled by the ping, outbound and return,\r\n  // so we divide by 2 to get the distance of the obstacle.\r\n  // See: http://www.parallax.com/dl/docs/prod/acc/28015-PING-v1.3.pdf\r\n  return microseconds / 74 / 2;\r\n}\r\n\r\nlong microsecondsToCentimeters(long microseconds) {\r\n  // The speed of sound is 340 m/s or 29 microseconds per centimeter.\r\n  // The ping travels out and back, so to find the distance of the object we\r\n  // take half of the distance travelled.\r\n  return microseconds / 29 / 2;\r\n}\r\n</code>\r\n\r\n<h2>Go to Tools -> Port and select the desired port.</h2>\r\n<h2>Now run the code!</h2>\r\n<h2>To see the serial data go to Tools > Serial Monitor</h2>\r\n\r\n<p>Voila</p>",
      "date": "1-20"
    }
  },
  "date": "2019-01-20"
}