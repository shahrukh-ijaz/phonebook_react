export function getProfile() {
  let token = "Token " + localStorage.getItem("token");
  return fetch("http://localhost:8001/api/profile", {
    method: "GET",
    withCredentials: true,
    credentials: "include",
    headers: {
      Authorization: token,
      "Content-Type": "application/json"
    }
  })
    .then(response => {
      return response.json();
    })
    .catch(error => {
      throw error;
    });
}
export function getContacts() {
  let token = "Token " + localStorage.getItem("token");
  return fetch("http://localhost:8001/api/contacts", {
    method: "GET",
    withCredentials: true,
    credentials: "include",
    headers: {
      Authorization: token,
      "Content-Type": "application/json"
    }
  })
    .then(response => {
      return response.json();
    })
    .catch(error => {
      throw error;
    });
}
export function logout() {
  let token = "Token " + localStorage.getItem("token");
  return fetch("http://localhost:8001/api/logout", {
    method: "GET",
    withCredentials: true,
    credentials: "include",
    headers: {
      Authorization: token,
      "Content-Type": "application/json"
    }
  })
    .then(response => {
      return response.json();
    })
    .catch(error => {
      throw error;
    });
}
export function addContact(data) {
  let token = "Token " + localStorage.getItem("token");
  return fetch("http://localhost:8001/api/contacts", {
    method: "POST",
    withCredentials: true,
    credentials: "include",
    headers: {
      Authorization: token,
      "Content-Type": "application/json"
    },
    body: JSON.stringify(data)
  })
    .then(response => {
      return response.json();
    })
    .catch(error => {
      throw error;
    });
}
export function login(data) {
  return fetch("http://localhost:8001/api/login", {
    method: "POST",
    withCredentials: true,
    credentials: "include",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(data)
  })
    .then(response => {
      return response.json();
    })
    .catch(error => {
      throw error;
    });
}
export function register(data) {
  return fetch("http://localhost:8001/api/signup", {
    method: "POST",
    withCredentials: true,
    credentials: "include",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(data)
  })
    .then(response => {
      return response.json();
    })
    .catch(error => {
      throw error;
    });
}
