export async function fetchUsers() {
  const response = await fetch('http://jsonplaceholder.typicode.com/users');
  return response.json();
}

export function filterUsersByText(listOfUsers = [], text) {
  if (!text) {
    return listOfUsers;
  }
  return (
    listOfUsers.filter(({ name, username, email }) => {
      return `${name} ${username} ${email}`
        .toLowerCase()
        .includes(text.toLowerCase().trim());
    }) ?? []
  );
}

export function sortUsersByFieldName(listOfUsers = [], fieldName) {
  if (!fieldName) {
    return listOfUsers;
  }
  const listCopy = [...listOfUsers];
  listCopy.sort((a, b) => a[fieldName].localeCompare(b[fieldName]));
  return listCopy;
}
