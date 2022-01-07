module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '7c98428f1987345d0c14d88a0c8cf25d'),
  },
});
