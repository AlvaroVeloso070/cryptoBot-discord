module.exports = {
  request (endpoint,config){
    const rp = require('request-promise');
    const requestOptions = {
      method: 'GET',
      uri: config.domain + endpoint,
      qs: {
        //'convert': config.currency,
        'id' : config.itemsID
      },
      headers: {
        'X-CMC_PRO_API_KEY': config.API_KEY
      },
      json: true,
      gzip: true,
      encoding: 'utf8'
    };

    rp(requestOptions).then(response => {
      //console.log(response);
      //return response;
    }).catch((err) => {
      //console.log('API call error:', err.message);
    });
  }
}

