import { useNavigate } from "react-router-dom";

const SignUpCard = () => {

const navigate = useNavigate();

const handleSignIn = () =>{
navigate('/signin');
}

  return (
    <>
      <div className="container mt-5 mb-5">
        <div className="row d-flex justify-content-between align-items-center g-4">
          {/* Card 1 */}
          <div className="col-lg-6 col-md-6 col-sm-12 ">
            <div className=" text-white bg-success p-4 rounded-4 shadow"  style={style.h50}>
              <h3 className="fw-bold">Competitively priced custom assessments</h3>
              <p className="text-light">
                Deploy our state-of-the-art screening platform without breaking
                the bank.
              </p>
              <button className="btn btn-light fw-bold rounded-pill px-4" onClick={handleSignIn} style={style.h50button}>
                Sign Up for Free
              </button>
            </div>
          </div>

          {/* Card 2 */}
          <div className="col-lg-6 col-md-6 col-sm-12 " >
            <div className=" text-white bg-dark p-4 rounded-4 shadow" style={style.h50}>
              <h3 className="fw-bold">Online coding tool for developer interviews</h3>
              <p>
                Assess on-the-job skills of tech candidates using our
                collaborative code editor and fast compiler.
              </p>
              <button className="btn btn-success fw-bold rounded-pill px-4" style={style.h50button}>
                See All Features
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};


const style = {
    h50:{
height : "auto"
    },
    
    h50button:{
        marginTop: "5%"
        }
}

export default SignUpCard;
