// components/ErrorMessage.tsx
import React from 'react';

interface ErrorMessageProps {
  error?: string; // Make the error prop optional
}

const ErrorMessage: React.FC<ErrorMessageProps> = ({ error }) => {
  return error ? <div style={{ color: 'red' }}>{error}</div> : null;
};

export default ErrorMessage;
