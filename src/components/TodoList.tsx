import { useTodoContext } from '../context/TodoContext';
import { VStack, HStack, Heading, OrderedList, ListItem } from '@chakra-ui/react';

import { TodoItem } from './TodoItem';
import { TodoAddItemButton } from './TodoAddItemModal';

export const TodoList = () => {
  const { todos } = useTodoContext();

  return (
    <VStack>
        <HStack w='100%' justifyContent='space-between'>
            <Heading>Todo List</Heading>
            <TodoAddItemButton />
        </HStack>

        <OrderedList key={todos.length}>
            {todos.map((todo) => (
                <ListItem key={todo.id}>
                    <TodoItem todo={todo} />
                </ListItem>
            ))}
        </OrderedList>
    </VStack>
  );
};
