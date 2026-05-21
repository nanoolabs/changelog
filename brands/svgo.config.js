module.exports = {
  multipass: true,
  plugins: [
    {
      name: "preset-default",
      params: {
        overrides: {
          removeComments: false,
          cleanupIDs: false,
        },
      },
    },
    // other plugin
    "removeXMLNS",
    "removeEditorsNSData",
  ],
};
