import { Box, Stack } from "@mui/material"
import { ReactNode } from "react"

export const ContainerPadding = ({ children} : {children: ReactNode}) => {
    return (
        <Box sx={{p: { xs: 1, md: 12, lg: 12 }, pt: { xs: 4, md: 4, lg: 4 } }}>
            <Stack spacing={{ xs: 4, md: 4, lg: 4 }} >
                {children}
            </Stack>
        </Box>
    )
}