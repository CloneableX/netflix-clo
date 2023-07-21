'use client'

import useCurrentUser from "@/hooks/useCurrentUser";
import {signOut} from "next-auth/react";

export const MainPage = () => {
	const {user} = useCurrentUser()
	return (
		<div>
			<h1 className="text-4xl text-green-500">Netflix Clone</h1>
			<p className="text-2xl text-white">Login as: {user?.name}, email: {user?.email}</p>
			<button className="w-full h-10 bg-white" onClick={() => signOut({ callbackUrl: '/auth' })}>Login Out</button>
		</div>
	)
}