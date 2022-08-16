import { Card, CardContent, CardHeader, CardMedia, Grid } from "@mui/material"
import { logoPix } from "../../../../../assets/img"
import { MdPayment } from "react-icons/md"

export const CardPagamnto = () => {
    const formasDePagamentos = [
        {
            id: 1,
            label: 'pix',
            img: logoPix
        },
        {
            id: 1,
            label: 'parcelamento 12x',
            img: ''
        },
        {
            id: 1,
            label: 'pix',
            img: logoPix
        }
    ]
    return (
        <Card
            sx={{
                cursor: 'pointer',
                width: '100%',
                position: 'relative',
                height: '120vh',
            }}
        >

            <CardHeader
                avatar={
                    <MdPayment />
                }
                title='pagamento'
            />

            <CardContent>

                <Grid container columnSpacing={2}>
                    {
                        formasDePagamentos.map(formaDePagamento => (

                            <Grid item  xs={4}>
                                <Card sx={{
                                    cursor: 'pointer',
                                    width: '100%',
                                    position: 'relative',
                                    height: '12rem',
                                }}
                                >
                                    <CardHeader
                                        title={formaDePagamento.label}/>
                                    
                                    <CardMedia
                                        component='img'
                                        sx={{objectFit: 'contain', height: '4rem', width: '100%', display: formaDePagamento.img === '' ? 'none' : 'flex'}}
                                        image={formaDePagamento.img}
                                    >

                                    </CardMedia>
                                </Card>
                            </Grid>
                        ))
                    }
                </Grid>
            </CardContent>
        </Card >
    )
}