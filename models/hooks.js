const handleSaveError = (error, data, next) => {
  const { name, code } = error;
  error.status = name === "MongoServerError" && code === 11000 ? 409 : 400;
  next();
};

const preUpdate = function (next) {
  this.options.new = true;
  this.options.runValidators = true;
  next();
};

const emailRegexp = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;

module.exports = {
  handleSaveError,
  preUpdate,
  emailRegexp,
};
