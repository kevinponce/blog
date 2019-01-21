{
  "name": "blogs-python-image-crop",
  "url": "/blogs/python/image-crop",
  "title": "How crop an image in python",
  "date": "2019-01-17",
  "tags": ["blog"],
  "component": "blogs-post",
  "params": {
    "blog": {
      "description": "Croping a photo could not be any easier in python",
      "hero": "https://s3-us-west-2.amazonaws.com/s.cdpn.io/17779/yosemite-3.jpg",
      "thumbnail" : {
        "img": "http://deghq.com/yapp/front-labs/codepen-assets/bmw-M4.jpg",
        "alt": "hero bmw"
      },
      "body": "<p>Here is a snipet of code how to parse an image in pythond</p>\n<code>\nimport cv2\nimport os\ndir_path = os.path.dirname(os.path.realpath(__file__))\nexample = os.path.join(dir_path, \"example.jpeg\")\n\nimg = cv2.imread(example)\n\ncrop_img = img[77:100,45:100]\ncv2.imshow(\"cropped\", crop_img)\n\ncv2.waitKey(0)\ncv2.destroyAllWindows()\n\n#img[y:y+h, x:x+w]\nfront_top_center_img = img[67:87,45:63]\nexample_croped = os.path.join(example, \"example_croped.jpeg\")\ncv2.imwrite(example_croped, example)\n</code>",
      "date": "1/17",
      "tags": ["python", "ai", "image"]
    },
    "menu-theme": "dark"
  }
}
