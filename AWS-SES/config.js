require("dotenv").config();

module.exports = {
  'aws': {
    'key': process.env.AWS_ACCESS_KEY,
    'secret': process.env.AWS_SECRET_ACCESS_KEY,
    'ses': {
      'from': {
        // replace with actual email address
        'default': 'desestoca@tsunoda.dev',
      },
      'region': process.env.AWS_DEFAULT_REGION
    }
  }
};