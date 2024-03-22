import Input from "@/components/input"

const Login = () => {
    return (
        <main className="flex items-center justify-start p-8 pt-8 flex-col gap-8">
            <h1 className="font-semibold text-xl" >Login account</h1>
            <Input />
            <Input />
            <button className="bg-ui-default p-3 rounded-full px-10 text-xl mt-8" >next</button>
        </main>
    )
}

export default Login
