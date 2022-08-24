import { Container } from "@mui/system"
import Login from "../../components/auth/Login"
import Signup from "../../components/auth/Signup"
import { dFlex } from "../../theme/commonStyles"

const Auth = ({admin, login}) => {
  return (
    <Container maxWidth={"xl"} sx={{
      width:"100%",
      height:"100%",
      overflowY:{
        xs:"scroll",
        md:"hidden"
      },
      pb:"0px",
      pt:{
        xs:1,
        md:"0px"
      },
      px:{
        xs:1,
        sm:2,
        md:4
      },
      // border:"2px solid green",
      ...dFlex,

    }}>
      {login?
        <Login admin={admin}/>
        :
        <Signup admin={admin}/>
      }
    </Container>
  )
}

export default Auth