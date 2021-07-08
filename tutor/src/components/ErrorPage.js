import React from 'react'
import '../App.css'
import { NavLink } from 'react-router-dom';

function ErrorPage() {
    return (
        <>

                        <div className="col-sm-12 page_404">
                            <div className="col-sm-12 text-center">
                                <div className="four_zero_four_bg">
                                    <h1 className="text-center">404</h1>
                                </div>
                                <div className="contant_box_404">
                                    <h3 className="h2">
                                        Look like you're lost
                                    </h3>
                                    <p>the page you are looking for not avaible!</p>
                                    <NavLink to="/" className="link_404">Go to Home</NavLink>
                                </div>
                            </div>
                        </div>

        </>
    )
}

export default ErrorPage
