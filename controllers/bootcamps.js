const Bootcamp = require("../models/Bootcamp");

/**
 * @des Get all bootcamps
 * @route GET /api/v1/bootcamps
 * @access Public
 */
exports.getBootcamps = (req, res, next) => {
  res.status(200).json({ success: true, msg: "Show all" });
};

/**
 * @des Get single bootcamps
 * @route GET /api/v1/bootcamps/:id
 * @access Public
 */
exports.getBootcamp = (req, res, next) => {
  res.status(200).json({ success: true, msg: "Show single" + req.params.id });
};
/**
 * @des     Create bootcamp
 * @route   POST /api/v1/bootcamps/
 * @access  Private
 */
exports.createBootcamp = async (req, res, next) => {
  try {
    const bootcamp = await Bootcamp.create(req.body);
    res.status(201).json({
      success: true,
      data: bootcamp
    });
  } catch (error) {
    res.status(400).json({
      success: false
    });
  }
};
/**
 * @des     update bootcamp
 * @route   GET /api/v1/bootcamps/:id
 * @access  Private
 */
exports.updateBootcamp = (req, res, next) => {
  res.status(201).json({ success: true, msg: "post updated" + req.params.id });
};
/**
 * @des     delete bootcamp
 * @route   DELETE /api/v1/bootcamps/:id
 * @access  Private
 */
exports.deleteBootcamp = (req, res, next) => {
  res.status(201).json({ success: true, msg: "post deleted" + req.params.id });
};
