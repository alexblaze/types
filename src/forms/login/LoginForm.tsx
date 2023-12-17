"use client"
import React from 'react'
import LoginFormItems from './LoginFormItems'
import { Button } from '@components/button'
import { useLoginForm } from '../hooks/useLoginForm'

const LoginForm = () => {
    const { formik} = useLoginForm();
  return (
    <form onSubmit={formik.handleSubmit}>
        <LoginFormItems formik={formik}/>
        <Button type='submit'>Submit</Button>
    </form>
  )
}

export default LoginForm