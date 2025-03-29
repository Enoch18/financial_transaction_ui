import { authOptions } from "@/app/api/auth/[...nextauth]/route"
import { getServerSession } from "next-auth"
import { signOut } from "next-auth/react";
import { redirect } from "next/navigation";
import { axiosInstance, axiosTransactionInstance } from "./axios";

export async function getData<T>(
    url: string,
  ): Promise<T> {

  const session:any = await getServerSession(authOptions);
  const token = session?.user?.token;

  try{
    const response = await axiosInstance.get(`${url}`, {
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
    });
    return response.data;
  }catch(err:any){ 
    if(err.status === 401){
      signOut({callbackUrl: '/auth/login'});
      redirect('/auth/login');
    }
    throw new Error(`Failed to fetch: ${err}`);
  }
}

export async function getTransactionData<T>(
  url: string,
): Promise<T> {

const session:any = await getServerSession(authOptions);
const token = session?.user?.token;

try{
  const response = await axiosTransactionInstance.get(`${url}`, {
    headers: {
      Authorization: `Bearer ${token}`,
      'Content-Type': 'application/json',
    },
  });
  return response.data;
}catch(err:any){ 
  if(err.status === 401){
    signOut({callbackUrl: '/auth/login'});
    redirect('/auth/login');
  }
  throw new Error(`Failed to fetch: ${err}`);
}
}