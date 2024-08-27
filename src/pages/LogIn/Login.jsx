import { Link } from "react-router-dom";
import Navbar from "../../Shared/Navbar/Navbar";

const Login = () => {
    const handleLogIn = e => {
        e.preventDefault()
        console.log(e.target.email.value)
        const email = e.target.email.value
        const password = e.target.password.value
        console.log(email,password)
    }
    return (
        <div>
            <Navbar></Navbar>
            <h2 className="text-3xl text-center my-10">Please Login</h2>
            <form onSubmit={handleLogIn} className="md:w-3/4 lg:w-1/2 mx-auto">
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Email</span>
                    </label>
                    <input type="email" name="email" placeholder="email" className="input input-bordered" required />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Password</span>
                    </label>
                    <input type="password" name="password" placeholder="password" className="input input-bordered" required />

                </div>
                <div className="form-control mt-6">
                    <button className="btn btn-primary">Login</button>
                </div>
                <label className="label">
                    <p>{`Havn't account please`}<Link to='/register' className="ml-3 label-text-alt link link-hover text-blue-600 font-semibold text-[16px]">Register</Link></p>
                </label>
            </form>
        </div>
    );
};

export default Login;