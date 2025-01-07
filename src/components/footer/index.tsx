import { ANALYTICS, GITHUB_URL } from "@/lib/constants";
import { Box, Divider, Stack, Typography } from "@mui/material";
import Image from "next/image";
import Link from "next/link";

export default function Footer() {
    return (
        <Box>
            <Divider sx={{mb: 2}} />
            <Stack justifyContent='space-between' direction="row" paddingLeft={5} paddingRight={5} paddingBottom={3} alignItems='baseline'>
                <Box>
                    <Link href={GITHUB_URL} target="_blank" data-umami-event={ANALYTICS.GITHUB_CLICK}>
                        <Image src='/github-white.png' alt="github" height={30} width={30}/>
                    </Link>
                    <Typography variant="body2">© 2025 Tal Sabas. All rights reserved.</Typography>
                </Box>
            </Stack>
        </Box>
    );
}