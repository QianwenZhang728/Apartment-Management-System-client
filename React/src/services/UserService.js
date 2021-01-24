const url = "https://cs5610-team20-final-server.herokuapp.com/api/users"
const urlApartment = "https://cs5610-team20-final-server.herokuapp.com/api/units"

export const findUserById = (userId) =>
    fetch(`${url}/${userId}`)
        .then(response => response.json())

// export const findAllUsers = () =>
//     fetch(`${url}/users`)
//         .then(response => response.json())

export const createUser = (newUser) =>
    fetch(url, {
        method: 'POST',
        body: JSON.stringify(newUser),
        headers: {
            'content-type': 'application/json'
        }
    })
        .then(response => response.json())


// export const deleteUser = (userId) =>
//     fetch(`${url}/${userId}`, {
//         method: 'DELETE'
//     })
//         .then(response => response.json())


export const updateUser = (userId, newUser) =>
    fetch(`${url}/${userId}`, {
        method: 'PUT',
        body: JSON.stringify(newUser),
        headers: {
            'content-type': 'application/json'
        }
    })
        .then(response => response.json())


export const findAllAdmins = () =>
    fetch(`${url}/admins`)
        .then(response => {
            return response.json()
        })

export const findApartments = () =>
    fetch(urlApartment)
        .then(response => {
            return response.json()
        })



