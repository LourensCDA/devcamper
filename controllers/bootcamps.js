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
exports.createBootcamp = (req, res, next) => {
  res.status(200).json({ success: true, message: 'Create new bootcamp' });
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
