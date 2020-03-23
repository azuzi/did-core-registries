let focusedMethods = ["stack", "web", "ccp", "btcr", "sov", "ethr", "jolo", "kilt", "evan"]

if (process.env.DID_METHOD) {
  focusedMethods.push(process.env.DID_METHOD);
}

module.exports = focusedMethods;
