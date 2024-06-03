import { Box, Button, IconButton, InputAdornment, TextField, Typography, useMediaQuery, useTheme } from "@mui/material"
import ImgLogin from "../../assets/login.jpg"
// icone:
import { Visibility } from '@mui/icons-material';
import { Link as RouterLink } from 'react-router-dom';

function LoginPage() {
    const theme = useTheme()
    // useTheme é usado para acessar os padrões de temas do material, como o breakpoint

    // lógica para uso de breakpoints: nesse exemplo, qualquer tela menor que md: 900px é considerada mobile
    const isMobile = useMediaQuery(theme.breakpoints.down("md"))
    //   breakpoints padrão material:
    //   xs (extra-small): 0px
    //   sm (small): 600px
    //   md (medium): 900px
    //   lg (large): 1200px
    //   xl (extra-large): 1536px

    return (
        // a tag box seria como uma div
        <Box
            // o sx é usado para estilização, o padrão é: nomeDaPropriedade : "valor"
            sx={{
                margin: 0,
                padding: 0,
                display: 'flex',
                flexDirection: 'row',
                flexWrap: 'nowrap',
                justifyContent: isMobile ? 'center' : 'flex-start'
            }}>
            {/* lógica para aplicar responsividade, nesse exemplo, quero que o componente de imagem só apareça em telas maiores que 900px */}
            {isMobile ? null : <Box
            >
                <img src={ImgLogin} alt="plano de fundo" />
            </Box>}

            <Box
                sx={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    padding: "6rem",
                }}>
                <Typography fontSize="24px"
                    color="#3F3F55"
                    fontWeight="bold"
                    sx={{
                        marginBottom: '32px'
                    }}
                >Faça seu login!</Typography>
                <Box>
                    <TextField
                        label="Email"
                        sx={{
                            width: '344px',
                            marginBottom: '32px'
                        }}
                    />
                </Box>
                <Box
                    sx={{
                        display: 'flex',
                        flexDirection: "column",
                        alignItens: "flex-start",
                    }}
                >
                    <TextField
                        label="Senha"

                        InputProps={{
                            endAdornment: (<InputAdornment position="end">
                                <IconButton>
                                    <Visibility />
                                </IconButton>
                            </InputAdornment>)
                        }}
                        sx={{
                            width: '344px',
                        }}
                    />
                    <Button variant="text"
                        sx={{
                            fontSize: "14px",
                            color: "#DA0175",
                            marginBottom: '40px'
                        }}
                    >
                        Esqueceu a senha?
                    </Button>
                </Box>
                <Button
                    sx={{
                        backgroundColor: "#DA0175",
                        color: "#F8F8F9",
                        width: '160px',
                        marginBottom: '20px'
                    }}
                >Entrar</Button>
                <Box
                    sx={{
                        display: "flex",
                        flexDirection: "row",
                        alignItems: "center",
                        marginBottom: "30px"
                    }}
                >
                    <Typography fontSize="14px" color="#3F3F55">Ainda não possui uma conta?</Typography>
                    <Button variant="text"
                        sx={{
                            fontSize: "14px",
                            color: "#DA0175"
                        }}
                    >Cadastre-se</Button>
                </Box>
                <Button
                    variant="outlined"
                    LinkComponent={RouterLink}
                    to="/"
                >Voltar para Página Inicial</Button>
            </Box>
        </Box>
    )
}

export default LoginPage
