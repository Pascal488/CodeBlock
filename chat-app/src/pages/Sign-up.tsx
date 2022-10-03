
import React, { useState } from "react";

import {createUserWithEmailAndPassword,updateProfile } from "firebase/auth";
import { auth,storage} from "../config/config";
import { doc, setDoc } from "firebase/firestore"; 
import {db} from '../config/config';
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { useNavigate, Link } from "react-router-dom";
import Icon from "../components/images/Adddp.webp";

const SignUp = () => {
    const [err, setErr] = useState(false);
    const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

 const handleSubmit = async (e:any) =>{
    e.preventDefault()
    const username = e.target[0].value;
    const email = e.target[1].value;
    const password = e.target[2].value;
    const file = e.target[3].files[0];
    
    try {
        //Create user
        const res = await createUserWithEmailAndPassword(auth, email, password);
  
        //Create a unique image name
        const date = new Date().getTime();
        const storageRef = ref(storage, `${username + date}`);
  
        await uploadBytesResumable(storageRef, file).then(() => {
          getDownloadURL(storageRef).then(async (downloadURL) => {
            try {
              //Update profile
               await updateProfile(res.user, {
                     displayName: username,
                     photoURL: downloadURL,
              });
              //create user on firestore
              await setDoc(doc(db, "users", res.user.uid), {
                uid: res.user.uid,
                dislayName:username,
                email:email,
                photoURL: downloadURL,
              });
  
              //create empty user chats on firestore
              await setDoc(doc(db, "userChats", res.user.uid), {});
              navigate("/");
            } catch (err) {
              console.log(err);
              setErr(true);
              setLoading(false);
            }
          });
        });
      } catch (err) {
        setErr(true);
        setLoading(false);
      }
    };
           


    return(
        <div   className="flex  justify-center items-center w-screen h-screen bg-blue-200">
                <form action="" onSubmit={handleSubmit}>
                <div className="flex flex-col gap-5 text-center bg-white p-24 text-black md:p-16 sm:p-10"    >
                    <h1>Register</h1>
                    <input type="text" name="username"  placeholder="Username"className="outline-none p-1 border border-sky-500"/>
                    <input type="text"name="email" placeholder="Email" className="outline-none p-1 border border-sky-500"/>
                    <input type="password" name="password" placeholder="Password" className="outline-none p-1 border border-sky-500"/>
                    <input required style={{ display: "none" }} type="file" id="file" />
                    <label htmlFor="file" className="text-2xl cursor-pointer">    
                    <img src={Icon} alt="" className="w-5 h-5" />
                    
                    </label>
                   
                    <span>
                    <button className=" bg-sky-500 w-20 text-center text-black p-1">Register</button>
                    </span>
                    {loading && "Uploading and compressing the image please wait..."}
                    {err && <span className="text-red-500 text-xs">Something went wrong</span>}
                    
                    <span className="text-xs bottom-0">
                        <p>Have an account? <Link to='/login' 
                            
                            className="underline text-sky-400"
                            >Sign-In Here</Link></p>
                    </span>
                </div>
                </form>

        </div>
    )
}

export default SignUp;