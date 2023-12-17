// components/LoginFormItems.tsx
import ErrorMessage from '@components/errorMessage';
import { Input } from '@components/input';
import {  FormikProps } from 'formik';
import React from 'react';
import { LoginFormValues } from 'src/types/login';

interface LoginFormItemsProps {
  formik: FormikProps<LoginFormValues>;
}

const LoginFormItems: React.FC<LoginFormItemsProps> = ({ formik }) => {
  return (
    <div>
      <Input
        name="email"
        label="Email"
        value={formik.values.email}
        onChange={formik.handleChange}
      />
      <ErrorMessage error={formik.errors.email} />

      <Input
        name="password"
        label="Password"
        value={formik.values.password}
        onChange={formik.handleChange}
        type="password"
      />
      <ErrorMessage error={formik.errors.password} />
    </div>
  );
};

export default LoginFormItems;
