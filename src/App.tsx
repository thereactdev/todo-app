import { Box, ChakraProvider} from '@chakra-ui/react'

import { TodoProvider } from './context/TodoContext'
import { TodoList } from './components/TodoList'

export const App = () => (
  <ChakraProvider>
    <TodoProvider>
      <Box maxW={'1340px'} minH={'100vh'} margin={'auto'} padding={'10px 20px'}>
        <TodoList />
      </Box>
    </TodoProvider>
  </ChakraProvider>
)

