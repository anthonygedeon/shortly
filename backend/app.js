const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors')
require('dotenv').config();

const { createError } = require('./util/index');
const url = require('./models/url.model');

const shorten = require('./routes/shorten');

const app = express();

app.use(bodyParser.json());
app.use(cors());

app.set('port', process.env.PORT || 5000);

app.get('/:hash', async (req, res, next) => {
    const { hash } = req.params;
    const shortLinkSlug = hash.toString();

    try {
        const results = await url.getLongUrl(shortLinkSlug);

        results.forEach((recordSet) => {
            if (recordSet.hash === shortLinkSlug) {
                return res.redirect(301, recordSet.long_url);
            }
        });
    } catch (error) {
        next(createError(500, error));
    }
});

app.use('/api/v1', shorten);

app.use((error, req, res, next) => {
    res.status(error.status).send({ error: error.message });
    next();
});

app.listen(app.get('port'), () => {
    console.log(`Listening on port: ${app.get('port')}`);
});
