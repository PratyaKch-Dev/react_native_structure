import endpoints from '~/configs/endpoints';

export const authLogin = async ({variables}) => {
  const {email, password} = variables;
  console.log('authLogin:email:', email);
  console.log('authLogin:password:', password);
  const {data} = await endpoints.restApi({
    fullService: endpoints.apis.v1.AUTH_LOGIN,
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: {
      email,
      password,
    },

    // useBasicAuth: true,
  });

  return data;
};

export default {
  authLogin,
};
