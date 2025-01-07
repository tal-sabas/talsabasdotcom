import { Box, Typography, AppBar, Toolbar, Stack, Container, Fade, Chip } from "@mui/material";
import HeroImage from "@/components/about/hero-image";
import Navigation from "@/components/appbar/navigation";
import Technologies from "@/components/technologies/technologies";
import Available from "@/components/available";
import Career from "@/components/career/career";
import Simplicity from "@/components/simplicity";

export default function Home() {
    return (
        <>
            <AppBar position="sticky">
                <Toolbar>
                    <Navigation />
                </Toolbar>
            </AppBar>
            <Container sx={{pb: 3}}>
                
                <Stack mb={5} mt={2} direction={{xs: 'column', md: 'row'}} spacing={4} width={'100%'} justifyContent='center' alignItems={{xs: 'center', md: 'left'}}>
                    <Box>
                        <HeroImage />
                    </Box>

                    <Fade style={{transitionDelay: '500ms'}} in={true} timeout={1500}>
                    <Box id="about" textAlign={{xs: 'center', md: 'left'}}>
                        <Stack direction={{sm: "row"}} justifyContent={{xs: 'center', md: 'flex-start'}}
                          alignItems={{sm: 'baseline'}} mb={{xs: 3, md: 0}} gap={{sm: 3}}>
                            <Typography gutterBottom variant="h4"
                             sx={{display: 'inline-flex', md: {alignItems: 'baseline'}}} justifyContent='center'>
                                Hi, I'm <Box component='span'>&nbsp;Tal</Box>
                            </Typography>
                            <Chip avatar={<Available />} color="secondary" label="Available for Projects" variant="outlined" />
                        </Stack>
        
                        <Typography variant="body1">I'm an AWS-certified Solutions Architect Full Stack Developer and Cloud Engineer with a passion for building
                            scalable and efficient solutions. I specialize in building serverless applications, optimizing cloud
                            infrastructure, and creating data & analytics solutions to uncover business insights.
                        </Typography>
                    </Box>
                    </Fade>
                </Stack>
                
                <Career />
                <Technologies />
                <Simplicity />
            </Container>
        </>
    )

}

// https://devicon.dev/