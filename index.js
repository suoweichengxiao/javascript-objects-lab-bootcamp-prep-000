const recipes = {}

function updateObjectWithKeyAndValue(object, key, value) {object[key] = value; return object};


function destructivelyUpdateObjectWithKeyAndValue(object, key, value) {object[key] = value; return object};

function deleteFromObjectByKey(object, key) {return Object.assign({}, object, delete object[key])};
