# ❖ PIX GENERATOR - API

[![NodeJS](https://img.shields.io/badge/Node.JS-000?style=for-the-badge&logo=Node.js)](https://nodejs.org/en/)
[![ExpressJS](https://img.shields.io/badge/Express.JS-000?style=for-the-badge&logo=Express)](https://expressjs.com/pt-br/)

## About
Generate QR codes for payments via PIX with this project made with Node.JS and Express.JS.

## 🌍 Free and Live - REST API

### Method: $POST

### Endpoint:

```
https://pix-generator.onrender.com/generate
```

### Request:

```bash
{
    "key_type": "Telefone",
    "key": "(11) 98888-8888",
    "name": "John Doe da Silva",
    "city": "São Paulo",
    "amount": "R$ 10,00",
    "reference": "TESTPAG"
}
```

### Response:

```bash
{
	"qrcode_base64": "data:image/png;base64,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",
	"code": "00020126360014BR.GOV.BCB.PIX0114+5511988888888520400005303986540510.005802BR5917John Doe da Silva6009Sao Paulo62110507TESTPAG630462EB",
	"key_type": "Telefone",
	"key": "(11) 98888-8888",
	"amount": "R$ 10,00",
	"name": "John Doe da Silva",
	"city": "São Paulo",
	"reference": "TESTPAG",
	"formatted_amount": "10.00"
}
```

## ✅ Requirements to Development
To use the project, you need to have some packages and starter packages on your computer.
See the standard requirements by Node.JS.

- GIT
- Node.JS
- NPM / YARN

## ⬇️ Installation

To run the project locally, clone the GitHub project to your computer:

```bash
git clone https://github.com/arturmedeiros/pix-generator.git
```


## 🚀 Get started

### 1) Project dependencies installation

Using NPM:

```shell
npm i
```

Using YARN:

```shell
yarn install
```

### 2) Run project

Using NPM:

```shell
npm run dev
```

Using YARN:

```shell
yarn dev
```

## 🧑🏻‍💻 Author

- [@arturmedeiros](https://www.github.com/arturmedeiros)

## 📖 References

- [BRCODE](https://github.com/fbbergamo/gerador-pix)


## ⚖️ License
MIT License

Copyright (c) 2022 @ARTURMEDEIROS - ARJOS.COM.BR

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.