import { Link } from "react-router-dom";
import Navbar from "../../Shared/Navbar/Navbar";


const Register = () => {
    const handleLogIn = e => {
        e.preventDefault()
        console.log(e.target.email.value)
        const email = e.target.email.value
        const password = e.target.password.value
        console.log(email, password)
    }
    return (
        <div>
            <Navbar></Navbar>
            <h2 className="text-3xl text-center my-10">Please Register</h2>
            <form onSubmit={handleLogIn} className="md:w-3/4 lg:w-1/2 mx-auto">
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Name</span>
                    </label>
                    <input type="text" name="name" placeholder="Enter Your Name" className="input input-bordered" required />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Photo URL</span>
                    </label>
                    <input type="text" name="photo" placeholder="Photo URL" className="input input-bordered" required />
                </div>
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
                    <label className="label">
                        <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                    </label>
                </div>
                <div className="form-control mt-6">
                    <button className="btn btn-primary">Register</button>
                </div>
                <label className="label">
                    <p>{`Have account please`}<Link to='/login' className="ml-3 label-text-alt link link-hover text-blue-600 font-semibold text-[16px]">Login</Link></p>
                </label>
            </form>
        </div>
    );
};

export default Register;