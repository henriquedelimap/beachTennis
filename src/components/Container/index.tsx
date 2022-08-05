import { Box, Stack } from "@mui/material"
import { ReactNode } from "react"

export const ContainerPadding = ({ children} : {children: ReactNode}) => {
    return (
        <Box sx={{ p: { xs: 4, md: 4, lg: 8 }, pt: { xs: 4, md: 4, lg: 4 } }}>
            <Stack spacing={{ xs: 2, md: 4, lg: 4 }} >
                {children}
            </Stack>
        </Box>
    )
}