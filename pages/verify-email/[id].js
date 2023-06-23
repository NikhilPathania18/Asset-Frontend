import { useRouter } from 'next/router';
import * as API from '../api/index.js'
import {toast} from 'react-toastify'


const VerifyEmail = () => {
    const router = useRouter();
    const {id} = router.query

    const verifyEmail = async() => {
        try{
            const res = await API.verifyEmail(id)
            if(res&&res.data.success){
                console.log(res);
                localStorage.setItem('superAdmin',JSON.stringify({
                  user: res.data.user,
                  token: res.data.token
                }))
                toast.success(res.data.message)
                router.push('/company-details')
            }
        }catch(error){
            toast.error('Error while verifying email')
            console.log(error)
        }
    }
  return (
    <div className='flex w-full h-screen justify-center items-center flex-col'>
      <p className="text-sm my-4">
        Please click this button to verify your account.
      </p>
      <div>
      <button type="button" className="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2" onClick={verifyEmail}>Verify Your Email</button>
      </div>
    </div>
  );
}

export default VerifyEmail;
