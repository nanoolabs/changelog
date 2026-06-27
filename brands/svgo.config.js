module.exports = {
  multipass: true,
  plugins: [
    {
      name: "preset-default",
      params: {
        overrides: {
          removeComments: false,
        },
      },
    },
    {
      name: "cleanupIds",
      active: false,
    },
    // other plugin
    "removeEditorsNSData",
  ],
}
