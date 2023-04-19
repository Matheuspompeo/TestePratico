import { Button, Checkbox, Flex, FormControl, FormLabel, HStack, Heading, Stack, Input } from "@chakra-ui/react";
import React, { useState } from 'react';
import { BrowserRouter, NavLink, useNavigate } from "react-router-dom";
import Login from "../services/loginApi";
import md5 from "md5";
import moment from "moment";
//import Listagem from "../Listagem";

function LoginForm() {
    const [email, setEmail] = useState("");
    const [pwd, setPassword] = useState("");
    const [showPassword, setShowPassword] = useState(false);
    
const history = useNavigate;

function handleClick() {   
   history("/upload");
  }

    const handleSubmit = async (e) => {
      e.preventDefault();
      const obj = {
        email: email,
        pwd: pwd,
        secret: md5(`${email}-${moment().format("DD/MM/YYYY")}-admin`),
      };
      try {
        const response = await Login.login(obj);
        window.localStorage.setItem("token", response.token);
      } catch (error) {
        console.log("error: ", error);
        alert("E-mail ou senha inválidos!");
      }
      
    };

   
    return (
        <div className="LoginForm">
        <HStack w="full" h="100vh">
            <Flex w="full" h="full" alignItems="center" justifyContent="center" display={{base: 'none', md:'flex'}}>
            <BrowserRouter>
            
            <form onSubmit={handleSubmit}>
                <Stack w="full" maxW="md" spacing={4} p={6}>
                    <Heading fontSize="2xl" color="blue.500">
                        Logar na sua conta
                    </Heading>
                    <FormControl id="email">
                        <FormLabel>Email</FormLabel>
                        <Input 
                            type="string" 
                            placeholder="email" 
                            value={email} 
                            onChange={(e) => setEmail(e.target.value)}
                            />
                    </FormControl>
                    <FormControl id="senha">
                        <FormLabel>Senha</FormLabel>
                        <Input 
                            type={showPassword ? "string" : "password"} 
                            placeholder="*******" 
                            value={pwd}
                            onChange={(e) => setPassword(e.target.value)}
                            />
                        <Checkbox onChange={() => setShowPassword(!showPassword)}>
                            Mostrar Senha
                        </Checkbox>
                    </FormControl>
                    <Stack spacing={4} direction="row" align="start" justify="space-between">
                        <Checkbox colorScheme="blue">Lembre de mim</Checkbox>
                        
                    </Stack>
                    
                        <Button onClick={handleClick} type="submit" isDisabled={email === "" || pwd === ""} >
                        <NavLink to="/upload">
                           Entrar
                            </NavLink>
                        </Button>
                      
                </Stack>
                </form>
                </BrowserRouter>
            </Flex>
        </HStack>
        </div>
    );
}
export default LoginForm;