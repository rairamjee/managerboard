"use client"
import { useState} from 'react';
import { useRouter } from 'next/navigation'


function Login() {
    const usermail = "manager@gmail.com";
    const password = "password123";
    const router=useRouter();
    const [username, setUsername] = useState('');
    const [userPassword, setUserPassword] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        console.log("Username:", username);
        console.log("Password:", userPassword);
        
        if (username === usermail && userPassword === password) {
            console.log("Login successful!");
            router.push('/sidebar');
            setError(''); // Clear any previous errors
        } else {
            setError('Invalid username or password.');
        }
    };

    return (
        <div className="h-screen w-screen flex items-center justify-center bg-slate-900">
            <div className="left-side w-full lg:w-1/2 md:w-2/3 h-screen ml-4 md:ml-8 lg:ml-12 xl:ml-16 flex flex-col items-start justify-center text-slate-50 p-8">
                <h2 className="text-4xl font-bold mb-4 justify-start">SaleSkip!</h2>
                <h3 className="mb-24 text-lg">Welcome Back...</h3>
                <form className="w-full max-w-sm" onSubmit={handleSubmit}>
                    <div className="mb-6">
                        <label className="block text-slate-300 text-sm font-bold mb-2" htmlFor="username">
                            Username
                        </label>
                        <input
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-slate-900 leading-tight focus:outline-none focus:shadow-outline"
                            id="username"
                            type="text"
                            placeholder="Username"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            required
                        />
                    </div>
                    <div className="mb-8">
                        <label className="block text-slate-300 text-sm font-bold mb-2" htmlFor="password">
                            Password
                        </label>
                        <input
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-slate-900 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                            id="password"
                            type="password"
                            placeholder="******************"
                            value={userPassword}
                            onChange={(e) => setUserPassword(e.target.value)}
                            required
                        />
                    </div>
                    {error && <p className="text-red-500 text-xs italic mb-4">{error}</p>}
                    <div className="flex items-center justify-between">
                        <button
                            className="bg-indigo-500 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:bg-white focus:text-indigo-700"
                            type="submit"
                        >
                            Sign In
                        </button>
                        <a
                            className="inline-block align-baseline font-bold text-sm text-indigo-500 hover:text-indigo-800"
                            href="#"
                        >
                            Forgot Password?
                        </a>
                    </div>
                </form>
            </div>
            <div className="right-side hidden md:flex lg:flex w-1/2 h-screen items-center justify-start p-8">
                <img src="/loginpg.png" alt="Login Illustration" className="w-96 h-4/5" />
            </div>
        </div>
    );
}

export default Login;
