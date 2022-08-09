import { Card, CardHeader } from "@mui/material"
import { MdPayment } from "react-icons/md"

export const CardPagamnto = () => {
    return (
        <Card
            sx={{
                cursor: 'pointer',
                width: '100%',
                position: 'relative',
                height: '220vh',
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