import { useFormik } from 'formik';
import { useNavigate } from 'react-router-dom';
import { useSnackbar } from 'notistack';


export default function Login({ userData }) {
    const {enqueueSnackbar} = useSnackbar();
    const navigate = useNavigate()

  const { handleChange, values, handleSubmit } = useFormik({
    initialValues: {
      userName: '',
      password: '',
    },
    onSubmit: (values) => {
      // alert(JSON.stringify(values, null, 2));
      console.log("values", values)

        if (values.userName === "admin" && values.password === "admin") {
          enqueueSnackbar("Login successfull", { variant: "success" });

          sessionStorage.setItem("userName", values.userName )
          navigate('/')
        } 
        else {
          enqueueSnackbar("ERR095: Login Failed", { variant: "error" });

          sessionStorage.setItem("userName", null )

        }
    },
  });

  return (
    <div className='border-2 border-sky-900 p-8'>
      <h2 className='text-center text-sky-900 text-xl font-bold pb-4'>Login</h2>
      <form onSubmit={handleSubmit}
      // className='flex flex-col gap-4'
      >
        <input
          id="userName"
          name="userName"
          type="text"
          placeholder='User Name'
          onChange={handleChange}
          value={values.userName}
          className='py-2 px-4 border-2 border-sky-900 w-full my-2 rounded-lg'
        />
        <input
          id="password"
          name="password"
          type="password"
          className='py-2 px-4 border-2 border-sky-900 w-full my-2 rounded-lg'

          placeholder='Password'
          onChange={handleChange}
          value={values.password}
        />
        <button type='submit' className='rounded-lg bg-sky-900 px-8 py-2 text-white w-full my-2 pointer'>Login</button>
      </form>
      <p className='font-medium text-center'>Don't you have account? <span>Sign up</span></p>
    </div>
  );
}
