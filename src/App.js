import "./styles.css";

// Receiving props by the component itself:
export default function App(props) {
  const [firstName, lastName] = props.fullName;
  return (
    <div className="App">
      <h1>Passing Props in React</h1>
      <h2>
        My name is {firstName} {lastName}
      </h2>
    </div>
  );
}
