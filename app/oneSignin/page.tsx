"use client"
import { useContext, useState } from 'react';
import AuthContext from '../context/AuthContext/AuthContext';


const Page = () => {
  const { createUser, signIn, user, loading } = useContext(AuthContext);

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignIn = (event: React.FormEvent) => {
    event.preventDefault();
    signIn(email, password)
      .then((result) => {
        console.log('User signed in:', result.user);
      })
      .catch((error) => {
        console.error('Error signing in:', error);
      });
  };

  const handleSignUp = (event: React.FormEvent) => {
    event.preventDefault();
    createUser(email, password)
      .then((result) => {
        console.log('User created:', result.user);
      })
      .catch((error) => {
        console.error('Error creating user:', error);
      });
  };

  if (loading) return <div>Loading...</div>;

  return (
    <div>
      <h1>{user ? 'Welcome, ' + user.email : 'Please Sign In'}</h1>
      <form onSubmit={handleSignIn}>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
          required
        />
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
          required
        />
        <button type="submit">Sign In</button>
      </form>
      <button onClick={handleSignUp}>Sign Up</button>
    </div>
  );
};

export default Page;
