import "./App.css";
import { useState } from "react";

function App() {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [notes, setNotes] = useState(data);
  const [count, setCount] = useState(4);

  function remove(id) {
    setNotes(notes.filter((e) => e.key !== id));
  }

  function handle() {
    if (!title || !desc) {
      window.alert("Incomplete input");
      return;
    }
    setNotes([...notes, { key: count, title: title, desc: desc }]);
    setCount(count + 1);
    setTitle("");
    setDesc("");
    console.log(notes);
  }

  return (
    <div className="flex justify-center overflow-hidden">
      <div className="bg-cyan-200 w-2/3 lg:w-1/2 border-2 outline-sky-500 ">
        <header className="bg-cyan-500 py-2">
          <h1 className="text-xl text-center">My Notes</h1>
        </header>
        <div className="flex flex-col py-4 px-8">
          <form
            id="add-note"
            className="self-center flex mb-4 flex-col gap-y-2 gap-x-2 sm:flex-row w-full"
          >
            <input
              type="text"
              id="title"
              placeholder="Add title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="sm:w-1/4 w-full"
            />
            <input
              type="text"
              id="description"
              placeholder="Description"
              value={desc}
              onChange={(e) => setDesc(e.target.value)}
              className="grow-2 w-full sm:w-1/2"
            />
            <button
              type="submit"
              onClick={handle}
              className="grow-1 bg-cyan-500 text-white rounded-sm"
            >
              Add Note
            </button>
          </form>
          <section id="notes" className="flex flex-col gap-1.5">
            {notes.map((e) => (
              <div className="item border outline-black relative p-2">
                <p className="item-title text-xl">Title: {e.title}</p>
                <p className="item-desc">Note: {e.desc} </p>
                <button
                  className="remove-button bg-cyan-500 p-1 rounded-sm absolute top-2 right-2"
                  type="input"
                  onClick={() => remove(e.key)}
                >
                  X
                </button>
              </div>
            ))}

            {/* <div className="item border outline-black relative p-2">
              <p className="item-title text-xl">Title: {e.title} Item 1</p>
              <p className="item-desc">Note:{e.desc} Do this thing</p>
              <button
                className="remove-button bg-cyan-500 p-1 rounded-sm absolute top-2 right-2"
                type="input"
                onClick={() => remove(e.key)}
              >
                X
              </button>
            </div> */}
          </section>
        </div>
      </div>
    </div>
  );
}
// Dummy data
const data = [
  {
    key: 0,
    title: "Html",
    desc: "HyperText MarkUp Language",
  },
  { key: 1, title: "CSS", desc: "StyleSheet" },
  {
    key: 2,
    title: "JavaScript",
    desc: "Scripting language for web",
  },
  {
    key: 3,
    title: "React",
    desc: "JavaScript framework",
  },
];
export default App;
