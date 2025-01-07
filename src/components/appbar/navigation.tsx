'use client';

import { MenuItem, Stack, Typography, useTheme } from '@mui/material';
import useMediaQuery from '@mui/material/useMediaQuery';
import Link from 'next/link';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { ANALYTICS, LINKEDIN_URL } from '@/lib/constants';

const RESUME_URL = process.env.NEXT_PUBLIC_RESUME_URL!;

const Navigation = () => {
    const theme = useTheme();

    const isSmall = useMediaQuery(theme.breakpoints.up('sm'));

    return (
        <Stack direction='row' width={'100%'} justifyContent='flex-end'>
            <MenuItem sx={{mr: 'auto'}}><Typography fontWeight='bold' variant="h6">Tal Sabas</Typography></MenuItem>
            {isSmall &&
                <>
                <Link data-umami-event={ANALYTICS.RESUME_CLICK} href={RESUME_URL} target='_blank' style={{ color: 'inherit', textDecoration: 'none' }}><MenuItem><Typography variant="h6">Resume</Typography></MenuItem></Link>
                <Link data-umami-event={ANALYTICS.CONTACT_CLICK} href={LINKEDIN_URL} target='_blank' style={{ color: 'inherit', textDecoration: 'none' }}><MenuItem><Typography variant="h6">Contact</Typography></MenuItem></Link>
                </>
            }
            
            <Link href={LINKEDIN_URL} target="_blank" style={{ textDecoration: 'none', color: 'inherit' }} data-umami-event={ANALYTICS.LINKED_IN_CLICK}>
                <MenuItem>
                    <LinkedInIcon fontSize='large' />
                </MenuItem>
            </Link>
        </Stack>
    )


};

export default Navigation;