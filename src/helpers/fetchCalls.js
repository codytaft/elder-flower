export const testPhoneNumber = () => {};

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
