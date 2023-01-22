import React from 'react'
import {Box,Container,Heading,Image,Stack,Text} from '@chakra-ui/react';
import {Carousel} from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import img1 from "../assets/1.webp";
import img2 from "../assets/2.jpg";
import img3 from "../assets/3.jpg";
import img4 from "../assets/4.jpg";
import img5 from "../assets/5.png";

const headingOptions={
    pos:"absolute",
    left:"50%",
    top:"50%",
    transform:"translate(-50%,-50%)",
    textTransform:"uppercase",
    p:"4",
    size:"2xl",
};


const Home = () => {
  return (
    <Box >
    <MyCarousel/>

    <Container maxW={'container.xl'} maxH={"100vh"} p='16'>
    <Heading textTransform={"uppercase"} py="2" w={"fit-content"} borderBottom={'2px solid'} margin={'auto'}>
    Services
    </Heading>
    <Stack h={"full"}
    p={"4"}
    alignItems={"center"}
    direction={["column","row"]}
    >
    
    <Image src={img5}  h={["40","400"]} filter={'hue-rotate(-130deg)'}/>


    <Text letterSpacing={"widest"} lineHeight={"190%"} p={["4","16"]} textAlign={"center"}>
    technology for delivering video content, such as movies and television shows, directly to individual customers for immediate viewing. In a cable television VOD system, video content is stored on a centralized server in the form of compressed digital files.
    New development efforts focused on bridging the gap between Internet and television sets, allowing online rental services to compete with cable providers in bringing content to customers’ television screens. Subscription services such as Netflix and Amazon 
    Prime allowed users to stream video for a monthly fee. The video site YouTube also hosted many videos that could be streamed on demand. 
    </Text>
    </Stack>    
    
    </Container>
    
    
    </Box>
  );
};
const MyCarousel= () => (
    <Carousel 
    autoPlay infiniteLoop 
    interval={1000} showArrows={false} 
    showThumbs={false} showStatus={false}
    >
<Box w='full'
h={'100vh'}>
<Image src={img1} h="full" w={'full'} objectFit={'cover'}/>
<Heading bgColor={"blackAlpha.600"} color={"white"} {...headingOptions} borderRadius='5%' >
Watch the Future
</Heading>

</Box>

<Box w='full'
h={'100vh'}>
<Image src={img2} h="full" w={'full'} objectFit={'cover'}/>
<Heading bgColor={"whiteAlpha.800"} color="black" {...headingOptions} borderRadius='5%'>
Future is Gaming
</Heading>

</Box>

<Box w='full'
h={'100vh'}>
<Image src={img3} h="full" w={'full'} objectFit={'cover'}/>
<Heading bgColor={"whiteAlpha.800"} color="black" {...headingOptions} borderRadius='5%'>
Gaming on Console
</Heading>

</Box>
<Box w='full'
h={'100vh'}>
<Image src={img4} h="full" w={'full'} objectFit={'cover'}/>
<Heading bgColor={"whiteAlpha.800"} color="black" {...headingOptions} borderRadius='5%'>
Gaming Club
</Heading>

</Box>





    </Carousel>
);



export default Home
