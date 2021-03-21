const express = require('express');
const bodyParser = require('body-parser');
const router = express.Router();

const validate = require('../util/isUrlValid');
const validUrl = require('../middleware/validUrl');
const url = require('../models/url.model');
const { createError } = require('../util/index');

router.use(bodyParser.json());

router.post('/shorten', async (req, res, next) => {
    const { long_url } = req.query;

    try {
        if (!validate.isUrlValid(long_url)) {
            return next(createError(500, 'Invalid url'));
        }

        const results = await url.sendLink(long_url);

        res.status(200).json({
            data: results
        });
    } catch (error) {
        next(createError(500, error));
    }
});

module.exports = router;
