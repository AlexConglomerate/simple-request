import Request2 from "./components/request2";

function App() {

    return (
        <>
            <button onClick={() => methodDoesNotExist()}>Break the world</button>

            <h1 className="text-3xl hover:font-bold text-red-800"> Hello world! </h1>
            <Request2/>
        </>
    );
}

export default App;