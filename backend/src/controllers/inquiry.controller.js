exports.submitInquiry = async (req, res) => {
  try {
    const { fullName, email, phone, course } = req.body;


    if (!fullName || !email || !phone || !course) {
      return res.status(400).json({
        success: false,
        message: 'Please provide all required fields'
      });
    }

    return res.status(201).json({
      success: true,
      message: 'Inquiry submitted successfully! We will contact you soon.',
      data: {
        id: Math.floor(Math.random() * 1000000),
        fullName,
        submittedAt: new Date()
      }
    });
  } catch (error) {
    console.error('Error in submitInquiry:', error);
    return res.status(500).json({
      success: false,
      message: 'Internal server error while processing inquiry',
      error: error.message
    });
  }
};
