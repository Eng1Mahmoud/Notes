import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { deletes } from "../redux/Slices/NotesSlice";
function ALLNotes() {
  const allnotes = useSelector((state) => state.NotesReduce);
  const [height, setHeight] = useState("");
  const dispatch = useDispatch();
  const handleDelete = (id) => {
    dispatch(deletes(id));
  };

  // set height 100vh if number of notes is 2
  useEffect(() => {
    if (allnotes.count <= 2) {
      setHeight("fullHeight");
    } else {
      setHeight("");
    }
  }, [allnotes.count]);

  return (
    <div className={`allnotes px-0 px-md-5 py-3 ${height} `}>
      <div className="container px-2 px-md-5">
        {allnotes.count > 0 ? (
          allnotes.notes.map((e) => {
            return (
              <div className="note p-3 my-3 rounded" key={e.id}>
                <h1 className="pb-2">{e.title}</h1>
                <div className="body">
                  <p>{e.text}</p>
                </div>
                <i
                  className="fa-solid fa-trash-arrow-up"
                  onClick={() => handleDelete(e.id)}></i>
              </div>
            );
          })
        ) : (
          <div className="empty d-flex justify-content-center align-items-center">
            <h1>There is no notes</h1>
          </div>
        )}
      </div>
    </div>
  );
}

export default ALLNotes;
