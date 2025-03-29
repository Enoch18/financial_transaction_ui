import { authOptions } from "@/app/api/auth/[...nextauth]/authOptions";
import UserLogin from "@components/Auth/UserLogin";
import { getServerSession } from "next-auth";

const Login = async() => {
    const session = await getServerSession(authOptions);

    return (
        <UserLogin session={session} />   
    )
}

export default Login;