import { Center, Group, Button, Space } from '@mantine/core'
import { useState, useEffect } from 'react'
import { supabase } from '../utils/supabaseClient'

function Home() {
  const [session, setSession] = useState(null)
  const [user, setUser] = useState(null)

  const getSession = async () => {
    setSession(supabase.auth.session())
    console.log('session', session)
  }

  const getUser = async () => {
    const user = await supabase.auth.user()
    setUser(user)
    console.log('user', user)
  }

  useEffect(() => {
    getSession()
    supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session)
    })
  }, [])

  const loginHandler = async () => {
    const { user, session, error } = await supabase.auth.signIn(
      {
        provider: 'github',
      },
      {
        scopes: 'repo gist notifications user',
      }
    )
  }

  return (
    <Center sx={{ minHeight: '100vh' }}>
      <Group direction="column" align="center">
        <h1 style={{ textAlign: 'center' }}>Login</h1>

        <Button onClick={loginHandler}>Login With GitHub</Button>
        <Space h={50} />
        <Button onClick={getSession}>Get Session Details</Button>
        {/* {session && <p>{session}</p>} */}
        <Button onClick={getUser}>Get User Details</Button>
        {/* {user && <p>{user}</p>} */}
      </Group>
    </Center>
  )
}

export default Home
