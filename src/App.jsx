import "./App.css";

function App() {
  return (
    <div className="flex justify-center">
      <div className="bg-cyan-200 w-1/2 py-4 px-8">
        <header>
          <h1 className="text-xl text-center">My Notes</h1>
        </header>
        <div className="flex flex-col">
          <form id="add-note" className="self-center">
            <input type="text" placeholder="Add title" />
            <input type="text" placeholder="Notes" />
            <button type="submit">Add Note</button>
          </form>
          <section id="notes">
            <div className="item">
              <p className="item-title">Title: Item 1</p>
              <p className="item-note">Note: Do this thing</p>
              <button className="remove-button">X</button>
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
