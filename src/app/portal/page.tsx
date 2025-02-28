'use client'

import { useEffect } from 'react'
import Script from 'next/script'
import Head from 'next/head'

export default function PortalPage() {
  useEffect(() => {
    // Any client-side initialization code can go here
  }, [])

  return (
    <>
      <Head>
        {/* Meta tags */}
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta content="The Anakin Dynasty Portal" name="description" />
        <meta content="Anakin Dynasty" name="author" />
        
        {/* Favicon */}
        <link rel="shortcut icon" href="/portal/public/landing/images/favicon.ico" />
      </Head>

      {/* Load CSS files */}
      <link rel="stylesheet" href="/portal/public/landing/css/bootstrap.min.css" type="text/css" />
      <link rel="stylesheet" href="/portal/public/landing/css/materialdesignicons.min.css" type="text/css" />
      <link rel="stylesheet" href="/portal/public/landing/css/style.css" type="text/css" />

      {/* Main Content */}
      <div data-bs-spy="scroll" data-bs-target="#navbar-example">
        {/* Navbar Start */}
        <nav className="navbar navbar-expand-lg fixed-top navbar-custom sticky sticky-dark" id="navbar-example">
            <div className="container">
                {/* LOGO */}
                <div className="">
                    <a href="/portal" className="logo">
                        <span>
                            <img src="/portal/public/landing/images/logo-sm.png" alt="logo-small" className="logo-sm" />
                        </span>
                        <span>
                            <img src="/portal/public/landing/images/logo.png" alt="logo-large" className="logo-lg" />
                        </span>
                    </a>
                </div>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
                    <i className="mdi mdi-menu"></i>
                </button>
                <div className="collapse navbar-collapse" id="navbarCollapse">
                    <ul className="navbar-nav ms-auto navbar-center" id="mySidenav">
                        <li className="nav-item">
                            <a href="#home" className="nav-link active">Home</a>
                        </li>
                        <li className="nav-item">
                            <a href="#features" className="nav-link">Features</a>
                        </li>
                        <li className="nav-item">
                            <a href="#pricing" className="nav-link">Pricing</a>
                        </li>
                        <li className="nav-item">
                            <a href="#faq" className="nav-link">FAQ</a>
                        </li>
                        <li className="nav-item">
                            <a href="#contact" className="nav-link">Contact</a>
                        </li>
                        <li className="nav-item">
                            <a href="/auth/signin" className="nav-link">Login</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
        {/* Navbar End */}

        {/* Add the rest of your landing page sections here */}
      </div>

      {/* Load JavaScript files */}
      <Script src="/portal/public/landing/js/bootstrap.bundle.min.js" />
      <Script src="/portal/public/landing/js/smooth-scroll.polyfills.min.js" />
      <Script src="/portal/public/landing/js/gumshoe.polyfills.min.js" />
      <Script src="/portal/public/landing/js/app.js" />
    </>
  )
} 