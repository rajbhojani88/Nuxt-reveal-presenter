import { useToast } from '@chakra-ui/vue'
const toast = useToast()
export default ({ app }, inject) => {
  inject('toastPlugin', (data) => {
    toast({
      title: data.title,
      description: data.description,
      status: data.status,
      duration: data.duration | '3000',
      isClosable: data.isClosable | 'true',
      position: 'bottom-right',
    })
  })
}
