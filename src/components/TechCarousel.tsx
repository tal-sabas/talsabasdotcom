'use client';

import useEmblaCarousel from 'embla-carousel-react';
import AutoScroll from 'embla-carousel-auto-scroll';
import './techcarousel.css';
import {FC } from 'react';
import Image from 'next/image';
import { Fade } from '@mui/material';
import { useInView } from 'react-intersection-observer';


// TODO: Need to make this autoplay when it scrolls into view... unless it's always in view?
// This component will represent all the tech stacks and technologies I've worked with
// Need to put all the tech logos in the public directory and then pass them into this component

// TODO: Put this in a different spot...Don't put it in the middle.

interface Props {
    slides: Array<string>;
    // slides: Array<number>
}

const TechCarousel: FC<Props> = ({ slides }) => {

    const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [
        AutoScroll({ playOnInit: true })
    ]);

    const { ref, inView, entry } = useInView({
        threshold: 0.5
    });

    return (
        <Fade in={inView} timeout={1500}>
        <div className='embla' ref={ref}>
            <div className="embla__viewport" ref={emblaRef}>
                <div className="embla__container">
                    {slides.map((element, index) => (
                        <div className="embla__slide" key={index}>
                            <div className="embla__slide__number">
                                {/* <span>{index + 1}</span> */}
                                <span className='embla__slide_content'><Image src={element} alt="Tech Stack" width={75} height={50} style={{height: 'auto'}}  /></span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
        </Fade>
    );
}

export default TechCarousel;