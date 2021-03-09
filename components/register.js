import { MDBIcon, MDBBtn, MDBInput } from 'mdbreact';

const Register = () => {
    return (
        <div className='form'>
            <form>
                <div className="grey-text">
                    <MDBInput label="Your name" icon="user" group type="text" validate error="wrong"
                        success="right" />
                    <MDBInput label="Your email" icon="envelope" group type="email" validate error="wrong"
                        success="right" />
                    <MDBInput label="Confirm your email" icon="exclamation-triangle" group type="text" validate
                        error="wrong" success="right" />
                    <MDBInput label="Your password" icon="lock" group type="password" validate />
                </div>
                <div className="text-center">
                    <MDBBtn outline color="white">
                        Register
                                    <MDBIcon far icon="paper-plane" className="ml-1" />
                    </MDBBtn>
                </div>
            </form>
        </div>
    );
};

export default Register;