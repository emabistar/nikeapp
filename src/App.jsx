import { useState } from 'react'
import { Reviews,Footer,Services,SuperQuality, SpecialOffers,PopularProducts,Subscribers,Hero } from './sections';
import Nav from "./components/Nav"


  const App = () =>(
    <main className="relative">
     <Nav/>
      <section className="xl:padding-l wide:padding-r padding-b">
      <Hero/>
    </section>
    <section className="padding">
      <PopularProducts/>
    </section>
    <section className="padding">
      <SuperQuality/>
    </section>
    <section className="padding-x placeholder-gray-100">
      <Services/>
    </section>
    <section className="padding">
      <SpecialOffers/>
    </section>
   {/*  <section className="padding">
      <Reviews/>
    </section> */}
    <section className = "bg-blue-50 padding">
    <Reviews/>
    </section>
    <section className="bg-gray-300 padding-x sm:py-32  py-16 w-full">
      <Subscribers/>
    </section>
    <section className="padding-x  padding-t pb-8 bg-black">
      <Footer/>
    </section>
    </main>
    );



export default App
