// useLogin.js
import { setUser } from "@redux/slices/user";
import { useRouter } from "next/router";
import { useMutation } from "react-query";
import { useDispatch } from "react-redux";
import { login } from "src/api/login/login-api";
import { LoginFormValues } from "src/types/login";


const useLogin = () => {
    const router = useRouter();
    const dispatch = useDispatch();
  return useMutation(
    (formData : LoginFormValues) => login(formData), // Your login API function
    {
      // Options for the mutation
      onSuccess: (data) => {
        // Handle successful mutation
        console.log("Login successful:", data);
        // You can perform additional actions on success, such as updating global state, redirecting, etc.
         // Assuming the JWT token is in the 'token' field of the response
    const jwtToken = data?.jwt;

    // Storing the JWT token in localStorage
    localStorage.setItem('jwtToken', jwtToken);
    dispatch(setUser(data));
    router.push("/home")
      },
      onError: (error) => {
        // Handle mutation error
        console.error("Login failed:", error);
        // You can perform additional actions on error, such as displaying an error message.
      },
    }
  );
};

export default useLogin;
