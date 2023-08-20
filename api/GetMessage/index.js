module.exports = async function (context, req) {
  context.res = {
    // status: 200, /* Defaults to 200 */
    body: { text: `Hello from the API and app setting (in PR): ${process.env.TESTENV}` },
  };
};
