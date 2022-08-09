import { Card, CardHeader } from "@mui/material"
import { MdPayment } from "react-icons/md"

export const CardPagamnto = () => {
    return (
        <Card
            sx={{
                height: '100%',
                cursor: 'pointer',
                width: '100%',
                position: 'relative',
                maxHeight: '80vh'
            }}
        >

            <CardHeader
                avatar={
                    <MdPayment />
                }

                title='pagamento'

            />

        </Card>
    )
}