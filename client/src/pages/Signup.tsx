import { Input } from '../Components/Input';
import { useRef } from 'react';
import { Button } from '../Components/Button';

export function Signup() {
  const usernameRef = useRef<HTMLInputElement>(null);
  const nameRef = useRef<HTMLInputElement>(null);
  const imgUrlRef = useRef<HTMLInputElement>(null);
  return (
    <>
      <h1 className="text-3xl font-bold mb-8 text-center">Sign Up</h1>
      <form className="grid grid-cols-[auto, 1fr] gap-x-3 gap-y-5 items-center justify-items-end">
        <label htmlFor="userName">Username</label>
        <Input id="userName" pattern="\S" required ref={usernameRef} />

        <label htmlFor="name">name</label>
        <Input id="name" required ref={nameRef} />

        <label htmlFor="imageURL">imageURL</label>
        <Input id="imageURL" type="url" ref={imgUrlRef} />

        <Button disabled type="submit" className="color-span-full">
          Sign Up
        </Button>
      </form>
    </>
  );
}
