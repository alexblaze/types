import { useFormik } from "formik"
import { loginSchema } from "./loginSchema"
import useLogin from "src/hooks/login/useLogin";

export const useLoginForm = () => {
    const { mutate } = useLogin();
    const formik = useFormik({
        initialValues: {
            email:'',
            password: ''
        },
        validationSchema: loginSchema,
        onSubmit : (values) => {
            mutate(values)
        }
    })
    return {
        formik
    }
}