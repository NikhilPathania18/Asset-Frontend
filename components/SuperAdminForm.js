import { useFormik } from "formik";
import { superAdminSchema } from "./FormSchemas/superAdmin";
import { useRouter } from "next/router";
import * as API from "../pages/api/index.js";
import { toast } from "react-toastify";
import Link from "next/link";

const initialValues = {
  email: "",
  password: "",
  confirmPassword: "",
};

const SuperAdminForm = () => {
  const router = useRouter();
  const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
    useFormik({
      initialValues,
      validationSchema: superAdminSchema,
      onSubmit: async (values, action) => {
        console.log(values);
        const res = await API.createSuperAdmin({
          email: values.email,
          password: values.password,
          role: "superadmin",
        });
        if (res && res.data.success) {
          toast.success(res.data.message);
          router.push("/login");
        } else {
          toast.error(res.data.message);
        }
      },
    });

  return (
    <div>
      <main className="flex h-screen w-full justify-center items-center">
        <form
          className="w-96 p-4 border-2 rounded-xl bg-slate-50 shadow-lg mx-3 "
          onSubmit={handleSubmit}
        >
          <p className="text-blue-700 text-4xl pb-4 ">
            Super Admin Registration
          </p>
          <div className="mb-6">
            <label
              htmlFor="email"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Your email
            </label>
            <input
              type="text"
              id="email"
              name="email"
              autoComplete="off"
              value={values.email}
              onChange={handleChange}
              onBlur={handleBlur}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="example@gmail.com"
            />
            {errors.email && touched.email ? (
              <p className="text-red-400 text-sm">{errors.email}</p>
            ) : null}
          </div>
          <div className="mb-6">
            <label
              htmlFor="password"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Your password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              value={values.password}
              onChange={handleChange}
              onBlur={handleBlur}
              autoComplete="off"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            />
            {errors.password && touched.password ? (
              <p className="text-sm text-red-400">{errors.password}</p>
            ) : null}
          </div>
          <div className="mb-6">
            <label
              htmlFor="confirmPassword"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Confirm password
            </label>
            <input
              type="password"
              id="confirmPassword"
              name="confirmPassword"
              value={values.confirmPassword}
              onChange={handleChange}
              onBlur={handleBlur}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            />
            {errors.confirmPassword && touched.confirmPassword ? (
              <p className="text-sm text-red-400">{errors.confirmPassword}</p>
            ) : null}
          </div>
          <button
            type="submit"
            className="text-white bg-blue-700 hover:bg-blue-500 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-xl text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Sign Up
          </button>
          <Link href="/login" className="px-4 text-blue-600">Login</Link>
        </form>
      </main>
    </div>
  );
};

export default SuperAdminForm;
