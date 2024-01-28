var ErrorAlert = ""

const setRef = (ref) => {
    ErrorAlert = ref
}

const getRef = (data) => {
    ErrorAlert.onShowAlert(data)
}

export default {
    setRef,
    getRef
}