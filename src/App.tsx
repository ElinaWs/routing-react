import { Route, Routes } from "react-router";
import { HomePage } from "./pages/home/HomePage";
import { ContactsPage } from "./pages/contacts/ContactsPage";
import { AboutPage } from "./pages/about/AboutPage";

function App() {

  return (
    <div>
      <Routes>
        <Route path='/' element={<HomePage/>} />
        <Route path='/contacts' element={<ContactsPage/>} />
        <Route path="/about/:id" element={<AboutPage/>} />
      </Routes>
    </div>
  )
}

export default App
