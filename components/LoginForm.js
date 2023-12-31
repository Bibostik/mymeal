// import { useForm } from 'react-hook-form';
// import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
// import { useState } from 'react'; 
// import firebase from '@/firebase';
// import AlertModal from './alerModal';
// import CartPage from './cartpage';

// const LoginForm = () => {
//   const { register, handleSubmit, formState: { errors } } = useForm();
//   const [isLoggedIn, setIsLoggedIn] = useState(false);

//   const [isAlertOpen, setIsAlertOpen] = useState(false);

//   const handleFormSubmit = async (data) => {
//     try {
//       const auth = getAuth();
//       // Authenticate user using Firebase Authentication
//       await signInWithEmailAndPassword(auth, data.email, data.password);
//       console.log('User logged in successfully.');
      
//       setIsLoggedIn(true); 

//     } catch (error) {
//       console.error('Login error:', error.message);
//       // Handle login error, show error message to user, etc.
//     }
//   };

//    const handleAlertClose = () => {
//     setIsAlertOpen(false); // Close the alert modal
//   };

//   return (
//     <div className="flex items-center justify-center h-auto">
//       <form className="w-full max-w-md p-6 rounded-lg shadow-md" onSubmit={handleSubmit(handleFormSubmit)}>
//         <div className="mb-4">
//           <label className="block text-sm font-semibold">Email</label>
//           <input
//             type="email"
//             name="email"
//             {...register('email', { required: true })}
//             className="w-full p-2 border rounded-md"
//           />
//           {errors.email && <span className="text-red-500 text-sm">Email is required</span>}
//         </div>
//         <div className="mb-4">
//           <label className="block text-sm font-semibold">Password</label>
//           <input
//             type="password"
//             name="password"
//             {...register('password', { required: true })}
//             className="w-full p-2 border rounded-md"
//           />
//           {errors.password && <span className="text-red-500 text-sm">Password is required</span>}
//         </div>
//         <button
//           type="submit"
//           className="w-full bg-blue-500 text-white font-semibold py-2 rounded-md hover:bg-blue-600 focus:outline-none"
//         >
//           Login
//         </button>
//       </form>
//       {isLoggedIn && <CartPage />} {/* Show cart once logged in */}
//       <AlertModal isOpen={isAlertOpen} onRequestClose={handleAlertClose} />
      
//     </div>
//   );
// };

// export default LoginForm;



// import { useForm } from 'react-hook-form';
// import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
// import { useState } from 'react';
// import firebase from '@/firebase';
// import AlertModal from './alerModal';
// import { useRouter } from 'next/navigation';
// import CartPage from './cartpage';

// const LoginForm = () => {
//   const { register, handleSubmit, formState: { errors } } = useForm();
//   const [isLoggedIn, setIsLoggedIn] = useState(false);
//   const [isAlertOpen, setIsAlertOpen] = useState(false);
//   const router = useRouter();

//   const handleFormSubmit = async (data) => {
//     try {
//       const auth = getAuth();
//       // Authenticate user using Firebase Authentication
//       await signInWithEmailAndPassword(auth, data.email, data.password);
//       console.log('User logged in successfully.');
//       setIsLoggedIn(true);
//     } catch (error) {
//       console.error('Login error:', error.message);
//       setIsAlertOpen(true); 
//     }
//   };

//   const handleAlertClose = () => {
//     setIsAlertOpen(false); 
//   };

//   const handleWelcomeClick = () => {
//     router.push('/welcome');
//   };

//   return (
//     <div className="flex items-center justify-center h-auto">
//       <form className="w-full max-w-md p-6 rounded-lg shadow-md" onSubmit={handleSubmit(handleFormSubmit)}>
//         <div className="mb-4">
//           <label className="block text-sm font-semibold">Email</label>
//           <input
//             type="email"
//             name="email"
//             {...register('email', { required: true })}
//             className="w-full p-2 border rounded-md"
//           />
//           {errors.email && <span className="text-red-500 text-sm">Email is required</span>}
//         </div>
//         <div className="mb-4">
//           <label className="block text-sm font-semibold">Password</label>
//           <input
//             type="password"
//             name="password"
//             {...register('password', { required: true })}
//             className="w-full p-2 border rounded-md"
//           />
//           {errors.password && <span className="text-red-500 text-sm">Password is required</span>}
//         </div>
//         <button
//           type="submit"
//           className="w-full bg-blue-500 text-white font-semibold py-2 rounded-md hover:bg-blue-600 focus:outline-none"
//         >
//           Login
//         </button>
//       </form>
//       {isLoggedIn && (
//         <div>
//           <button
//             className="w-full bg-blue-500 text-white font-semibold py-2 rounded-md hover:bg-blue-600 focus:outline-none"
//             onClick={handleWelcomeClick}
//           >
//             Welcome Page
//           </button>
//           <CartPage />
//         </div>
//       )}
//       <AlertModal isOpen={isAlertOpen} onRequestClose={handleAlertClose} />
//     </div>
//   );
// };

// export default LoginForm;




import { useForm } from 'react-hook-form';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import { useState } from 'react';
import firebase from '@/firebase';
import AlertModal from './alerModal';
import { redirect, useRouter } from 'next/navigation'; // Correct import
import CartPage from './cartpage';

const LoginForm = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isAlertOpen, setIsAlertOpen] = useState(false);
  const router = useRouter();
  const extractUserCred = (user) =>{
    const {uid, displayName, email} = user;
    return {uid, displayName, email}
  }
  const handleFormSubmit = async (data) => {
    try {
      const auth = getAuth();
      // Authenticate user using Firebase Authentication
      const userCredential = await signInWithEmailAndPassword(auth, data.email, data.password);
      const userData = extractUserCred(userCredential.user)
      localStorage.setItem('UserData', JSON.stringify(userData))
      console.log(`user cred` , userData)
      console.log('User logged in successfully.');
      
      setIsLoggedIn(true);
    } catch (error) {
      console.error('Login error:', error.message);
      setIsAlertOpen(true); 
    }
  };

  const handleAlertClose = () => {
    setIsAlertOpen(false); 
  };

  const handleWelcomeClick = () => {
    redirect('/welcome');
  };

  return (
    <div className="flex items-center justify-center h-auto">
      <form className="w-full max-w-md p-6 rounded-lg shadow-md" onSubmit={handleSubmit(handleFormSubmit)}>
       <div className="mb-4">
          <label className="block text-sm font-semibold">Email</label>
          <input
            type="email"
            name="email"
            {...register('email', { required: true })}
            className="w-full p-2 border rounded-md"
          />
          {errors.email && <span className="text-red-500 text-sm">Email is required</span>}
        </div>
        <div className="mb-4">
          <label className="block text-sm font-semibold">Password</label>
          <input
            type="password"
            name="password"
            {...register('password', { required: true })}
            className="w-full p-2 border rounded-md"
          />
          {errors.password && <span className="text-red-500 text-sm">Password is required</span>}
        </div>
        <button
          type="submit"
          className="w-full bg-blue-500 text-white font-semibold py-2 rounded-md hover:bg-blue-600 focus:outline-none"
        >
          Login
        </button>
      </form>
      {isLoggedIn && (
        // <div>
        //   <button
        //     className="w-full bg-blue-500 text-white font-semibold py-2 rounded-md hover:bg-blue-600 focus:outline-none"
        //     onClick={handleWelcomeClick}
        //   >
        //     Welcome Page
        //   </button>
        //   <CartPage />
        // </div>
        redirect('/welcome')
      )}
      <AlertModal isOpen={isAlertOpen} onRequestClose={handleAlertClose} />
    </div>
  );
};

export default LoginForm;
