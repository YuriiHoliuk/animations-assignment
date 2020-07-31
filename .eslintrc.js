module.exports = {
  extends: '@mate-academy/eslint-config',
  parserOptions: {
    sourceType: 'module',
  },
  rules: {
    strict: 0,
  },
  env: {
    jest: true,
  },
  plugins: ['jest'],
  globals: {
    gsap: true,
    ScrollMagic: true,
    MotionPathPlugin: true,
  },
};
