import { useState, FormEvent } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { toast } from 'react-hot-toast';

export function useAuthForm() {
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { signIn, signUp } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    
    try {
      if (isLogin) {
        await signIn(email, password);
      } else {
        await signUp(email, password);
      }
      navigate('/dashboard');
      toast.success(isLogin ? 'Welcome back!' : 'Account created successfully!');
    } catch (error) {
      toast.error('Authentication failed. Please try again.');
    }
  };

  return {
    isLogin,
    email,
    password,
    setIsLogin,
    setEmail,
    setPassword,
    handleSubmit,
  };
}