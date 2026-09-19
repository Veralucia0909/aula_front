import axios from "axios"
import { useNavigate } from "react-router"
import { useState, useEffect } from 'react';
import type { User } from "../../types/user"
import { toast } from "react-toastify"
import Modal from "../ui/Modal";
import RegisterUser from "../RegisterUser";

const LoginForm = ()=>{

    const [email,setEmail] = useState("")
    const [password,setPassword] = useState<string>("")

    const [isModalOpen, setIsModalOpen]= useState<boolean>(false)

    const navigate = useNavigate()

    // useEffect(()=>{
    //     if(localStorage.getItem("email")){
    //         navigate("/dashboard")
    //     }
    // },[navigate])

    const handleLogin = async(
        Event: React.FormEvent<HTMLFormElement>
    )=>{
        Event.preventDefault()

        try{

            const response = await axios.get<User[]>(
            "http://localhost:3000/users",
            {
               params:{
                email,
                password

            } 
            }
        )

          if(response.data.length === 0){
            toast.error("Usuário não encontrado. Verifique o email e senha.",
                {
                    autoClose: 3000,
                    hideProgressBar: true

                }
            )
            return
          }
            
          localStorage.setItem("email", email)
          toast.success("Login realizado com sucesso!",{
            autoClose: 2000
          })
           
          setTimeout(()=>{
            navigate("/dashboard")  

          }, 2000)




        } catch(error){
            console.error("Erro ao realizar login:", error)
            toast.error("Erro ao realizar login. Tente novamente.", {
                autoClose: 3000,
                hideProgressBar: true
            })

        }

    }

    return(
        <div className="max-w-md mx-auto mt-10 bg-white p-8 rounded-xl shadow-lg">
            <h2 className="text-2xl font-bold text-center mb-6">
                Login
            </h2>

            <form className="space-y-4">
                <fieldset>
                    <label
                        htmlFor="email"
                        className="block text-sm font-medium mb-1"
                    >
                        Email:
                    </label>

                    <input
                        type="email"
                        id="email"
                        value={email}
                        onChange={(event)=>setEmail(event.target.value)}
                        required
                        className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                </fieldset>


                <fieldset>
                    <label
                        htmlFor="password"
                        className="block text-sm font-medium mb-1"
                    >
                        Senha:
                    </label>

                    <input
                        type="password"
                        id="password"
                        value={password}
                        minLength={8}
                        onChange={(e)=>setPassword(e.target.value)}
                        required
                        
                        className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                </fieldset>

                <button
                    type="submit"
                    className="w-full bg-cyan-700 text-white p-2 rounded-lg hover:bg-cyan-800 transition-colors cursor-pointer"
                >
                    Entrar
                </button>

            </form>

               <div className="flex justify-between mt-4">
                 <button
                 type="button"
                 onClick={()=> toast.info("Funcionalidade em desenvolvimento")}
                    className="text-sm text-blue-500 hover:underline cursor-pointer"

                 >
                    Esqueceu sua senha?

                 </button>


                  <button
                 type="button"
                 onClick={()=> setIsModalOpen(true)}
                className="text-sm text-blue-500 hover:underline cursor-pointer"

                 >
                    Criar conta

                 </button>
                    
               </div>
            {/*Modal */}
            <Modal
            isOpen={isModalOpen}
            onClose={()=> setIsModalOpen(false)}

            
            >
              <RegisterUser/>

            </Modal>

        </div>
    )
}

export default LoginForm