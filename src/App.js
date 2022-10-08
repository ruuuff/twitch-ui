import NavBar from "./components/NavBar";

function App() {
  const theme = localStorage.getItem("theme");
  if (theme === "dark") document.documentElement.classList.add("dark");

  return <NavBar />;
}

export default App;
