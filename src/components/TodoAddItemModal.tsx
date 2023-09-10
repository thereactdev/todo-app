import { useCallback, useState } from 'react'

import { 
    Box,
    Button,
    Text,
    Input,
    Modal,
    ModalBody,
    ModalCloseButton,
    ModalContent,
    ModalOverlay,
    useDisclosure,
    ModalHeader,
    VStack,
} from '@chakra-ui/react'

import { useTodoContext } from '../context/TodoContext'

export const TodoAddItemButton = () => {
    const { addTodo } = useTodoContext()
    const [todoText, setTodoText] = useState<string>('')
    const { isOpen, onOpen, onClose } = useDisclosure()

    const onAddItem = useCallback(() => {
        addTodo(todoText)
        onClose()
        setTodoText('')
    }, [addTodo, onClose, todoText, setTodoText])

    const onChangeTodoText = useCallback((evt: React.ChangeEvent<HTMLInputElement>) => {
        setTodoText(evt.target.value)
    }, [setTodoText])

    return (
        <Box>
            <Button onClick={onOpen}>Add Item</Button>

            <Modal isCentered isOpen={isOpen} onClose={onClose}>
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader>
                        <Text fontSize='lg' textAlign='center'>Add Todo Item</Text>
                        <ModalCloseButton />
                    </ModalHeader>
                    <ModalBody>
                        <VStack padding='10px'>
                            <Input autoFocus onChange={onChangeTodoText} value={todoText} placeholder='Enter todo'/>
                            <Button width='100%' marginTop='5px' isDisabled={!todoText.length} onClick={onAddItem}>Submit</Button>
                        </VStack>
                    </ModalBody>
                </ModalContent>
            </Modal>
        </Box>
    )
}
