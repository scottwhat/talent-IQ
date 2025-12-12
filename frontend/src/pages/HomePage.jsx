import { SignedIn, SignedOut, SignInButton, SignOutButton } from '@clerk/clerk-react'
import React from 'react'

import { toast } from 'react-hot-toast'
import axiosInstance from '../lib/axios'

function HomePage() {
  await axiosInstance.get("/session/123")1
  return (
    <>
    <button className="btn btn-secondary" onClick={() => toast.success("tits")}>Click me</button>
    <SignedOut>
      <SignInButton><button>Login</button></SignInButton>
    </SignedOut>

    <SignedIn>
      <SignOutButton />
    </SignedIn>
        </>

  )
  }

export default HomePage