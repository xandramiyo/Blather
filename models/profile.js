const mongoose = require('mongoose')
const Schema = mongoose.Schema

const profileSchema = {
	userId: {
		type: Schema.Types.ObjectId,
		ref: 'user',
		required: true
	},
	displayName: String,
	avatar: String,
	bio: String,
	following: Schema.Types.ObjectId,
	followers: Schema.Types.ObjectId
}

module.exports = mongoose.model('Profile', profileSchema)