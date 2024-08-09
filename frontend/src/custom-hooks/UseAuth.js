import React, { useEffect, useState } from 'react';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from '../Firebase/firebase-config';

const UseAuth = () => {

     const [currentUser, setCurrentUser] = useState(null);

     useEffect(() => {
          const unsubscribe = onAuthStateChanged(auth, (user) => {
               if (user) {
                    setCurrentUser(user)
               } else {
                    setCurrentUser(null);
               }
          })

          // * cleanup;
          return unsubscribe;
     }, [])

     return currentUser;
}

export default UseAuth