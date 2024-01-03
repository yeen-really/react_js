import React, { useCallback, useEffect, useState } from "react";
import  FormInput from "./Input";

function Form() {
  const [password, setPassword] = useState("");
  const [isPasswordError, setPasswordError] = useState(false);
  const [PasswordError, setPassError] = useState('');

  const [email, setEmail] = useState("");
  const [isEmailError, setEmailError] = useState(false);
  const [EmailError, setMailError] = useState('');

  const handleSumbit = (e) => {
    e.preventDefault();
  };
  useEffect(() => {
    if (password.length < 6 && password.length > 1 ) {
      setPasswordError(true);
    } else {
        setPasswordError(false);

    }
  }, [password]);

  const isValidEmail = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;
  useEffect(() => {
    if (email.match(isValidEmail)) {
      setEmailError(false);
    } else {
        setEmailError(true);

    }

  }, [email]);

  const passwordHandler = useCallback((value) => setPassword(value), [])
  const emailHandler = useCallback((value) => setEmail(value), [])


  return (
    <>
      <form className="flex flex-col p-16" onSubmit={handleSumbit}>
        <FormInput name="Email" placeholder="Email" value={email} setValue={emailHandler} isError={isEmailError} Error='Некорректный Email'/>
        <FormInput name="password" placeholder="Password" value={password} setValue={passwordHandler} isError={isPasswordError} Error='Пароль должен быть минимум 6 символов'/>

        <button type="sumbit">Отправить</button>
      </form>
    </>
  );
}

export default Form;
