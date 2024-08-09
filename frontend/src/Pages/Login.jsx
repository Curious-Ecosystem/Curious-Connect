import { Box, Button, Heading, Input } from '@chakra-ui/react'
import React, { useState } from 'react'
import { signInWithPopup, createUserWithEmailAndPassword, signOut, signInWithEmailAndPassword } from 'firebase/auth';
import { auth, db, provider } from "../Firebase/firebase-config";
import { doc, setDoc } from 'firebase/firestore';


const Login = () => {

     const [emailSignUp, setEmailSignUp] = useState('')
     const [passwordSignUp, setPasswordSignUp] = useState('')

     const [emailSignIn, setEmailSignIn] = useState('')
     const [passwordSignIn, setPasswordSignIn] = useState('')
     const Signup = async () => {
          try {
               const email = emailSignUp;
               const password = passwordSignUp;

               const userCredential = await createUserWithEmailAndPassword(auth, email, password)
               const user = userCredential.user;

               const usersCollectionRef = doc(db, 'users', user.uid);
               await setDoc(usersCollectionRef, { email, password })

               setEmailSignUp("");
               setPasswordSignUp("");
          } catch (error) {
               console.log('error: ', error);
          }
     }

     const SignIn = async () => {
          try {
               const email = emailSignIn;
               const password = passwordSignIn;

               const userCredential = await signInWithEmailAndPassword(auth, email, password);
               const user = userCredential.user;

               setEmailSignIn("")
               setPasswordSignIn("")
          } catch (error) {
               console.log('error: ', error);
          }
     }

     const signInWithGoogle = async () => {
          try {
               const userCredential = await signInWithPopup(auth, provider)
               const user = userCredential.user
               const name = user.displayName;
               const email = user.email;
               const profilePic = user.photoURL;

               const usersCollectionRef = doc(db, 'users', user.uid);
               await setDoc(usersCollectionRef, { email, googleAuth: true });

          } catch (error) {
               console.log('error: ', error);
          }
     }

     // * Logout
     const logout = async () => {
          try {
               await signOut(auth);
               alert("logout")
          } catch (error) {
               console.log('error: ', error);
          }
     }

     return (
          <Box  className='bg-blue-200' display={'flex'}>
          
               <Heading textAlign={'center'}>Sign Up</Heading>
               <Box w='30%' m='auto'>
                    <Box>
                         <Input type='email' placeholder='Email' value={emailSignUp} my='2' onChange={e => setEmailSignUp(e.target.value)} />
                    </Box>
                    <Box>
                         <Input type='password' placeholder='Password' my='2' value={passwordSignUp} onChange={e => setPasswordSignUp(e.target.value)} />
                    </Box>

                    <Button  className='bg-white' onClick={Signup}>Sign Up</Button>
                    <Button my='2' onClick={signInWithGoogle}>Sign In Google</Button>
               </Box>

               <Heading textAlign={'center'}>Sign In</Heading>
               <Box w='30%' m='auto'>
                    <Box>
                         <Input type='email' placeholder='Email' value={emailSignIn} my='2' onChange={e => setEmailSignIn(e.target.value)} />
                    </Box>
                    <Box>
                         <Input type='password' placeholder='Password' my='2' value={passwordSignIn} onChange={e => setPasswordSignIn(e.target.value)} />
                    </Box>

                    <Button onClick={SignIn}>Sign In</Button>
                    <Button my='2' className='bg-white' onClick={signInWithGoogle}>Sign In Google</Button>
                    <Button m='2' onClick={logout}>Logout</Button>
               </Box>
          </Box>
     )
}

export default Login