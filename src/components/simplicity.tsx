'use client';

import { ANALYTICS, LINKEDIN_URL } from "@/lib/constants";
import { Box, Fade, Typography } from "@mui/material";
import { useInView } from "react-intersection-observer";

export default function Simplicity() {

    const { ref, inView, entry } = useInView({
        threshold: .5,
        triggerOnce: true
    });

    const handleClick = () => {
        window.open(LINKEDIN_URL, '_blank');
    }

    return (
        <Fade in={inView} ref={ref} timeout={1500}>
            <Box>
                <Typography mt={4} variant='h4' fontWeight='bold' gutterBottom textAlign={{ xs: 'center', md: 'left' }}>I Believe in Simplicity</Typography>
                <Typography>
                    Over the years I've come to realize that often times, the simplest solution is the one that works best.
                    When I problem solve, I always ask myself: "Does this solution make sense and is simple to maintain?" If the answer is no, then
                    I typically go back to the drawing board. I take this approach each time I'm presented with a new business problem to solve.
                </Typography>
                <Typography data-umami-event={ANALYTICS.CONTACT_CLICK} sx={{cursor: 'pointer'}} onClick={handleClick}
                  mt={4} variant='h4' fontWeight='bold' gutterBottom textAlign={{xs: 'center', md: 'left'}} display='inline-flex'>
                    Let's Connect!
                </Typography>
            </Box>
        </Fade>
    );

};