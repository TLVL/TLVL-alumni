
const User = require('../../app_server/models/user');

const getAlumniCount = async (req, res) => {
  const count = await User.find().estimatedDocumentCount();
  res.json({
    alumniCount: count
  });
};

module.exports = {
  getAlumniCount,
};
