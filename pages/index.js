import { useRef } from 'react';
export default function Home() {
  const firstNameRef = useRef();
  const lastNameRef = useRef();
  const emailRef = useRef();
  const passwordRef = useRef();
  const confirmPasswordRef = useRef();

  const signUp = async (event) => {
    event.preventDefault();
    const user = {
      firstName: firstNameRef.current.value,
      lastName: lastNameRef.current.value,
      email: emailRef.current.value,
      password: passwordRef.current.value,
      confirmPassword: confirmPasswordRef.current.value,
    };
    console.log(user);

    await fetch('/api/signup', {
      method: 'POST',
      body: JSON.stringify(user),
      headers: {
        'Content-Type': 'application/json',
      },
    });
  };

  return (
    <section>
      <h1>Sign Up</h1>
      <form onSubmit={signUp}>
        <div>
          <label htmlFor="firstName">First name</label>
          <input type="text" id="firstName" ref={firstNameRef} />
        </div>

        <div>
          <label htmlFor="lastName">Last name</label>
          <input type="text" id="lastName" ref={lastNameRef} />
        </div>

        <div>
          <label htmlFor="email">Email</label>
          <input type="email" id="email" ref={emailRef} />
        </div>

        <div>
          <label htmlFor="password">Password</label>
          <input type="password" id="password" ref={passwordRef} />
        </div>

        <div>
          <label htmlFor="confirmPassword">Confirm Password</label>
          <input
            type="password"
            id="confirmPassword"
            ref={confirmPasswordRef}
          />
        </div>

        <button>Signup</button>
      </form>
    </section>
  );
}
