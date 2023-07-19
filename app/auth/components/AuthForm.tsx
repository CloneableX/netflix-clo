'use client'

import {Input} from "@/app/components/Input";
import {useCallback, useState} from "react";
import axios from "axios";
import {signIn} from "next-auth/react";
import {useRouter} from "next/navigation";

export const AuthForm = () => {
  const router = useRouter();
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [variant, setVariant] = useState('login');

  const toggleVariant = useCallback(() => {
    setVariant((currentVariant) => currentVariant === 'login' ? 'register' : 'login')
  }, []);

  const login = useCallback(async () => {
    try {
      await signIn('credentials', {
        email,
        password,
        redirect: false,
        callbackUrl: '/'
      })

      router.push('/')
    } catch (error) {
      console.log(error)
    }
  }, [email, password, router]);

  const register = useCallback(async () => {
    try {
      await axios.post('/api/register', {
        name: username,
        email,
        password
      })
      await login()
    } catch (error) {
      console.log(error)
    }
  }, [username, email, password, login]);

  return (
    <div className="flex justify-center">
      <div className="bg-black bg-opacity-70 p-16 self-center w-full rounded-md lg:w-3/5 lg:max-w-lg">
        <h2 className="text-white text-4xl font-semibold mb-8">
          {variant === 'login' ? 'Sign in' : 'Register'}
        </h2>
        <div className="flex flex-col gap-4">
          {variant !== 'login' && (
            <Input
              id="username"
              label="Username"
              value={username}
              onChange={(e: any) => {
                setUsername(e.target.value)
              }}
            />
          )}
          <Input
            id="email"
            label="Email"
            value={email}
            type="email"
            onChange={(e: any) => {
              setEmail(e.target.value)
            }}
          />
          <Input
            id="password"
            label="Password"
            value={password}
            type="password"
            onChange={(e: any) => {
              setPassword(e.target.value)
            }}
          />
        </div>
        <button onClick={variant === 'login' ? login : register}
                className="w-full bg-red-600 text-white mt-10 py-3 rounded-md hover:bg-red-700 transition">
          {variant === 'login' ? 'Login' : 'Sign up'}
        </button>
        <p className="text-neutral-500 mt-12">
          {variant === 'login' ? 'First time using Netflix?' : 'Already have an account?'}
          <span onClick={toggleVariant} className="text-white ml-1 cursor-pointer hover:underline">
            {variant === 'login' ? 'Create an account' : 'Login'}
          </span>
        </p>
      </div>
    </div>
  )
}