import "./App.css";

function App() {
  return (
    <div className="flex justify-center overflow-hidden">
      <div className="bg-cyan-200 w-2/3 lg:w-1/2 border-2 outline-sky-500 ">
        <header className="bg-cyan-500 py-2">
          <h1 className="text-xl text-center">My Notes</h1>
        </header>
        <div className="flex flex-col py-4 px-8">
          <form
            id="add-note"
            className="self-center flex mb-4 flex-col gap-y-2 sm:flex-row w-full"
          >
            <input
              type="text"
              placeholder="Add title"
              className="sm:w-1/4 w-full"
            />
            <input
              type="text"
              placeholder="Notes"
              className="grow-2 w-full sm:w-1/2"
            />
            <button
              type="submit"
              className="grow-1 bg-cyan-500 text-white rounded-sm"
            >
              Add Note
            </button>
          </form>
          <section id="notes" className="flex flex-col gap-1.5">
            <div className="item border outline-black relative p-2">
              <p className="item-title">Title: Item 1</p>
              <p className="item-note">Note: Do this thing</p>
              <button className="remove-button bg-cyan-500 p-1 rounded-sm absolute top-2 right-2">
                X
              </button>
            </div>
            <div className="item">
              <p className="item-title">Title: Item 2</p>
              <p className="item-note">Note: Do this thing</p>
              <button className="remove-button">X</button>
            </div>
            <div className="item">
              <p className="item-title">Title: Item 3</p>
              <p className="item-note">Note: Do this thing</p>
              <button className="remove-button">X</button>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}

export default App;
