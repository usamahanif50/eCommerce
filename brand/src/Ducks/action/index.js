export const inCrement = (amount) => {
    return (dispatch)=>{
        dispatch({
        type:"INCREAMENT",
        payload:amount
    })
    }
}

export const deCrement = (amount) => {
    return (dispatch)=>{
        dispatch({
        type:"DECREAMENT",
        payload:amount
    })
    }

}