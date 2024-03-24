"use client"
import { useRouter } from "next/navigation";
import * as RemixIcon from "@remixicon/react"
import NaveItem from "@/components/naveItem";
import { useRef } from "react";






export default function ({ children }: Readonly<{ children: React.ReactNode; }>) {
    const router = useRouter()
    const token = window.localStorage.getItem('token')
    if (!token)
        return router.replace('/login')


    const Home = useRef<HTMLButtonElement>(null)
    const Search = useRef<HTMLButtonElement>(null)
    const Library = useRef<HTMLButtonElement>(null)


    return (
        <main className="w-full h-full" >
            {children}
            <nav className="fixed w-full bottom-0 p-5 px-10 flex justify-between">
                <NaveItem
                    Icon={RemixIcon.RiHome2Fill}
                    forwardOnClick={(event) => { }}
                    label="Home"
                    forwardRef={Home}
                />
                <NaveItem
                    Icon={RemixIcon.RiSearch2Line}
                    forwardOnClick={(event) => { }}
                    label="Search"
                    forwardRef={Search}
                />
                <NaveItem
                    Icon={RemixIcon.RiVoiceprintLine}
                    forwardOnClick={(event) => { }}
                    label="Your Library"
                    forwardRef={Library}
                />
            </nav>
        </main>
    )
}
