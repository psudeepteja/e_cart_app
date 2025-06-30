import Login from '../../components/Login';

function Auth() {
    const userDetails = sessionStorage.getItem("userName")
    return (
        !userDetails &&
        <div style={{
            backgroundImage: 'url(/bg.jpg)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            height: '88vh',
            // position:"absolute",
            // top:0,
            zIndex: 1,
            width: "100%",
            overflow: "hidden"
        }}>
            <div className="grid md:grid-cols-2">
                <span ></span>
                {/* <span ></span>
<span ></span> */}
                <span className="flex justify-end items-center h-screen md:w-5/6">
                    {/* <span ></span> */}

                    <Login />
                </span>

            </div>
        </div>
    );
}

export default Auth


