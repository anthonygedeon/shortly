/**
 *
 * @param {String} string
 * @param  {...any} values
 * @returns { String }
 */
function mysql(string, ...values) {
    const REMOVE_SPACE_REGEX = /[\n\t\r]/gm;

    return String.raw({ raw: string }, values)
        .replace(REMOVE_SPACE_REGEX, '')
        .trim();
}

/**
 *
 * @param {Number} status
 * @param {String} message
 * @returns {Object}
 */
const createError = (status, message) => ({ status, message });

const query = { mysql };

function transformIntoObject(array, args) {
    
    const result = {};

    for (let item of array) {
        result[item] = item;
    }

    return result;

}

module.exports = {
    query,
    createError,
    transformIntoObject
};
