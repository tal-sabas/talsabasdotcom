'use client';

import useEmblaCarousel from 'embla-carousel-react';
import AutoScroll from 'embla-carousel-auto-scroll';
import './techcarousel.css';
import {FC } from 'react';
import Image from 'next/image';
import { Fade } from '@mui/material';
import { useInView } from 'react-intersection-observer';

interface Props {
    slides: Array<string>;
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