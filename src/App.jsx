import "./App.css";

function App() {
  return (
    <div>
      <header>
        <h1>My Notes</h1>
      </header>
      <body>
        <form>
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
      </body>
    </div>
  );
}

export default App;
