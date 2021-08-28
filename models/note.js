const mongoose = require('mongoose'),
Schema = mongoose.Schema,
noteSchema = new Schema({
    title: {type: String, required: true},
    content: {type: String, required: true},
    description: {type: String, required: true},
    category: {
        type: String,
        required: true,
        enum: ['GENERAL', 'IDPROOF', 'PROFESSIONAL']
    },
createdBy: {type: Schema.Types.ObjectId, ref: 'user'},
createdOn: {type: Date, default: Date.now}
});
module.exports = mongoose.model('note', noteSchema);