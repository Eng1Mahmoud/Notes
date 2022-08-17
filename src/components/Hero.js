import React, { useRef, useState } from "react";
import vector from "../images/vector.png";
import { useDispatch, useSelector } from "react-redux";
import { add } from "../redux/Slices/NotesSlice";
function Hero() {
  const state = useSelector((state) => state.NotesReduce);
  const dispatch = useDispatch();
  // refs
  const titleref = useRef();
  const textref = useRef();
  // states
  const [title, setTitle] = useState("");
  const [text, setText] = useState("");
  const [error, setError] = useState(false);

  const handleTitle = () => {
    if (titleref.current.value.length > 0) {
      setTitle(titleref.current.value);
    }
  };

  const handleText = () => {
    if (textref.current.value.length > 0) {
      setText(textref.current.value);
    }
  };
  const handleAdd = () => {
    if (textref.current.value.length > 0 && titleref.current.value.length > 0) {
      dispatch(add({ id: state.notes.length, title: title, text: text }));
      titleref.current.value = "";
      textref.current.value = "";
      setTitle("");
      setText("");
      setError(false);
    } else {
      setError(true);
    }
  };
  // end function
  return (
    <div className="hero ">
      {error && (
        <div className="alert alert-danger rounded-0 w-100" role="alert">
          Title or note not found
        </div>
      )}
      <div className="back pt-5 ">
        <div className="container w-100">
          <div className="row">
            <div className="col-md-7">
              <div className="form pt-3">
                <div className="mb-3">
                  <input
                    type="email"
                    className="form-control"
                    id="exampleFormControlInput1"
                    placeholder="Title of your Notes 👌 "
                    ref={titleref}
                    onChange={handleTitle}
                  />
                </div>
                <div className="mb-3">
                  <textarea
                    className="form-control"
                    id="exampleFormControlTextarea1"
                    rows="3"
                    placeholder="write your notes 😎"
                    ref={textref}
                    onChange={handleText}></textarea>
                </div>
                <div className="add d-flex justify-content-center pt-3">
                  <button
                    type="button"
                    className="btn btn-outline-success"
                    onClick={handleAdd}>
                    Add Your Note ❤
                  </button>
                </div>
              </div>
            </div>
            <div className="col-md-5 d-none d-md-block">
              <div className="img ">
                <img className="img-fluid  " src={vector} alt="vector"></img>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
