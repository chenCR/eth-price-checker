const axios = require('axios');

async function getEthPrice() {
  try {
    const response = await axios.get('https://api.coingecko.com/api/v3/simple/price?ids=ethereum&vs_currencies=usd');
    const ethPrice = response.data.ethereum.usd;
    return ethPrice;
  } catch (error) {
    console.error('Error retrieving ETH price:', error);
    throw error;
  }
}

module.exports = {
  getEthPrice
};
