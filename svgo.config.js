module.exports = {
  multipass: true,
  plugins: [
    {
      name: "preset-default",
      params: {
        overrides: {
          removeComments: false,
          cleanupIds: false,
        },
      },
    },
    "removeEditorsNSData",
  ],
}
