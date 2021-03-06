const ErrorResponse = require('../utils/errorResponse');
const { sequelize, Bootcamp } = require('../models');
const asyncHandler = require('../middleware/async');
const geocoder = require('../utils/geocoder');
const slugify = require('slugify');

//  @desc Get all bootcamps
//  @route  GET /api/v1/bootcamps
//  @access public
exports.getBootcamps = asyncHandler(async (req, res, next) => {
  const bootcamps = await Bootcamp.findAll();
  res.status(200).json({
    success: true,
    message: 'Returned all bootcamps',
    content: { count: bootcamps.length, bootcamps: bootcamps },
  });
});

//  @desc Get specific bootcamps
//  @route  GET /api/v1/bootcamps/:id
//  @access public
exports.getBootcamp = asyncHandler(async (req, res, next) => {
  const id = req.params.id;

  const bootcamp = await Bootcamp.findOne({
    where: { id },
  });

  if (!bootcamp) {
    return next(
      new ErrorResponse(`Bootcamp not found with id of ${req.params.id}`),
      404
    );
  }

  res.status(200).json({
    success: true,
    message: 'Returned bootcamp',
    content: bootcamp,
  });
});

//  @desc Create new bootcamp
//  @route  POST /api/v1/bootcamps
//  @access private
exports.createBootcamp = asyncHandler(async (req, res, next) => {
  const bootcamp = await Bootcamp.create(req.body);
  res.status(201).json({
    success: true,
    message: 'New bootcamp created',
    content: bootcamp,
  });
});

//  @desc Update bootcamp
//  @route  put /api/v1/bootcamps/:id
//  @access private
exports.updateBootcamp = asyncHandler(async (req, res, next) => {
  const id = req.params.id;
  const bootcamp = await Bootcamp.update(req.body, {
    where: { id },
    returning: true,
    individualHooks: true,
  });

  if (!bootcamp) {
    return next(
      new ErrorResponse(`Bootcamp not found with id of ${req.params.id}`),
      404
    );
  }

  res.status(200).json({
    success: true,
    message: 'Returned bootcamp',
    content: bootcamp[1],
  });
});

//  @desc Delete bootcamp
//  @route  DELETE /api/v1/bootcamps/:id
//  @access private
exports.deleteBootcamp = asyncHandler(async (req, res, next) => {
  const id = req.params.id;
  const bootcamp = await Bootcamp.destroy({
    where: { id },
    individualHooks: true,
  });

  if (bootcamp == 0) {
    return next(
      new ErrorResponse(`Bootcamp not found with id of ${req.params.id}`),
      404
    );
  }

  res.status(200).json({
    success: true,
    message: 'Bootcamp deleted',
  });
});

//  @desc Get bootcamps within a radius
//  @route  GET /api/v1/bootcamps/radius/:zipcode/:distance
//  @access private
exports.getBootcampsInRadius = asyncHandler(async (req, res, next) => {
  const { zipcode, distance } = req.params;
  // Get lat/log from geocoder
  const loc = await geocoder.geocode(zipcode);
  const lat = loc[0].latitude;
  const lng = loc[0].longitude;

  // Calc radius using radians
  // Divide dist by radius of Earth
  // Earth Radius = 3,963 mi or 6,378 km
  const radius = distance / 6378;

  // const bootcamps = await Bootcamp.findAll({where:})
});
