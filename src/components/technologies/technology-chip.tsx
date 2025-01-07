import { Chip } from "@mui/material";
import { FC } from "react";

interface Props {
    technology: string;
}

const TechnologyChip: FC<Props> = ({ technology }) => {
    return (
        <Chip variant="outlined" label={technology} />
    )
}

export default TechnologyChip;