import './Salute.scss';
import {styled} from '@mui/material/styles';

import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Flags from 'country-flag-icons/react/3x2'

const Item = styled(Paper)(({theme}) => ({
    ...theme.typography.body1, padding: theme.spacing(1), textAlign: 'center', color: theme.palette.text.secondary,
}));

function Salute() {
    return (<section className={'salute-container'}>
        <Box sx={{width: '100%'}}>
            <Grid container rowSpacing={1} columnSpacing={{xs: 1, sm: 2, md: 2, lg: 2}}>
                <Grid item xs={6}>
                    <Item>
                        <Flags.TR className={'flag-countries'} title="Turkish"/>
                    </Item>
                </Grid>
                <Grid item xs={6}>
                    <Item>
                        <Flags.TN className={'flag-countries'} title="Tunisian"/></Item>
                </Grid>
                <Grid item xs={6}>
                    <Item>Merhaba</Item>
                </Grid>
                <Grid item xs={6}>
                    <Item>Asslema</Item>
                </Grid>
                <Grid item xs={6}>
                    <Item>Güle güle</Item>
                </Grid>
                <Grid item xs={6}>
                    <Item>Bisslema</Item>
                </Grid>
                <Grid item xs={6}>
                    <Item>Evet</Item>
                </Grid>
                <Grid item xs={6}>
                    <Item>Eyy</Item>
                </Grid>
                <Grid item xs={6}>
                    <Item>Hayir</Item>
                </Grid>
                <Grid item xs={6}>
                    <Item>Laa</Item>
                </Grid>
                <Grid item xs={6}>
                    <Item>Nasilsin ?</Item>
                </Grid>
                <Grid item xs={6}>
                    <Item>Winek labess ?</Item>
                </Grid>
                <Grid item xs={6}>
                    <Item>Iyiyim</Item>
                </Grid>
                <Grid item xs={6}>
                    <Item>Labess</Item>
                </Grid>
                <Grid item xs={6}>
                    <Item>Lütfen</Item>
                </Grid>
                <Grid item xs={6}>
                    <Item>Brabbi</Item>
                </Grid>
                <Grid item xs={6}>
                    <Item>hoş geldin</Item>
                </Grid>
                <Grid item xs={6}>
                    <Item>Marhbé</Item>
                </Grid>
                <Grid item xs={6}>
                    <Item>Günaydın</Item>
                </Grid>
                <Grid item xs={6}>
                    <Item>Sbah elkhir</Item>
                </Grid>
                <Grid item xs={6}>
                    <Item>Afiyet olsun</Item>
                </Grid>
                <Grid item xs={6}>
                    <Item>Chehya Tayyba</Item>
                </Grid>
                <Grid item xs={6}>
                    <Item>tanıştığımıza sevindim</Item>
                </Grid>
                <Grid item xs={6}>
                    <Item>Netcharfo</Item>
                </Grid>
                <Grid item xs={6}>
                    <Item>Teşekkürler</Item>
                </Grid>
                <Grid item xs={6}>
                    <Item>Ayyshek</Item>
                </Grid>
                <Grid item xs={6}>
                    <Item>Affedersin</Item>
                </Grid>
                <Grid item xs={6}>
                    <Item>Samahni</Item>
                </Grid>
                <Grid item xs={6}>
                    <Item>Anlamıyorum</Item>
                </Grid>
                <Grid item xs={6}>
                    <Item>Mafhmetch</Item>
                </Grid>
                <Grid className={'bottom-space'} item xs={6}>
                    <Item>tekrar edebilir misin?</Item>
                </Grid>
                <Grid className={'bottom-space'} item xs={6}>
                    <Item>Tnajjem taawed?</Item>
                </Grid>
            </Grid>
        </Box>
    </section>);
}

export default Salute;