const BASE_URL = 'http://160.119.254.236:5085/api/v1';

export const fetchCustomers = async (searchText = '', pageSize = 5, page = 1) => {
  const response = await fetch(`${BASE_URL}/customers?search_text=${searchText}&page_size=${pageSize}&page=${page}`);
  return response.json();
};
console.log(fetchCustomers);

export const createCustomer = async (customerData) => {
  const response = await fetch(`${BASE_URL}/customers`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(customerData),
  });
  return response.json();
};
