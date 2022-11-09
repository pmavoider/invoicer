import { Link } from "react-router-dom";

function App() {
  return (
    <>
      <div
        style={{ height: "100vh" }}
        className="d-flex align-items-center flex-column justify-content-center "
      >
        <div>
          <Link to="/createinvoice">
            <h1 className="bg-secondary p-4 rounded d-block">
              {" "}
              Create invoice
            </h1>
          </Link>
        </div>
        <div>
          <Link to="/createinvoice">
            <h1 className="bg-secondary p-4 rounded d-block">view invoices </h1>
          </Link>
        </div>
      </div>
    </>
  );
}

export default App;
