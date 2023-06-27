import { useRouter } from "next/router";
import { useFormik } from "formik";
import * as API from "./api/index.js";
import { companyDetailsSchema } from "../components/FormSchemas/companyDetails.js";
import { toast } from "react-toastify";

const initialValues = {
  company_name: "",
  registration_number: "",
  PAN: "",
  GST: "",
  Address1: "",
  Address2: "",
  city: "",
  state: "",
  PIN: "",
  country: "",
  phone: "",
  companyType: "",
};
const CompanyDetails = () => {
  const router = useRouter();
  const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
    useFormik({
      initialValues,
      validationSchema: companyDetailsSchema,
      onSubmit: async (values, action) => {
        console.log(values);
        const res = await API.companyProfile(values);
        if (res && res.data.success) {
          toast.success("Company Details filled succesfully");
          router.push("/dashboard");
        }
      },
    });

  const submitForm = async (values) => {
    const res = await API.companyProfile(values);
    if (res && res.data.success) {
      toast.success("Company Details filled succesfully");
      router.push("/dashboard");
    } else {
      toast.error("Error");
    }
  };
  return (
    <div>
      <main className="w-full flex justify-center items-center h-full my-7">
        <form
          className={`bg-slate-50 p-4 rounded-xl shadow-lg w-96`}
          onSubmit={(e) => {
            e.preventDefault();
            submitForm(values);
          }}
        >
          <p className="text-4xl text-blue-700 mb-4">Company Details</p>
          <div className="relative z-0 w-full mb-6 group">
            <input
              type="text"
              name="company_name"
              id="company_name"
              autoComplete="off"
              value={values.company_name}
              onChange={handleChange}
              onBlur={handleBlur}
              className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder=" "
            />
            {errors.company_name && touched.company_name ? (
              <p className="text-red-400 text-sm">{errors.company_name}</p>
            ) : null}
            <label
              htmlFor="company_name"
              className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Company Name
            </label>
          </div>
          <div className="relative z-0 w-full mb-6 group">
            <input
              type="text"
              name="registration_number"
              id="floating_company_registration_number"
              autoComplete="off"
              value={values.registration_number}
              onChange={handleChange}
              onBlur={handleBlur}
              className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder=" "
            />
            {errors.registration_number && touched.registration_number ? (
              <p className="text-red-400 text-sm">
                {errors.registration_number}
              </p>
            ) : null}
            <label
              htmlFor="registration_number"
              className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Company Registration Number
            </label>
          </div>
          <div className="relative z-0 w-full mb-6 group">
            <input
              type="text"
              name="PAN"
              id="PAN"
              autoComplete="off"
              value={values.PAN}
              onChange={handleChange}
              onBlur={handleBlur}
              className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder=" "
            />
            {errors.PAN && touched.PAN ? (
              <p className="text-red-400 text-sm">{errors.PAN}</p>
            ) : null}
            <label
              htmlFor="PAN"
              className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              PAN Number
            </label>
          </div>
          <div className="relative z-0 w-full mb-6 group">
            <input
              type="text"
              name="GST"
              id="GST"
              autoComplete="off"
              value={values.GST}
              onChange={handleChange}
              onBlur={handleBlur}
              className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder=" "
            />
            {errors.GST && touched.GST ? (
              <p className="text-red-400 text-sm">{errors.GST}</p>
            ) : null}
            <label
              htmlFor="GST"
              className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              GST Number
            </label>
          </div>
          <p className="m-2 mx-0 text-gray-600">Address</p>
          <div className="relative z-0 w-full mb-6 group">
            <input
              type="text"
              name="Address1"
              id="Address1"
              autoComplete="off"
              value={values.Address1}
              onChange={handleChange}
              onBlur={handleBlur}
              className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder=" "
            />
            {errors.Address1 && touched.Address1 ? (
              <p className="text-red-400 text-sm">{errors.Address1}</p>
            ) : null}
            <label
              htmlFor="Address1"
              className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Address 1
            </label>
          </div>
          <div className="relative z-0 w-full mb-6 group">
            <input
              type="text"
              name="Address2"
              id="Address2"
              autoComplete="off"
              value={values.Address2}
              onChange={handleChange}
              onBlur={handleBlur}
              className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder=" "
            />
            {errors.Address2 && touched.Address2 ? (
              <p className="text-red-400 text-sm">{errors.Address2}</p>
            ) : null}
            <label
              htmlFor="Address2"
              className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Address 2
            </label>
          </div>
          <div className="relative z-0 w-full mb-6 group">
            <input
              type="text"
              name="city"
              id="city"
              autoComplete="off"
              value={values.city}
              onChange={handleChange}
              onBlur={handleBlur}
              className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder=" "
            />
            {errors.city && touched.city ? (
              <p className="text-red-400 text-sm">{errors.city}</p>
            ) : null}
            <label
              htmlFor="city"
              className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              City
            </label>
          </div>
          <div className="relative z-0 w-full mb-6 group">
            <input
              type="text"
              name="state"
              id="state"
              autoComplete="off"
              value={values.state}
              onChange={handleChange}
              onBlur={handleBlur}
              className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder=" "
            />
            {errors.state && touched.state ? (
              <p className="text-red-400 text-sm">{errors.state}</p>
            ) : null}
            <label
              htmlFor="state"
              className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              State
            </label>
          </div>
          <div className="relative z-0 w-full mb-6 group">
            <input
              type="text"
              name="PIN"
              id="PIN"
              autoComplete="off"
              value={values.PIN}
              onChange={handleChange}
              onBlur={handleBlur}
              className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder=" "
            />
            {errors.PIN && touched.PIN ? (
              <p className="text-red-400 text-sm">{errors.PIN}</p>
            ) : null}
            <label
              htmlFor="PIN"
              className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              PIN Code
            </label>
          </div>
          <div className="relative z-0 w-full mb-6 group">
            <input
              type="text"
              name="country"
              id="country"
              autoComplete="off"
              value={values.country}
              onChange={handleChange}
              onBlur={handleBlur}
              className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder=" "
            />
            {errors.country && touched.country ? (
              <p className="text-red-400 text-sm">{errors.country}</p>
            ) : null}
            <label
              htmlFor="country"
              className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Country
            </label>
          </div>
          <div className="relative z-0 w-full mb-6 group">
            <input
              type="number"
              name="phone"
              id="phone"
              autoComplete="off"
              value={values.phone}
              onChange={handleChange}
              onBlur={handleBlur}
              className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder=" "
            />
            {errors.phone && touched.phone ? (
              <p className="text-red-400 text-sm">{errors.company_name}</p>
            ) : null}
            <label
              htmlFor="phone"
              className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Phone Number
            </label>
          </div>

          <label
            htmlFor="companyType"
            className="block mb-2 text-sm font-medium text-gray-600 dark:text-white"
          >
            Select an option
          </label>
          <select
            id="companyType"
            name="companyType"
            autoComplete="off"
            value={values.companyType}
            onChange={handleChange}
            onBlur={handleBlur}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 mb-3"
          >
            <option value="">Choose a type</option>
            <option value="Manufacturing">Manufacturing</option>
            <option value="Construction">Construction</option>
            <option value="IT/Technology">IT/Technology</option>
            <option value="Education">Education</option>
            <option value="Healthcare">Healthcare</option>
            <option value="Retail">Retail</option>
            <option value="Rental">Rental</option>
            <option value="Real Estate">Real Estate</option>
          </select>
          {errors.companyType && touched.companyType ? (
            <p className="mb-2 text-red-400 text-sm">{errors.companyType}</p>
          ) : null}

          <button
            type="submit"
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Submit
          </button>
        </form>
      </main>
    </div>
  );
};

export default CompanyDetails;
