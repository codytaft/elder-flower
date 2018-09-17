export const testPhoneNumber = async phoneNumber => {
  const res = await fetch(`http://localhost:3000/api/sendMessage`, {
    method: 'POST',
    body: JSON.stringify({ phoneNumber }),
    headers: {
      'Content-Type': 'application/json'
    }
  });
};

export const testCarerResponsePhoneNumber = async (phoneNumber, firstName) => {
  const res = await fetch(`http://localhost:3000/api/sendMessage`, {
    method: 'POST',
    body: JSON.stringify({
      name: firstName,
      from: phoneNumber,
      body: `If this is ${firstName}, type 'yes'. If not type 'no'.`
    }),
    headers: {
      'Content-Type': 'application/json'
    }
  });
};

export const createUser = async user => {
  console.log(user);
  const res = await fetch(`http://localhost:3000/api/v1/users/`, {
    method: 'POST',
    body: JSON.stringify({ user }),
    headers: {
      'Content-Type': 'application/json'
    }
  });
};

export const getUser = async (email, password) => {
  await fetch(`http://localhost:3000/api/v1/users/${email}/${password}`);
};
