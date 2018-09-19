/* An assigned excercise is a partial piece of a prescription. Clients may give
 * feedback per excercise to help providers during the recovery process. */
// ORM
const mongoose = require('mongoose');

const assignedExcerciseSchema = new mongoose.Schema({
  client: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  exercise: { type: mongoose.Schema.Types.ObjectId, ref: 'Exercise' },
  date: { type: Date, default: Date.now }
});

module.exports = mongoose.model('AssignedExcercise', assignedExcerciseSchema);
