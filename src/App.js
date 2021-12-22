import s from "./App.module.css";
import Logo from "./components/Logo";
import Header from "./components/Header";
import CompanyList from "./components/CompanyList";

function App() {
  return (
    <div className={s.container}>
      <Logo />
      <Header />
      <CompanyList />
    </div>
  );
}

export default App;
