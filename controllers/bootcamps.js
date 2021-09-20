const { sequelize, Bootcamp } = require('../models');

//  @desc Get all bootcamps
//  @route  GET /api/v1/bootcamps
//  @access public
exports.getBootcamps = (req, res, next) => {
  res.status(200).json({ success: true, message: 'Show all bootcamps' });
};

//  @desc Get specific bootcamps
//  @route  GET /api/v1/bootcamps/:id
//  @access public
exports.getBootcamp = (req, res, next) => {
  res
    .status(200)
    .json({ success: true, message: `Get bootcamp ${req.params.id}` });
};

//  @desc Create new bootcamp
//  @route  POST /api/v1/bootcamps
//  @access private
exports.createBootcamp = async (req, res, next) => {
  try {
    const bootcamp = await Bootcamp.create(req.body);
    return res.status(201).json({
      success: true,
      message: 'New bootcamp created',
      content: bootcamp,
    });
  } catch (err) {
    // console.log(err);
    return res.status(400).json({
      status: false,
      message: 'New bootcamp not created',
      errors: err,
    });
  }
};

//  @desc Update bootcamp
//  @route  put /api/v1/bootcamps/:id
//  @access private
exports.updateBootcamp = (req, res, next) => {
  res
    .status(200)
    .json({ success: true, message: `Update bootcamp ${req.params.id}` });
};

//  @desc Delete bootcamp
//  @route  DELETE /api/v1/bootcamps/:id
//  @access private
exports.deleteBootcamp = (req, res, next) => {
  res
    .status(200)
    .json({ success: true, message: `Delete bootcamp ${req.params.id}` });
};
