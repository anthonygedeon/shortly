const express = require('express');
const router = express.Router();

const validate = require('../util/isUrlValid');
const { createError } = require('../util/index');

router.use((req, res, next) => {});

module.exports = router;
