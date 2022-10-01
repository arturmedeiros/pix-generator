import express from 'express'
import bodyParser from 'body-parser'
import helmet from 'helmet'
import pino from 'pino-http'
import QRCode from 'qrcode'
import BrCode from './lib/br_code.js';

const app = express();

app.use(helmet());
app.use(pino());
app.use(bodyParser.json());
const port = process.env.PORT || 3000;
const QR_CODE_SIZE = 400;

app.use((req, res, next) => {
    next();
});

app.get('/', function(req, res) {
    res.json({'status_code': 200});
});

app.post('/generate', (req, res) => {
    let { key, amount, name, reference, key_type, city } = req.body

    /*console.log(`${key}, ${key_type}`)*/

    if (name && (key && key.length > 3) && (key_type && key_type.length > 3)) {
        let brCode = new BrCode(key, amount, name, reference, key_type, city);

        let code = brCode.generate_qrcp()

        QRCode.toDataURL(code, {
            width: QR_CODE_SIZE,
            height: QR_CODE_SIZE
        })
            .then(qrcode => {
                res.json({
                    qrcode_base64: qrcode,
                    code: code,
                    key_type: brCode.key_type,
                    key: brCode.key,
                    amount: brCode.formatted_amount_origin(),
                    name: brCode.name,
                    city: brCode.city,
                    reference: brCode.reference,
                    formatted_amount: brCode.formatted_amount()})
            })
            .catch(err => {
                console.error(err)
            })
    }
    else if((key && key.length < 3) || (key_type && key_type.length < 3)) {
        res.status(422);
        res.json({ error: "Key or Type Key is incorrect."});
    }
    else {
        res.status(422);
        res.json({ error: "Invalid parameters!"});
    }
});

app.listen(port, () => {
    console.log(`Start Generate Pix server on port ${port}! Press Ctrl+C to stop.\n 🚀 http://localhost:${port}
    `)
});
