import { toast } from 'react-hot-toast';

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