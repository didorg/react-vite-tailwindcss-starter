import { Routes, Route } from 'react-router-dom';
import { Navbar } from './components';
import { Home, About, GetInTouch, Footer } from './sections';

const App = () => {
  return (
    <main className='relative'>
      <Navbar />
      <section className='p-16'>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/contact' element={<GetInTouch />} />
        </Routes>
      </section>
      <section className='fixed bottom-0 left-0 right-0 bg-gray-800 text-white py-4'>
        <Footer />
      </section>
    </main>
  );

  // return (
  //   <main className='relative'>
  //     <Nav />
  //     <section className=' bg-black padding-x padding-t pb-8'>
  //       <Footer />
  //     </section>
  //   </main>
  // );
};

export default App;
