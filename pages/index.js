import { useState, useEffect } from 'react'
import Login from '../components/Login'
import { supabase } from '../utils/supabaseClient'

function Home() {
  const [session, setSession] = useState(null)

  useEffect(() => {
    setSession(supabase.auth.session())

    supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session)
    })
  }, [])

  console.log(session)
  return <Login />
}

export default Home
