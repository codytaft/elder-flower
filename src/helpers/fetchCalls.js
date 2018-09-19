export const testResponsePhoneNumber = async (phoneNumber, firstName) => {
  const res = await fetch(`http://localhost:3000/api/sendMessage`, {
    method: 'POST',
    body: JSON.stringify({
      name: firstName,
      to: phoneNumber,
      body: `If this is ${firstName}, type 'yes'. If not type 'no'.`
    }),
    headers: {
      'Content-Type': 'application/json'
    }
  });
};

export const createUser = async user => {
  const res = await fetch(`http://localhost:3000/api/v1/users/`, {
    method: 'POST',
    body: JSON.stringify({ user }),
    headers: {
      'Content-Type': 'application/json'
    }
  });
};

export const getUser = async email => {
  try {
    const response = await fetch(`http://localhost:3000/api/v1/users/${email}`);
    return response.json();
  } catch (error) {
    console.log(error);
  }
};
