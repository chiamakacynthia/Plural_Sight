import React from 'react'
import { Acct__button, Button, Button__cool, Button__Image, Container, Create__acct, Footer, Forget__Password, Image, Input, Input1, Input2, Input__Holder, Left, Logo, Sign, Text__Image, Wall } from './SignIn-css'
import {Link} from "react-router-dom"
const SignIn = () => {
    return (
        <Container id="signin">
           <Sign>
             <Logo src = "images/PS_logo.png"/>
             <Left>
                 <Input__Holder>
                  <Input>
                   <Input1>
                    <div>Enter or Username</div>
                    <input/>
                   </Input1>
                   <Input2>
                    <div>Enter or Username</div>
                    <input/>
                   </Input2>
                  </Input>
                  <Button>Sign in </Button>
                 </Input__Holder>
                 <Forget__Password>
                     <div>Forget password</div>
                     <div>Sign in with company or school</div>
                 </Forget__Password>
                 <Create__acct>
                     <Acct__button>
                         Create an account
                     </Acct__button>
                     <Footer>
                     Copyright © 2004 - 2021 Pluralsight LLC. All rights reserved.
                     <div>Terms of Use | Privacy Policy</div>
                     </Footer>
                 </Create__acct>
             </Left>
           </Sign>
           <Wall>
             <Image>
               <Text__Image src ="login.png" />
               <Button__Image src = "build.png" />
               <Button__cool>Try for free</Button__cool>
             </Image>     
           </Wall>
        </Container>
    )
}

export default SignIn
