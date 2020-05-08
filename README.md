<h3 align="center">imagesharp</h3>

<div>

[![Status](https://img.shields.io/badge/status-active-success.svg)]()
[![GitHub Issues](https://img.shields.io/github/issues/kylelobo/The-Documentation-Compendium.svg)](https://github.com/domus71/imagesharp/issues)
[![GitHub Pull Requests](https://img.shields.io/github/issues-pr/kylelobo/The-Documentation-Compendium.svg)](https://github.com/domus71/imagesharp/pulls)
[![License](https://img.shields.io/badge/license-MIT-blue.svg)](/LICENSE)

</div>

---

<p align="center"> A simple web interface to generate image.
    <br> 
</p>

## 📝 Table of Contents

- [About](#about)
- [Getting Started](#getting_started)
- [Usage](#usage)
- [Deployment](#deployment)
- [Built Using](#built_using)
- [Authors](#authors)
- [Acknowledgments](#acknowledgement)

## 🧐 About <a name = "about"></a>

A simple web interface to generate image using [Sharp](https://www.npmjs.com/package/sharp) for Node.js.

## 🏁 Getting Started <a name = "getting_started"></a>

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See [deployment](#deployment) for notes on how to deploy the project on a live system.

### Installing

First clone the project to your development enviroment.

```
git clone https://github.com/domus71/imagesharp
```

You have to install [Sharp](https://www.npmjs.com/package/sharp) ang [Express](https://www.npmjs.com/package/express) framework usign npm.

```
npm install
```
## 🎈 Usage <a name="usage"></a>

The default port is 3001. You can change port from config.json

```
node index.js
```

On your browser:

```
http://localhost:3001/generate?source=<fullpath of source image file>&dest=<fullpath of generated image file>&width=<pixels>&height=<pixels>&quality=<from 1 to 100>&lossless=<0/1/true/on>&progressive=<0/1/true/on>
```

The source and the destanation image paths must be url encoded. If width and height are 0, then image keeps the original size. The properties quality, lossless and progressive are optional. Default quality is 80%. Also, I have disabled the Sharp cache to get new file everytime. You can comment the line 9 to speed up things and change [Sharp caching options](https://sharp.pixelplumbing.com/api-utility#cache). The generated image is centered and cropped/clipped in given dimensions to fit.

## 🚀 Deployment <a name = "deployment"></a>

You can change the port and/or convert it to Windows service using [NSSM](https://nssm.cc/). I use it as an internal service to convert big PNG files to WebP format.

## ⛏️ Built Using <a name = "built_using"></a>

- [Express](https://expressjs.com/) - Server Framework
- [Sharp](https://www.npmjs.com/package/sharp) - High performance Node.js image processing
- [NodeJs](https://nodejs.org/en/) - Server Environment

## ✍️ Authors <a name = "authors"></a>

- [@domus71](https://github.com/domus71)

## 🎉 Acknowledgements <a name = "acknowledgement"></a>

- Hate old Windows DLLs
