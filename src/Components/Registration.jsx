import React, { useState } from 'react';

const Registration = () => {
    const [name ,setName] = useState("")
    const[email , setEmail] = useState("");
    const[password , setPassword] = useState("");
    const [submit , setSubmit] = useState(false)
    const [check ,setCheck] =useState(false)
    const handleSubmit = (event) =>{
            event.preventDefault();
            if(!check){
                return
            }
            const user ={
                Name : name ,
                Email : email ,
                Password : password 
            }
            // console.log(user)
            setSubmit(true);
    }
    return (
        <div>
             <div className="h-screen w-full flex justify-center items-center bg-purple-500">
        <form onSubmit={(event)=>handleSubmit(event)} className="w-2/3 lg:w-2/5 bg-white rounded shadow-lg p-8">
          <h1 className="text-4xl mb-6 text-purple-500 text-center">
            Signup Form
          </h1>
          <label className="mb-2 text-lg">Name</label>
          <input onChange={(event)=>setName(event.target.value)}
            type="text"
            placeholder="Enter your name"
            className="py-2 px-1 border-2 border-solid border-gray-400 w-full rounded text-lg mb-3"
          required/>
          <label className="mb-2 text-lg">Email</label>
          <input onChange={(event)=>setEmail(event.target.value)}
            type="email"
            placeholder="Enter your email"
            className="py-2 px-1 border-2 border-solid border-gray-400 w-full rounded text-lg mb-3"
          required/>
          <label className="mb-2 text-lg">Password</label>
          <input onChange={(event)=>setPassword(event.target.value)}
            type="pasword"
            placeholder="Enter your password"
            className="py-2 px-1 border-2 border-solid border-gray-400 w-full rounded text-lg mb-3"
          required/>
          <input type="checkbox" onChange={()=>setCheck(event.target.checked)} name="" id="" />Do You agree with our terms and conditions?
          <div className="flex justify-end mt-3">
            <button
              type="submit"
              className="bg-purple-500 rounded h-12 w-20 text-xl text-white"
            >
              Signup
            </button>
          </div>
        </form>
      </div>
     {
        (submit &&
            <div className='fixed top-0 flex justify-center items-center h-screen w-full bg-purple-500'>
            <div className='h-1/2 w-1/2 rounded bg-purple-300 text-center'>
                <h3 className='text-3xl mb-6 text-purple-300'>You have submitted the form successfully</h3>
                <p className='text-xl mb-3'>Name :{name}</p>
                <p className='text-xl mb-3'>Email :{email}</p>
            </div>
          </div>
        )
     }
            
        </div>
    );
};

export default Registration;




  