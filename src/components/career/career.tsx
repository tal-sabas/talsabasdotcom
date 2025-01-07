'use client';

import { Box, Fade, Stack, Typography } from "@mui/material";
import { useInView } from "react-intersection-observer";
import CertificationBadge from "../certification/certification-badge";

export default function Career() {

    const { ref, inView, entry } = useInView({
        threshold: .5,
        triggerOnce: true
    });

    return (
        <>
        <Fade in={inView} timeout={1500}>
            <Typography variant='h4'
                    fontWeight='bold' gutterBottom textAlign={{xs: 'center', md: 'left'}}
                    >
                        My Career So Far
            </Typography>
        </Fade>
        
        <Stack ref={ref} direction={{ xs: 'column', md: 'row' }} gap={8} textAlign={{ xs: 'center', md: 'left' }}>
            <Fade in={inView} timeout={1500}>
                <Box flexBasis='100%'>
                    <Typography variant="body1">I started my career working at an enterprise e-commerce
                        firm, getting my hands dirty with web development and learning the ins and outs of the software development lifecycle.
                        On the continual quest for learning and growth, I later transitioned into a role at a small startup where I was able to wear many hats and fully
                        take a product from idea to reality. Through a successful acquisition, I worked my way up to Director of Enterprise
                        Architecture at Constellation Digital Partners, where I was able to lead a team of developers and architects in building
                        scalable and efficient solutions on the AWS cloud.
                    </Typography>
                </Box>
            </Fade>
            <Fade in={inView} timeout={1000} style={{transitionDelay: '500ms'}}>
                <Box flexBasis='100%' maxWidth='fit-content' margin='0 auto'>
                    <CertificationBadge />
                </Box>
            </Fade>
        </Stack>
        </>
    );
};