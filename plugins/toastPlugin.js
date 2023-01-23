import { useToast } from '@chakra-ui/vue'
const toast = useToast()
export default ({ app }, inject) => {
  inject('toaster', (data) =>
    toast({
      title: data.title,
      description: data.description,
      status: data.status,
      duration: data.duration ? data.duration : 3000,
      isClosable: data.isClosable ? data.duration : true,
      position: data.position ? data.duration : 'bottom-right',
    })
  )
}
