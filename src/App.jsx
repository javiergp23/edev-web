import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { SearchFormSection } from "./components/SearchFormSection";
import { JobListings } from "./components/JobsListings";
import { Pagination } from "./components/Pagination";
import data from "./data.json";
console.log(data);

function App() {
  const handlePageChange = (page) => {
    console.log("Cambiando a la pagina: ", page);
  };
  return (
    <>
      <Header />
      <SearchFormSection />
      <JobListings />
      <Pagination
        currentPage={1}
        totalPages={10}
        onPageChange={handlePageChange}
      />
      <Footer />
    </>
  );
}

export default App;
