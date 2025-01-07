'use client';

import { Box, Grow } from "@mui/material";
import TechnologyChip from "./technology-chip";
import { useInView } from "react-intersection-observer";
import TechCarousel from "../TechCarousel";
import { getTechStacks } from "@/lib/tech-stack-assets";

const techs = [
    'AWS',
    'Serverless',
    'Data Warehousing',
    'Web Development',
    'Data Pipelines',
    'Observability',
    'Cloud DevOps',
    'Containers',
    'Microservices',
    'ReactJs',
    'NodeJs',
    'Python',
    'AI/ML',
    'BI Analytics',
    'ETL',
    'RESTful APIs',
    'Software Development',
    'Cloud Modernization'
];

const stacks = getTechStacks();

const Technologies = () => {
    const { ref, inView, entry } = useInView({
        threshold: 0.5
    });

    return (
        <>
            <Box ref={ref} display='flex' gap='.25rem' justifySelf='center' maxWidth={{ md: '75%' }} flexWrap='wrap' mt={8} mb={6}>
                {techs.map((tech, index) =>
                    <Grow in={inView} style={{ transformOrigin: '0 0 0' }} timeout={index * 250} key={index}>
                        <div key={index}>
                            <TechnologyChip key={index} technology={tech} />
                        </div>
                    </Grow>
                )}
            </Box>
            <Box maxWidth={{ md: '75%' }} mt='5rem' mb='5rem' width='100%' margin='0 auto'>
                <TechCarousel slides={stacks} />
            </Box>
        </>
    )
}

export default Technologies