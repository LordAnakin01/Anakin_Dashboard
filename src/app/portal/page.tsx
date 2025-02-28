'use client'

import { useEffect } from 'react'
import Script from 'next/script'
import Link from 'next/link'
import Image from 'next/image'

export default function PortalPage() {
  useEffect(() => {
    // Any client-side initialization code can go here
  }, [])

  return (
    <>
      {/* Load CSS files */}
      <link rel="stylesheet" href="/landing/css/bootstrap.min.css" type="text/css" />
      <link rel="stylesheet" href="/landing/css/materialdesignicons.min.css" type="text/css" />
      <link rel="stylesheet" href="/landing/css/style.css" type="text/css" />

      {/* Main Content */}
      <div data-bs-spy="scroll" data-bs-target="#navbar-example">
        {/* Navbar Start */}
        <nav className="navbar navbar-expand-lg fixed-top navbar-custom sticky sticky-dark" id="navbar-example">
            <div className="container">
                {/* LOGO */}
                <Link href="/portal" className="flex items-center gap-3 no-underline">
                    <Image
                        src="/logo.png"
                        alt="Anakin Dynasty Logo"
                        width={32}
                        height={32}
                        className="rounded-lg"
                    />
                    <span className="text-xl font-semibold text-white">The Anakin Dynasty</span>
                </Link>

                <div className="d-flex align-items-center">
                    <div className="collapse navbar-collapse" id="navbarCollapse">
                        <ul className="navbar-nav mx-auto navbar-center" id="mySidenav">
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
                        </ul>
                    </div>

                    <div className="d-flex align-items-center gap-4">
                        <Link 
                            href="/home" 
                            className="btn btn-light px-4 py-2 rounded-xl text-decoration-none d-none d-lg-block"
                        >
                            Back to Home
                        </Link>
                        <Link 
                            href="/portal/auth/signin?redirect=/portal/user" 
                            className="btn btn-primary px-4 py-2 rounded-xl text-decoration-none d-none d-lg-block"
                        >
                            Sign In
                        </Link>
                        <Link 
                            href="/portal/auth/signup?redirect=/portal/user" 
                            className="btn btn-success px-4 py-2 rounded-xl text-decoration-none d-none d-lg-block"
                        >
                            Sign Up
                        </Link>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
                            <i className="mdi mdi-menu"></i>
                        </button>
                    </div>
                </div>
            </div>
        </nav>
        {/* Navbar End */}

        {/* Hero Section */}
        <section className="section bg-home-img d-flex justify-content-center align-items-center" id="home">
            <div className="home-content">
                <div className="container">
                    <div className="row position-relative">
                        <div className="col-lg-12 mx-auto d-flex justify-content-center">
                            <div className="home-title text-center align-self-center">
                                <h1 className="pt-2">Welcome to The Anakin Dynasty Portal</h1>
                                <h5 className="home-desc pt-4 mx-auto">Your gateway to exclusive membership benefits, resources, and opportunities.</h5>
                                <div className="mt-5 space-x-4">
                                    <Link href="/portal/auth/signin?redirect=/portal/user" className="btn btn-primary btn-lg px-4">
                                        Sign In
                                    </Link>
                                    <Link href="/portal/auth/signup?redirect=/portal/user" className="btn btn-success btn-lg px-4">
                                        Sign Up
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        {/* Features Section */}
        <section className="section pb-0" id="features">
            <div className="container">
                <div className="row">
                    <div className="col-md-5 mx-auto text-center mb-5">
                        <h3 className="mb-3 title">Member Benefits</h3>
                        <p className="text-muted font-14">Discover the exclusive advantages of being part of The Anakin Dynasty community.</p>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-4">
                        <div className="card">
                            <div className="card-body">
                                <div className="features-cantain text-center">
                                    <i className="mdi mdi-account-multiple-plus font-24 bg-soft-pink"></i>
                                    <h4 className="mb-3">Networking</h4>
                                    <p className="text-muted">Connect with like-minded professionals and industry leaders in our exclusive community.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="card">
                            <div className="card-body">
                                <div className="features-cantain text-center">
                                    <i className="mdi mdi-briefcase font-24 bg-soft-warning"></i>
                                    <h4 className="mb-3">Career Growth</h4>
                                    <p className="text-muted">Access exclusive job opportunities and career development resources.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="card">
                            <div className="card-body">
                                <div className="features-cantain text-center">
                                    <i className="mdi mdi-school font-24 bg-soft-success"></i>
                                    <h4 className="mb-3">Learning</h4>
                                    <p className="text-muted">Enhance your skills with our curated educational content and workshops.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
      </div>

      {/* Load JavaScript files */}
      <Script src="/landing/js/bootstrap.bundle.min.js" />
      <Script src="/landing/js/app.js" />
    </>
  )
} 