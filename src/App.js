import NavBar from "./components/NavBar";
import SideBar from "./components/SideBar";

function App() {
  const theme = localStorage.getItem("theme");
  if (theme === "dark") document.documentElement.classList.add("dark");

  return (
    <div className="min-h-screen bg-body-bg">
      <NavBar />
      <div className="h-[calc(100vh-50px)]">
        <SideBar />
      </div>
    </div>
  );
}

export default App;
