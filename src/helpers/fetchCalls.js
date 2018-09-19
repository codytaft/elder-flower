export const testResponsePhoneNumber = async (phoneNumber, firstName) => {
  await fetch(`http://localhost:3000/api/sendMessage`, {
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
  await fetch(`http://localhost:3000/api/v1/users/`, {
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
    alert(error);
  }
};

export const sendSOS = async (contactPhone, contactName) => {
  await fetch(`http://localhost:3000/api/sendMessage`, {
    method: 'POST',
    body: JSON.stringify({
      name: contactName,
      to: contactPhone,
      body: `Help me ${contactName}. You're my only hope`
    }),
    headers: {
      'Content-Type': 'application/json'
    }
  });
};

export const textQuestion = async (contactPhone, contactName, question) => {
  await fetch(`http://localhost:3000/api/sendMessage`, {
    method: 'POST',
    body: JSON.stringify({
      name: contactName,
      to: contactPhone,
      body: `Hi ${contactName}. ${question}`
    }),
    headers: {
      'Content-Type': 'application/json'
    }
  });
};
