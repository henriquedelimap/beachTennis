import { Box, Stack } from "@mui/material"
import { ReactNode } from "react"

export const ContainerPadding = ({ children} : {children: ReactNode}) => {
    return (
        <Box sx={{p: { xs: 2, md: 12, lg: 12 }, pt: { xs: 4, md: 8, lg: 8 } }}>
            <Stack spacing={{ xs: 2, md: 8, lg: 8 }} >
                {children}
            </Stack>
        </Box>
    )
}