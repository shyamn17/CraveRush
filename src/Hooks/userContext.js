import { createContext } from "react";

const userContext= createContext({

name:"Guest",
email:"guest@gmail.com"
})

export default userContext;