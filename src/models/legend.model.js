const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let LegendSchema = new Schema({
    name: {type: String, required: true},
    style: {type: String, required: true},
    passive: {type: String, required: true},
    passiveDescription: {type: String, required: true},
    tactical: {type: String, required: true},
    tacticalDescription: {type: String, required: true},
    ultimate: {type: String, required: true},
    ultimateDescription: {type: String, required: true},
    passive: {type: String, required: true}
});


// Export the model
module.exports = mongoose.model('Product', LegendSchema);