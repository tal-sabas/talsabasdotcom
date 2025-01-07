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
                {/* <Toolbar /> */}
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

                {/* What if i had a checkbox list of accomplishments I want to showcase?
                Thousands of Lines of Production Code Written
                Startup?
                $25K monthly in Infrastructure Storage Cost Savings
                5+ application and data migrations into AWS from either on-premise or other cloud providers
                2+ BI & Analytics programs built from the ground up
                Industries worked in: E-commerce, Financial Services, Healthcare, and more */}

                {/* <Box maxWidth='100%' mt='3rem' mb='3rem' width='100%' >
                    <TechCarousel slides={stacks} />
                </Box> */}

                <Career />
                <Technologies />
                <Simplicity />

                {/* As a closer, could talk about shooting for the stars or taking your business to the next level.
                Could use this animation: https://codepen.io/ericdjohnson/pen/GRpOgVO */}

                {/* <Box id="projects" mt={20}>
                    <Typography>I could put a stat/KPI of how many AWS Lambas I've created over time? But what would the axis be...</Typography>
                    <Typography>Upwork logo?</Typography>
                    <Typography>Put in my relevant work experience. But not the source code for them. Whatever can be
                        open source, (like this portfolio) can have a link to it in my Github.
                    </Typography>
                    <Typography>Could also take a different approach. Could have them scroll down and talk high level about
                        the technologies I've used. And not segregate them into projects per say. Could have the tech logos fade in the
                        view as they scroll, and then show screenshots of the projects with descriptions. Like case studies. Everything about
                        the project would fade in as you scroll through it.
                    </Typography>

                    <ProjectList projects={getProjects()} />
                </Box> */}
            </Container>
        </>
    )

}

// https://devicon.dev/