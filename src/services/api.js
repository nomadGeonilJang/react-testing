export async function fetchRegions() {
  const url = 'https://eatgo-customer-api.ahastudio.com/regions';
  const response = await fetch(url);
  return response.json();
}
export async function fetchCategories() {
  const url = 'https://eatgo-customer-api.ahastudio.com/categories';
  const response = await fetch(url);
  return response.json();
}

export async function fetchRestaurants({ regionName, categoryId }) {
  const url = `https://eatgo-customer-api.ahastudio.com/restaurants?region=${regionName}&category=${categoryId}`;
  const response = await fetch(url);
  return response.json();
}

export async function postLogin({ email, password }) {
  console.log('-__-sdpoajsdp');
  try {
    const url = `https://eatgo-login-api.ahastudio.com/session`;
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email, password }),
    });
    const { accessToken } = await response.json();
    return accessToken;
  } catch (e) {}
}
