import { Fade } from "@mui/material";
import Image from "next/image";
import { FC } from "react";

const HeroImage: FC<any> = () => {
    return <Fade in={true} timeout={1500}>
            <Image src='/tal.jpeg' alt='Tal' width={250} height={250} style={{ borderRadius: '25px' }} />
    </Fade>
}

export default HeroImage;