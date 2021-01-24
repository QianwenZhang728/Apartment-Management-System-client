const url = "https://cs5610-team20-final-server.herokuapp.com/api/users"
// const url = "http://localhost:8080/api/users"

export const findUserWhenLogin = (admin) =>
    fetch(`${url}/login`, {
        method: 'POST',
        body: JSON.stringify(admin),
        headers: {
            'content-type': 'application/json'
        },
        credentials: 'include'
    })
        .then(response => {
            if (response.ok) {
                localStorage.setItem("token", JSON.stringify(response))
                return response.json()
            } else {
                alert("The username or password is incorrect")
                return response.json();
            }
        })

export const logout = () =>
    fetch(`${url}/logout`, {
        method: 'POST',
        credentials: 'include'
    })

export const getProfile = () =>
    fetch(`${url}/getProfile`, {
        method: 'POST',
        credentials: 'include'
    })
        .then(response => {
            return response.json()
        })

export const findAllAdmins = () =>
    fetch(`${url}/admins`)
        .then(response => {
            return response.json()
        })

export const createAdmin = (newAdmin) =>
    fetch(url, {
        method: 'POST',
        body: JSON.stringify(newAdmin),
        headers: {
            'content-type': 'application/json'
        }
    })
        .then(response => response.json())

export const deleteAdmin = (adminId) =>
    fetch(`${url}/${adminId}`, {
        method: 'DELETE'
    })
        .then(response => response.json())

export const updateAdmin = (adminId, newAdmin) =>
    fetch(`${url}/${adminId}`, {
        method: 'PUT',
        body: JSON.stringify(newAdmin),
        headers: {
            'content-type': 'application/json'
        }
    })
        .then(response => {
            return response.json()
        })

export const findAdminById = (adminId) =>
    fetch(`${url}/${adminId}`)
        .then(response => response.json())

