export async function fetchUsers() {
  const response = await fetch('http://jsonplaceholder.typicode.com/users');
  return response.json();
}
