import * as Yup from 'yup'

export const companyDetailsSchema = Yup.object({
    company_name: Yup.string().min(2).max(25).required('Please Enter Company Name'),
    registration_number: Yup.string().min(2).max(25).required('Please Enter Registration Number'),
    PAN: Yup.string().min(2).max(25).required('Please Enter PAN'),
    GST: Yup.string().min(2).max(25).required('Please Enter GST Number'),
    Address1: Yup.string().min(2).max(25).required('Please Enter Address'),
    Address2: Yup.string().min(2).max(25),
    city: Yup.string().min(2).max(25).required('Please Enter City'),
    state: Yup.string().min(2).max(25).required('Please Enter State'),
    PIN: Yup.string().min(2).max(25).required('Please Enter PIN'),
    country: Yup.string().min(2).max(25).required('Please Enter Country Name'),
    phone: Yup.number().min(10).max(10).required('Please Enter Phone Number'),
    companyType: Yup.string().min(2).max(25).required('Please Select Company Type'),
})