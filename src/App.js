import Navbar from './Navbar/Navbar';
import PageHeader from './PageHeader/PageHeader';
import FilterForm from './filtersection/FilterForm';
import Properties from './FeaturedProperties/Properties';
import Notification from './Notification/Notification';
import Testimonials from './Testimonials/Testimonials';
import Editor from './Editor/Editor';
import Footer from './Footer/Footer';
import './App.css';



function App() {
  return (
    <div className="App">
      <div>
          <Navbar />
          <PageHeader />
          <FilterForm />
          <Properties />
          <Notification />
          <Testimonials />
          <Editor />
          <Footer />
      </div>
    </div>
  );
}

export default App;
