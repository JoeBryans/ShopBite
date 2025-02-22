"use client"
import { useSession } from "next-auth/react"

const GetUser = () => { 
    const { data: session, status } = useSession()
    console.log(session)
    
    // if (status === "loading") return <div>Loading...</div>
    // if (status === "unauthenticated") return <div>Not logged in</div>
    // if (status === "authenticated") {
    //     return (
    //         <div>
    //             <p>Hello {session.user.name}</p>
    //             <p>Your email is {session.user.email}</p>
    //         </div>
    //     )
    // }
    return (
        <div>
            
        </div>
    )
}

export default GetUser