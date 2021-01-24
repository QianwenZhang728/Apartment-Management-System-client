const planUrl="https://cs5610-team20-final-server.herokuapp.com/api/plans"
const unitUrl="https://cs5610-team20-final-server.herokuapp.com/api/units"

export const findUnitsForPlan = (planId) =>
    fetch(`${planUrl}/${planId}/units`)
        .then(response => response.json())

export const createUnit = (planId, unit) =>
    fetch(`${planUrl}/${planId}/units`, {
        method: "POST",
        body: JSON.stringify(unit),
        headers: {
            "content-type": "application/json"
        }
    }).then(response => response.json())

export const updateUnit = (unitId, newUnit) =>
    fetch(`${unitUrl}/${unitId}`, {
        method: "PUT",
        body: JSON.stringify(newUnit),
        headers: {
            "content-type": "application/json"
        }
    })
        .then(response => response.json())

export const deleteUnit = unitId =>
    fetch(`${unitUrl}/${unitId}`,{
        method: "DELETE"
    }).then(response => response.json())

export default {
    findUnitsForPlan, createUnit, updateUnit, deleteUnit
}
