{
  "name": "blogs-osx-matplotlib",
  "url": "/blogs/osx-matplotlib",
  "title": "OSX install matplotlib without anaconda",
  "date": "2019-01-12",
  "tags": ["blog"],
  "component": "blogs-post",
  "params": {
    "blog": {
      "description": "Installing matplotlib without anaconda is not so easy, so here is how I got it to work on my mac.",
      "hero": "https://s3-us-west-2.amazonaws.com/s.cdpn.io/17779/yosemite-3.jpg",
      "thumbnail" : {
        "img": "http://deghq.com/yapp/front-labs/codepen-assets/bmw-M4.jpg",
        "alt": "hero bmw"
      },
      "body": "<p>If you ever tried to install matplotlib without using anaconda, then you probably pulled out some hair. After destroying my python environment several times, I finally figured it out. This solution only works for Mac, so sorry Linux and Windows users.</p>\n<p>I recommend using pipenv to manage python version, because downloading python from brew was a pain in the ass when you need more than one version of python. I needed to use python 3.6, because at the time tensorflow did not support python 3.7.</p>\n<h4>First update brew and install  pyenv pipenv</h4>\n<code>$ brew update\n$ brew install pyenv pipenv</code>\n<h4>Create project directory</h4>\n<code>$ mkdir ~/project\n$ cd ~/project\n$ pyenv init</code>\n<h4>Install desired python version.</h4>\n<code>$ PYTHON_CONFIGURE_OPTS=\"--enable-framework\" CFLAGS=\"-I$(brew --prefix openssl)/include\" LDFLAGS=\"-L$(brew --prefix openssl)/lib\" pyenv install 3.6.5</code>\n<h4>Access installed version of python</h4>\n<code>$ pyenv local 3.6.5\n$ pipenv shell\n$ python --version</code>\n<h4>Install dependencies</h4>\n<code>$ pip3 install numpy\n$ pip3 install matplotlib</code>\n<h4>Create file example.py and add the following in it:</h4>\n<code>import numpy as np\nimport matplotlib.pyplot as plt\n\nx_data = np.linspace(0, 10, 10) + np.random.uniform(-1.5, 1.5, 10)\ny_data = np.linspace(0, 10, 10) + np.random.uniform(-1.5, 1.5, 10)\nplt.plot(x_data, y_data)\nplt.show()</code>\n<h4>Run script</h4>\n<code>$ python3 example.py</code>\n<p>Voila.</p>",
      "date": "1/12",
      "tags": ["python", "matplotlib"]
    },
    "menu-theme": "dark"
  }
}
