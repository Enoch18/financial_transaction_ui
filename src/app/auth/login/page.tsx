import { authOptions } from "@/app/api/auth/[...nextauth]/authOptions";
import UserLogin from "@components/Auth/UserLogin";
import { getServerSession } from "next-auth";

const Login = async() => {
    const session: {
        user: {
            token: string;
        }
    } | null = await getServerSession(authOptions);

    return (
        <UserLogin session={session} />   
    )
}

export default Login;