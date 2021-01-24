const url = "https://cs5610-team20-final-server.herokuapp.com/api/users"
// const url = "http://localhost:8080/api/users"

export const findAllResidents = () =>
    fetch(`${url}/residents`)
        .then(response => {
            return response.json()
        })

export const createResident = (newResident) =>
    fetch(url, {
        method: 'POST',
        body: JSON.stringify(newResident),
        headers: {
            'content-type': 'application/json'
        }
    })
        .then(response => response.json())

export const deleteResident = (residentId) =>
    fetch(`${url}/${residentId}`, {
        method: 'DELETE'
    })
        .then(response => response.json())

export const updateResident = (residentId, newResident) =>
    fetch(`${url}/${residentId}`, {
        method: 'PUT',
        body: JSON.stringify(newResident),
        headers: {
            'content-type': 'application/json'
        }
    })
        .then(response => {
            return response.json()
        })
