import React from "react";


const Login = () =>{
    return(
        <div   className="flex  justify-center items-center w-screen h-screen bg-blue-200">
                <div className="flex flex-col gap-5 text-center bg-white p-24 text-black md:p-16 sm:p-10"    >
                    <h1>LOGIN</h1>
                    <input type="text"  placeholder="Email"className="outline-none p-1 border border-sky-500"/>
                    <input type="text" placeholder="Password" className="outline-none p-1 border border-sky-500"/>
                    <span>
                    <button className=" bg-sky-500 w-16 text-center text-black">Login</button>

                    </span>
                    <span className="text-xs bottom-0">
                        <p>Don't have an account? <a href="" className="underline text-sky-400">Sign-Up Here</a></p>
                    </span>
                </div>
        </div>
    )
}

export default Login;