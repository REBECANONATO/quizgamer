import React, { useState } from 'react';
import { useRouter } from 'next/router';
import styled from 'styled-components';
import Button from '../Button';
import Input from '../Input';

export const Form = styled.form`
  
`;

function NameInput() {
  const router = useRouter();
  const [name, setName] = useState('');

  function handleNameInput(e) {
    setName(e.target.value);
  }

  function submit(e) {
    e.preventDefault();
    router.push(`/quiz?name=${name}`);
  }

  return (
    <Form onSubmit={submit}>
      <Input name="nomeDoUsuario" placeholder="Qual o seu nome?" type="text" onChange={handleNameInput}/>
      <Button type="submit" disabled={name.length === 0} >
        Cheque
      </Button>
    </Form>
  );
}

export default NameInput;