const lodash = require('lodash');
const uuidv4 = require('uuid/v4');


const parseRequestBody = (body, id=null) => {    
    let item = {
    };

    if (lodash.isNull(id)) {
        item['itemId'] = uuidv4();
        item['whenCreated'] = Date.now();
    } else {
        item['itemId'] = id;
    }
    item['_id'] = item.itemId;
    item['type'] = body.type || '';
    item['name'] = body.name || '';
    item['description'] = body.description || '';
    item['userID'] = body.userID || '';
    item['location'] = body.location || '';
    item['contactEmail'] = body.contactEmail || '';
    item['contactName'] = body.contactName || '';
    item['available'] = lodash.isNull(body.available) ? true : body.available;

    if (item.type==="Sleeping Quarters") {
        item['start'] = body.start || '';
        item['end'] = body.end || '';
        item['numberOfPeople'] = body.numberOfPeople || '';
    } else {
        item['quantity'] = body.quantity || '';
    }

    return item;

};

module.exports = {
    parseRequestBody: parseRequestBody
};