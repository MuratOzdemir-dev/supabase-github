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

  const loginHandler = async () => {
    const { user, session, error } = await supabase.auth.signIn({
      provider: 'github',
    })
    console.log(user, session, error)
  }

  return <Login loginHandler={loginHandler} />
}

export default Home
