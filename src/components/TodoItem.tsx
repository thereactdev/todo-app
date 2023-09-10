import { useCallback } from 'react'

import { Todo, useTodoContext } from '../context/TodoContext'
import { Checkbox, CloseButton, HStack } from '@chakra-ui/react'

type TodoItemProps = {
    todo: Todo
}

export const TodoItem = ({ todo }: TodoItemProps) => {
    const { deleteTodo, updateTodo } = useTodoContext()

    const onUpdate = useCallback(() => {
        updateTodo(todo.id, !todo.completed)
    }, [todo])

    const onDelete = useCallback(() => {
        deleteTodo(todo.id)
    }, [todo])

    return (
        <HStack>
            <Checkbox isChecked={todo.completed} onChange={onUpdate}>{todo.text}</Checkbox>
            <CloseButton size='sm' onClick={onDelete} />
        </HStack>
    )
}
