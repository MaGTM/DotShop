export const required = value => {
    if(value) return undefined

    return "This field is required"
}

export const maxLength = (length) => {
    return (value) => {
        if(value.length > length) return `Max length is ${length} symbols`

        return undefined
    }
}

export const minLength = (length) => {
    return (value) => {
        if(value.length < length) return `Min length is ${length} symbols`

        return undefined
    }
}

export const isMatch = (value, allValues) => {
    if(value !== allValues.password) return "Passwords do not match"
    return undefined
}