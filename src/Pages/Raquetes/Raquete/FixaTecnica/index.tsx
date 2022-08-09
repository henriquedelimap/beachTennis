import { Accordion, AccordionDetails, AccordionSummary, Stack, Typography } from "@mui/material"
import { ContainerPadding } from "../../../../components/Container"
import { SyntheticEvent, useState } from "react"
import { MdMoreHoriz } from "react-icons/md"

export const FixaTecnica = () => {
    const [expanded, setExpanded] = useState<string | false>(false)
    const handleChange = (panel: string) => (e: SyntheticEvent, isExpanded: boolean) => {
        setExpanded(isExpanded ? panel : false)
    }

    return ( 
        <Stack sx={{p: .5}}>
        <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
        <AccordionSummary
          expandIcon={<MdMoreHoriz />}
          aria-controls="panel1bh-content"
          id="panel1bh-header"
          >
          <Typography sx={{ width: '33%', flexShrink: 0 }}>
            ...
          </Typography>
          <Typography sx={{ color: 'text.secondary' }}>....</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Nulla facilisi. Phasellus sollicitudin nulla et quam mattis feugiat.
            Aliquam eget maximus est, id dignissim quam.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
        <AccordionSummary
          expandIcon={<MdMoreHoriz />}
          aria-controls="panel2bh-content"
          id="panel2bh-header"
          >
          <Typography sx={{ width: '33%', flexShrink: 0 }}>..........</Typography>
          <Typography sx={{ color: 'text.secondary' }}>
            .....
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Donec placerat, lectus sed mattis semper, neque lectus feugiat lectus,
            varius pulvinar diam eros in elit. Pellentesque convallis laoreet
            laoreet.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
        <AccordionSummary
          expandIcon={<MdMoreHoriz />}
          aria-controls="panel3bh-content"
          id="panel3bh-header"
          >
          <Typography sx={{ width: '33%', flexShrink: 0 }}>
            ......
          </Typography>
          <Typography sx={{ color: 'text.secondary' }}>
            .......
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Nunc vitae orci ultricies, auctor nunc in, volutpat nisl. Integer sit
            amet egestas eros, vitae egestas augue. Duis vel est augue.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel4'} onChange={handleChange('panel4')}>
        <AccordionSummary
          expandIcon={<MdMoreHoriz />}
          aria-controls="panel4bh-content"
          id="panel4bh-header"
          >
          <Typography sx={{ width: '33%', flexShrink: 0 }}>...</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Nunc vitae orci ultricies, auctor nunc in, volutpat nisl. Integer sit
            amet egestas eros, vitae egestas augue. Duis vel est augue.
          </Typography>
        </AccordionDetails>
      </Accordion>
            </Stack>
    )
}