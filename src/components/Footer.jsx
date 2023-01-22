import React from 'react';
import {Box,Button,Heading,HStack,Input,Stack, VStack,Text} from '@chakra-ui/react';
import {AiOutlineSend} from "react-icons/ai";

const footer = () => {
  return (
    <Box bg={"blackAlpha.900"} minHeight={"40"} p="16" color={"white"}>
    <Stack direction={['column','row']}>

    <VStack alignItems={"stretch"} w={'full'} px={'4'} >
    <Heading size="md" textTransform={'uppercase'} textAlign={"center"}>
    
    Subscribe to get updates
    
    </Heading>
    <HStack >

    <Input placeholder='Enter Email Here....' border={'none'}outline={'none'}
    onFocusCapture="none"
    borderBottom={"2px solid white"}
    />
    <Button
    p={"0"}
    colorScheme={"purpose"}
    variant={'ghost'}
    borderRadius={'0 20px 20px 0'}
    

    py={'-1'}
    >
    <AiOutlineSend/>
    
    </Button>
    
    </HStack>

    
    </VStack>
    <VStack w={"full"}
    borderLeft={["none","1px solid white"]}
    >
<Heading textTransform={"uppercase"} textAlign={"center"}>
VIDEO HUB
</Heading>

<Text>All rights recieve</Text>
    </VStack>
    <VStack w={"full"}
    borderLeft={["none","1px solid white"]}
    >


    <Heading size={"md"} textTransform={"uppercase"}>Social Media</Heading>
    <Button variant={"link"} colorScheme={"white"}>
    <a target={"blcnk"}href="https://www.youtube.com/watch?v=EybyljEXf0E&ab_channel=TechSpaceCowboy">
    Youtube
    </a>
    </Button>
    <Button variant={"link"} colorScheme={"white"}>
    <a target={"black"}href="https://www.instagram.com/parag_dwn/">
    Instagram
    </a>
    </Button>

    <Button variant={"link"} colorScheme={"white"}>
    <a target={"black"}href="https://github.com/Parag-dwn">
    Github   </a>
    </Button>


    </VStack>
    </Stack>
    </Box>
  )
}

export default footer