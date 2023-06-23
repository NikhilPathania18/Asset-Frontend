import * as Yup from 'yup'

export const superAdminLoginSchema = Yup.object({
    email: Yup.string().email('Please enter a valid email').min(2).max(50).required('Please enter a valid email'),
    password: Yup.string().min(3).required('Please enter your password')
})