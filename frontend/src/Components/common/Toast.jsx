import { toast } from 'react-hot-toast';

// import { Toaster } from 'react-hot-toast';                 // In element where it is being included
// Implement using showLoadingToast(ApiCallPromise , deafultMessages)

//defaultMessages = {
//   loading: 'Saving...',
//   success: 'Settings saved successfully!',
//   error: 'Could not save settings.',
// }

// In API call, use Promise with resolve and reject

// For success : resolve({message : })
// For failure : reject({message : })

//Include Toaster element using <Toaster />

export const showLoadingToast = (promise, defaultMessages) => {
  return toast.promise(
    promise,
    {
      loading: defaultMessages.loading,
      success: (data) => <b>{data.message || defaultMessages.success}</b>,
      error: (error) => <b>{error.message || defaultMessages.error}</b>,
    },
    {
      position: 'top-center',
      style: {
        background: 'white',
        color: 'black',
      },
    }
  );
};

