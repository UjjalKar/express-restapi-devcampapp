/**
 * @desc       Log to console
 */

const logger = (req, res, next) => {
  // req.hello = "Hello";
  console.log(
    `${req.method} ${req.protocol}://${req.get("host")}${req.originalUrl}`
  );
  next();
};

module.exports = {
  logger
};
