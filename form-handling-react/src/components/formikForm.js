import { ErrorMessage, Field, Form, Formik } from "formik";
import * as Yup from "yup";


const validationSchema = Yup.object({
    username: Yup.string().required("Username is required"),
    email: Yup.string().email("Invalid email address").required("Email is required"),
    password: Yup.string().min(6, "Password must be at least 6 characters").required("Password is required"),
});

const FormikForm = () => {
    const initialValues = {
    username: "",
    email: "",
    password: "",
    };

    const handleSubmit = (values, { resetForm }) => {
    console.log("Form data submitted:", values);
    alert("Registration successful!");
    resetForm();
    };

    return (
        <div className="max-w-md mx-auto mt-10 p-6 border rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold mb-5 text-center">User Registration (Formik)</h2>

        <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
        >
        <Form className="space-y-4">
            <div>
            <label htmlFor="username" className="block mb-1 font-medium">Username</label>
            <Field
                type="text"
                id="username"
                name="username"
                className="w-full border rounded-md p-2 focus:outline-none focus:ring focus:ring-blue-300"
            />
            <ErrorMessage name="username" component="p" className="text-red-500 text-sm mt-1" />
            </div>

            <div>
            <label htmlFor="email" className="block mb-1 font-medium">Email</label>
            <Field
                type="email"
                id="email"
                name="email"
                className="w-full border rounded-md p-2 focus:outline-none focus:ring focus:ring-blue-300"
            />
            <ErrorMessage name="email" component="p" className="text-red-500 text-sm mt-1" />
            </div>

            <div>
            <label htmlFor="password" className="block mb-1 font-medium">Password</label>
            <Field
                type="password"
                id="password"
                name="password"
                className="w-full border rounded-md p-2 focus:outline-none focus:ring focus:ring-blue-300"
            />
            <ErrorMessage name="password" component="p" className="text-red-500 text-sm mt-1" />
            </div>

          {/* Submit Button */}
            <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition"
            >
            Register
            </button>
        </Form>
        </Formik>
    </div>
    );
};

export default FormikForm;
