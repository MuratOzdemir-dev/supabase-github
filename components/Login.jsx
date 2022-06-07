import { Button, Center, Stack } from '@mantine/core'

const Login = ({ loginHandler }) => {
  return (
    <Center sx={{ minHeight: '100vh' }}>
      <Stack>
        <Center>
          <h1>Login</h1>
        </Center>
        <Button onClick={loginHandler}>Login With GitHub</Button>
      </Stack>
    </Center>
  )
}

export default Login
