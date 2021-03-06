const endpointUrl = (name, type) => {
  if (type == 'getAll' || type == 'post') {
    return `/api/${name}`; 
  }

  return `/api/${name}/:_id`; 
};

module.exports = {
  endpointUrl
};