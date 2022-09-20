import "bootstrap/dist/css/bootstrap.min.css";
import "./styles.scss";
import { useEffect, useContext} from "react";
import { signInWithGoogle } from "../../services/googleAutentication";
import axios from "axios";
import UserContext from "../../redux/UserReducer";
import { useNavigate } from "react-router-dom";

function Login() {
    const navigate = useNavigate();
    const {state, dispatch} = useContext(UserContext);
    async function handleGoogleLogin() {
        try {
            const user = await signInWithGoogle();
            console.log(user);
            dispatch({type: "SET_USER", payload: user});
            axios.get("http://localhost:3003/user/?email=" + user.email).then((response) => {
                if (response.data == null) {
                    navigate("/cadastroUsuario");
                } else {
                    // navegar para a minha conta
                }
            });
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <>
            <div className="flex flex flex-col items-center justify-center mt-4">
                <main className="flex flex-col items-center justify-center w-full flex-1 px-20 text-center">
                    <div className="bg-white rounded-2xl shadow-2xl flex w-full max-w-4xl ">
                        <div className="w-3/5 p-5">
                            <div className="text-left font-bold">
                                <span className="text-blue-500">Encontree </span>
                            </div>
                            <div className="py-10">
                                <h2 className="text-3xl font-bold text-blue-500 mb-2">Logar com uma conta</h2>
                                <div className="border-2 w-10 border-blue-500 inline-block mb-2"></div>
                                <div className="flex justify-center my-2">
                                    <a
                                        onClick={(e) => handleGoogleLogin()}
                                        className="border-2 border-gray-100 rounded-full p-3 mx-1 hover:bg-blue-500 hover:border-gray-100 "
                                    >
                                        <i className="fab fa-google text-2xl"></i>
                                    </a>
                                </div>
                                {/* Social login section */}
                                <p className="text-gray-400 my-3">ou entre com sua conta de email </p>
                                <div className="flex flex-col items-center">
                                    <div className="bg-gray-100 w-64 p-2 flex items-center mb-3">
                                        <i className="fas fa-envelope text-xl text-gray-400 mr-2"></i>
                                        <input
                                            type="email"
                                            name="email"
                                            placeholder="Email"
                                            className="bg-gray-100 outline-none text-sm
flex-1"
                                        />
                                    </div>
                                    <div className="bg-gray-100 w-64 p-2 flex items-center mb-3">
                                        <i className="fas fa-lock text-xl text-gray-400 mr-2"></i>
                                        <input
                                            type="password"
                                            name="password"
                                            placeholder="Senha"
                                            className="bg-gray-100 outline-none
text-sm flex-1"
                                        />
                                    </div>
                                    <div className="flex justify-between w-64 mb-5">
                                        <label className="flex items-center text-xs">
                                            <input type="checkbox" name="remember" className="mr-1" />
                                        </label>
                                        <a href="#" className="text-xs">
                                            Esqueceu a senha?
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="w-2/5 bg-blue-500 text-white rounded-tr-2xl rounded-br-2xl py-36 px-12 ">
                            <h2 className="text-3xl font-bold mb-2">Seja bem vindo!</h2>
                            <div className="border-2 w-10 border-white inline-block mb-2"></div>
                            <p className="mb-10">Entre com uma conta do google para continuar. </p>
                        </div>
                    </div>
                </main>
            </div>
        </>
    );
}

export default Login;
