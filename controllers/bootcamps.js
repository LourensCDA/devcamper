const { sequelize, Bootcamp } = require('../models');

//  @desc Get all bootcamps
//  @route  GET /api/v1/bootcamps
//  @access public
exports.getBootcamps = async (req, res, next) => {
  try {
    const bootcamps = await Bootcamp.findAll();
    res.status(200).json({
      success: true,
      message: 'Returned all bootcamps',
      content: { count: bootcamps.length, bootcamps: bootcamps },
    });
  } catch (err) {
    res.status(400).json({
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

    res.status(200).json({
      success: true,
      message: 'Returned bootcamp',
      content: bootcamp,
    });
  } catch (err) {
    next(err);
  }
};

//  @desc Create new bootcamp
//  @route  POST /api/v1/bootcamps
//  @access private
exports.createBootcamp = async (req, res, next) => {
  try {
    const bootcamp = await Bootcamp.create(req.body);
    res.status(201).json({
      success: true,
      message: 'New bootcamp created',
      content: bootcamp,
    });
  } catch (err) {
    // console.log(err);
    res.status(400).json({
      status: false,
      message: 'New bootcamp not created',
      errors: err,
    });
  }
};

//  @desc Update bootcamp
//  @route  put /api/v1/bootcamps/:id
//  @access private
exports.updateBootcamp = async (req, res, next) => {
  try {
    const id = req.params.id;
    const bootcamp = await Bootcamp.update(req.body, {
      where: { id },
      returning: true,
    });

    if (!bootcamp) {
      return res
        .status(400)
        .json({ status: false, message: 'Bootcamp does not exist' });
    }

    res.status(200).json({
      success: true,
      message: 'Returned bootcamp',
      content: bootcamp[1],
    });
  } catch (err) {
    res.status(400).json({
      status: false,
      message: 'Error retrieving bootcamp',
      errors: err,
    });
  }
};

//  @desc Delete bootcamp
//  @route  DELETE /api/v1/bootcamps/:id
//  @access private
exports.deleteBootcamp = async (req, res, next) => {
  try {
    const id = req.params.id;
    const bootcamp = await Bootcamp.destroy({
      where: { id },
    });

    if (bootcamp == 0) {
      return res
        .status(400)
        .json({ status: false, message: 'Bootcamp does not exist' });
    }

    res.status(200).json({
      success: true,
      message: 'Bootcamp deleted',
    });
  } catch (err) {
    res.status(400).json({
      status: false,
      message: 'Error deleteing bootcamp',
      errors: err,
    });
  }
};
