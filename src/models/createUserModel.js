import * as Yup from 'yup'

export const userSchema=Yup.object().shape({
    name:Yup
        .string("This input is string")
        .min(5,"The input is min 5 characters")
        .required("This input is required"),
    email:Yup
        .string()
        .email("the input is type email")
        .required(),
    age:Yup
        .number()
        .typeError('The input is type number')
        .min(0, 'Min value 0.')
        .max(100, 'Max value 50.')
        .required("The input is required"),
})

