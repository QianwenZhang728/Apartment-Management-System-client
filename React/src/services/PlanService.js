const url="https://cs5610-team20-final-server.herokuapp.com/api/plans"

export const findAllPlans = () =>
    fetch(url)
    .then(response => response.json())

export const findPlanById = (planId) =>
    fetch(`${url}/${planId}`)
        .then(response => {
            return response.json()
        })

export default {
    findAllPlans, findPlanById
}
