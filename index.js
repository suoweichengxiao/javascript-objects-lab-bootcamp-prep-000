const recipes = {}

function updateObjectWithKeyAndValue(object, key, value) {object[key] = value; return object};

function updateObjectWithKeyAndValue(object, key, value) {var newObj = Object.assign({}, object); newObj[key] = value; return newObj};

function destructivelyUpdateObjectWithKeyAndValue(object, key, value) {object[key] = value; return object};

function deleteFromObjectByKey(object, key) {return Object.assign({}, object, delete object[key])};

function deleteFromObjectByKey(object, key) {var newObj = Object.assign({}, object, delete object[key]); return newObj}