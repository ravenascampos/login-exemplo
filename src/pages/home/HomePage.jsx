import { AppBar, Button, Container, Toolbar } from "@mui/material"
import { Link as RouterLink } from 'react-router-dom';

function HomePage() {
    return (
        <>
            <AppBar            >
                <Container maxWidth="xl">
                    <Toolbar>
                        <Button
                            LinkComponent={RouterLink}
                            to="/login"
                            variant="text" color="inherit"
                        >Login</Button>
                    </Toolbar>
                </Container>
            </AppBar>


            <Button
                //o LinkComponent recebe o RouterLink do react-router-dom e o to indica a rota que vc quer 
                LinkComponent={RouterLink}
                to="/login"
                sx={{
                    backgroundColor: "#DA0175",
                    color: "#F8F8F9",
                    width: '160px',
                    marginBottom: '20px',
                    marginTop: '5rem'
                }}
            >Login</Button>
        </>
    )
}

export default HomePage
