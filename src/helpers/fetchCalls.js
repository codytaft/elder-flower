export const testPhoneNumber = async phoneNumber => {
  const res = await fetch(`http://localhost:3000/api/sendMessage`, {
    method: 'POST',
    body: JSON.stringify({ phoneNumber }),
    headers: {
      'Content-Type': 'application/json'
    }
  });
};

export const testCarerResponsePhoneNumber = async (
  phoneNumber,
  contactName
) => {
  const res = await fetch(`http://localhost:3000/api/sendMessage`, {
    method: 'POST',
    body: JSON.stringify({
      name: contactName,
      from: phoneNumber,
      body: `If this is ${contactName}, type 'yes'. If not type 'no'.`
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

export const getUser = async email => {
  const res = await fetch(`http://localhost:3000/api/v1/users/:email`, {});
};
