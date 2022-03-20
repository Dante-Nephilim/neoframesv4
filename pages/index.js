import Head from 'next/head'
import Image from 'next/image'
import Link from "next/link";
import IndexNavbar from "../components/Navbars/IndexNavbar.js";
import Footer from "../components/Footers/Footer.js";
import Landing from './landing.js';

export default function Home() {
  return (<>
    <IndexNavbar fixed />
    <Landing />
    <Footer/>
    
    </>
      )
}
