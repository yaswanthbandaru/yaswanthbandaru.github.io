import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import Skills from './pages/Skills';
import Blog from './pages/Blog';
import BlogPostPage from './pages/BlogPostPage';
import Contact from './pages/Contact';
import './styles/Navbar.css';
import './index.css';

const SinglePage: React.FC = () => (
  <div className="app">
    <Navbar />
    <main className="main-content">
      <section id="home" className="app-section"><Home /></section>
      <section id="about" className="app-section"><About /></section>
      <section id="projects" className="app-section"><Projects /></section>
      <section id="skills" className="app-section"><Skills /></section>
      <section id="contact" className="app-section"><Contact /></section>
    </main>
    <Footer />
  </div>
);

const BlogLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <div className="app">
    <Navbar />
    <main className="main-content blog-route">{children}</main>
    <Footer />
  </div>
);

const App: React.FC = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<SinglePage />} />
      <Route path="/blogs" element={<BlogLayout><Blog /></BlogLayout>} />
      <Route path="/blogs/:slug" element={<BlogLayout><BlogPostPage /></BlogLayout>} />
    </Routes>
  </BrowserRouter>
);

export default App;
