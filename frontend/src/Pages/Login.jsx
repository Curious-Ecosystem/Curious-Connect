import { Box, Button, Heading, Input, VStack, Divider, HStack } from '@chakra-ui/react';
import React, { useState } from 'react';
import { signInWithPopup, createUserWithEmailAndPassword, signOut, signInWithEmailAndPassword } from 'firebase/auth';
import { auth, db, provider } from "../Firebase/firebase-config";
import { doc, setDoc } from 'firebase/firestore';

const Login = () => {
  const [emailSignUp, setEmailSignUp] = useState('');
  const [passwordSignUp, setPasswordSignUp] = useState('');

  const [emailSignIn, setEmailSignIn] = useState('');
  const [passwordSignIn, setPasswordSignIn] = useState('');

  const [showSignUp, setShowSignUp] = useState(true); // State to toggle between Sign Up and Sign In forms

  const Signup = async () => {
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, emailSignUp, passwordSignUp);
      const user = userCredential.user;
      const usersCollectionRef = doc(db, 'users', user.uid);
      await setDoc(usersCollectionRef, { email: emailSignUp });
      setEmailSignUp('');
      setPasswordSignUp('');
    } catch (error) {
      console.error('Signup error: ', error);
    }
  };

  const SignIn = async () => {
    try {
      await signInWithEmailAndPassword(auth, emailSignIn, passwordSignIn);
      setEmailSignIn('');
      setPasswordSignIn('');
    } catch (error) {
      console.error('SignIn error: ', error);
    }
  };

  const signInWithGoogle = async () => {
    try {
      const userCredential = await signInWithPopup(auth, provider);
      const user = userCredential.user;
      const usersCollectionRef = doc(db, 'users', user.uid);
      await setDoc(usersCollectionRef, { email: user.email, googleAuth: true });
    } catch (error) {
      console.error('Google SignIn error: ', error);
    }
  };

  const logout = async () => {
    try {
      await signOut(auth);
      alert('Logged out');
    } catch (error) {
      console.error('Logout error: ', error);
    }
  };

  return (
    <Box
      minH="100vh"
      display="flex"
      alignItems="center"
      justifyContent="center" 
      p={4}
    >
      <Box
        p={15}
        maxW="lg"
        borderWidth={4}
        borderRadius="18px"
        boxShadow="lg"
        bg="rgba(255, 255, 255, 0.1)"
        backdropFilter="blur(18px)" // Frosted glass effect
        borderColor="rgba(255, 255, 255, 0.2)"
        _hover={{ boxShadow: 'xl', transform: 'scale(1.02)' }}
        transition="all 0.3s ease"
      >
        <HStack spacing={100} mb={20} justifyContent="center">
          <Button
            colorScheme="teal"
            color={'white'}
            variant={showSignUp ? 'solid' : 'outline'}
            onClick={() => setShowSignUp(true)}
          >
            Sign Up
          </Button>
          <Button
            colorScheme="teal"
            color={'white'}
            variant={!showSignUp ? 'solid' : 'outline'}
            onClick={() => setShowSignUp(false)}
          >
            Sign In
          </Button>
        </HStack>

        {showSignUp ? (
          <VStack spacing={7}>
            <Heading as="h3" size="lg" color="white" fontFamily="'Poppins', sans-serif" fontWeight="semibold">Sign Up</Heading>
            <Input
              variant="outline"
              placeholder="Email"
              type="Email"
              value={emailSignUp}
              onChange={(e) => setEmailSignUp(e.target.value)}
              mb={3}
              borderColor="teal.300"
              borderRadius="10px"
              _focus={{ borderColor: 'teal.400', boxShadow: '0 0 0 1px teal.400' }}
              transition="all 0.2s ease"
              fontFamily="'Poppins', sans-serif"
              bg="rgba(255, 255, 255, 0.1)" // Semi-transparent background
              color="white"
            />
            <Input
              variant="outline"
              placeholder="Password"
              type="password"
              value={passwordSignUp}
              onChange={(e) => setPasswordSignUp(e.target.value)}
              mb={5}
              borderColor="teal.300"
              borderRadius="10px"
              _focus={{ borderColor: 'teal.400', boxShadow: '0 0 0 1px teal.400' }}
              transition="all 0.2s ease"
              fontFamily="'Poppins', sans-serif"
              bg="rgba(255, 255, 255, 0.1)" // Semi-transparent background
              color="white"
            />
            <Button
              colorScheme="teal"
              width="full"
              _hover={{ bg: 'teal.400', color: 'white' }}
              _active={{ bg: 'teal.500', color: 'white' }}
              borderRadius="md"
              transition="all 0.2s ease"
              fontFamily="'Poppins', sans-serif"
              color="white"
            >
              Sign Up
            </Button>
            <Button
              variant="outline"
              colorScheme="teal"
              width="full"
              borderRadius="md"
              _hover={{ borderColor: 'teal.500', color: 'teal.500' }}
              transition="all 0.2s ease"
              fontFamily="'Poppins', sans-serif"
              onClick={signInWithGoogle}
              color="white"
            >
              Sign Up with Google
            </Button>
          </VStack>
        ) : (
          <VStack spacing={6}>
            <Heading as="h3" size="md" color="white" fontFamily="'Poppins', sans-serif" fontWeight="semibold">Sign In</Heading>
            <Input
              variant="outline"
              placeholder="Email"
              type="Email"
              value={emailSignIn}
              onChange={(e) => setEmailSignIn(e.target.value)}
              mb={3}
              borderColor="teal.300"
              borderRadius="12px"
              _focus={{ borderColor: 'teal.400', boxShadow: '0 0 0 1px teal.400' }}
              transition="all 0.2s ease"
              fontFamily="'Poppins', sans-serif"
              bg="rgba(255, 255, 255, 0.2)" // Semi-transparent background
              color="white"
            />
            <Input
              variant="outline"
              placeholder="Password"
              type="password"
              value={passwordSignIn}
              onChange={(e) => setPasswordSignIn(e.target.value)}
              mb={4}
              borderColor="teal.300"
              borderRadius="12px"
              _focus={{ borderColor: 'teal.400', boxShadow: '0 0 0 1px teal.400' }}
              transition="all 0.2s ease"
              fontFamily="'Poppins', sans-serif"
              bg="rgba(255, 255, 255, 0.2)" // Semi-transparent background
              color="white"
            />
            <Button
              colorScheme="teal"
              width="full"
              _hover={{ bg: 'teal.400', color: 'white' }}
              _active={{ bg: 'teal.500', color: 'white' }}
              borderRadius="md"
              transition="all 0.2s ease"
              fontFamily="'Poppins', sans-serif"
              color="white"
            >
              Sign In
            </Button>
            <Button
              variant="outline"
              colorScheme="teal"
              width="full"
              borderRadius="md"
              _hover={{ borderColor: 'teal.500', color: 'teal.500' }}
              transition="all 0.2s ease"
              fontFamily="'Poppins', sans-serif"
              onClick={signInWithGoogle}
              color="white"
            >
              Sign In with Google
            </Button>
          </VStack>
        )}
      </Box>
    </Box>
  );
};

export default Login;
