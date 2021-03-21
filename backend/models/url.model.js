const { customAlphabet } = require('nanoid');
const { addYears } = require('date-fns');

const database = require('../db');
const { query, transformIntoObject } = require('../util/index');

const baseUrl = process.env.HEROKU_APP_NAME;

class Url {
    static createHashSlug() {
        const MAX_HASH_LIMIT = 8;
        const USE_CHARS = `0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz`;
        const hash = customAlphabet(USE_CHARS, MAX_HASH_LIMIT)();
        return hash;
    }

    static createTimeWindow() {
        const created_at = new Date();
        const YEARS_ADDED = 1;
        const expire_at = addYears(created_at, YEARS_ADDED);
        return [created_at, expire_at];
    }

    sendLink(long_url) {
        return new Promise((resolve, reject) => {
            const [created_at, expire_at] = Url.createTimeWindow();

            const hash = Url.createHashSlug();

            const addLinkInfoStatement = query.mysql`
                INSERT INTO url
                (hash, long_url, short_url, created_at, expire_at)
                VALUES(?,?,?,?,?)
            `;

            const shortLinkData = [
                hash,
                long_url,
                `${baseUrl}/${hash}`,
                created_at,
                expire_at,
            ];

            database.query(
                addLinkInfoStatement,
                shortLinkData,
                (error, results, fields) => {
                    if (error) {
                        return reject(error);
                    }

                    resolve({
                        hashId: hash,
                        longUrl: long_url,
                        shortUrl: `${baseUrl}/${hash}`,
                        createdAt: created_at,
                        expireAt: expire_at,
                    });
                }
            );
        });
    }

    getLongUrl(hash) {
        return new Promise((resolve, reject) => {
            const getLongUrlStatement = query.mysql`
                SELECT hash, long_url 
                FROM url 
                WHERE hash = "${hash}"
            `;

            database.query(
                getLongUrlStatement,
                [true],
                (error, results, fields) => {
                    if (error) {
                        return reject(error);
                    }
                    resolve(results);
                }
            );
        });
    }
}

const url = new Url();

module.exports = url;
