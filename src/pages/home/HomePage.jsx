import { Button } from "@mui/material"
import { Link as RouterLink } from 'react-router-dom';

function HomePage() {
    return (
        <Button
            //o LinkComponent recebe o RouterLink do react-router-dom e o to indica a rota que vc quer 
            LinkComponent={RouterLink}
            to="/login"
            sx={{
                backgroundColor: "#DA0175",
                color: "#F8F8F9",
                width: '160px',
                marginBottom: '20px'
            }}
        >Login</Button>
    )
}

export default HomePage
