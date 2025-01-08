import { FC } from "react";
import Script from 'next/script'
import { Box } from "@mui/material";

const CertificationBadge: FC<any> = () => {

    return (
        <Box sx={{backgroundColor: '#ededed'}} maxWidth='fit-content' margin='0 auto'>
            <div data-iframe-width="350" data-iframe-height="270"
                data-share-badge-id="d447ed11-7704-4871-a98e-9b6bb1feefce"
                data-share-badge-host="https://www.credly.com"
                >
            </div>
            <Script src="//cdn.credly.com/assets/utilities/embed.js" />
        </Box>
    )
};

export default CertificationBadge;