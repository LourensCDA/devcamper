const { sequelize, Bootcamp } = require('../models');

//  @desc Get all bootcamps
//  @route  GET /api/v1/bootcamps
//  @access public
exports.getBootcamps = async (req, res, next) => {
  try {
    const bootcamps = await Bootcamp.findAll();
    return res.status(200).json({
      success: true,
      message: 'Returned all bootcamps',
      content: bootcamps,
    });
  } catch (err) {
    return res.status(400).json({
      status: false,
      message: 'Error retrieving bootcamps',
      errors: err,
    });
  }
};

//  @desc Get specific bootcamps
//  @route  GET /api/v1/bootcamps/:id
//  @access public
exports.getBootcamp = async (req, res, next) => {
  const id = req.params.id;
  try {
    const bootcamp = await Bootcamp.findOne({
      where: { id },
    });

    if (!bootcamp) {
      return res
        .status(400)
        .json({ status: false, message: 'Bootcamp does not exist' });
    }

    return res.status(200).json({
      success: true,
      message: 'Returned bootcamp',
      content: bootcamp,
    });
  } catch (err) {
    return res.status(400).json({
      status: false,
      message: 'Error retrieving bootcamp',
      errors: err,
    });
  }
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
