import { Link } from "react-router-dom";
import { ArrowUpRight, User } from "lucide-react"
import { useSelector } from "react-redux";
import type { RootState } from "@/redux/redux-store";

export default function AuthButtons() {
  // Session
  const user = useSelector((state: RootState)=>state.loginAuth.userToken)
  
  return (
    <div className="flex items-center gap-8">
      {/* Login button */}
      {user !== null? <User className="text-red-400 cursor-pointer"/>  :<div className="relative flex">
        <Link to={"login"} className="cursor-pointer bg-red-400 py-2 px-4 rounded-md text-white font-semibold">
          Login
        </Link>

        {/* Icon */}
        <ArrowUpRight className="absolute -right-5 top-1/4 bg-red-400 border rounded-full text-white border-white"/>
      </div> }
      

      {/* Register button */}
      <div className="relative flex">
        <Link to={"Register"} className="cursor-pointer bg-red-400 py-2 px-4 rounded-md text-white font-semibold">
          Register
        </Link>

        {/* Icon */}
        <ArrowUpRight className="absolute -right-5 top-1/4 bg-red-400 border rounded-full text-white border-white"/>
      </div>
    </div>
  );
}
