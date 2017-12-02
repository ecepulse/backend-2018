var Schema = mongoose.Schema;
var ObjectId = Schema.ObjectId;

var UserSchema = new Schema({
    id: {ObjectId, required: true},
    email: { type: String, required: true, index: { unique: true } },
    first_name: {String, required: true},
    last_name: {String, required: true},
    password:  {String, required: true},
    refresh_token_google: {String, required: true},
    refresh_token_fb: {String, required: true}
});

var User = mongoose.model('User', UserSchema);
module.exports = User;
