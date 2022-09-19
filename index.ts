// Payload from frontend
const payload = {
  name: 'Johnson',
  age: 23,
  needForFuture: 'not applicable',
};

// Backend request object
const dbData = {
  name: 'Johnson Durai',
  age: 25,
};

// Build response object

const response = { ...payload, ...dbData };

console.log(response);
