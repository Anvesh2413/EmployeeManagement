import React from 'react'
import { Link } from 'react-router-dom'
export default function Error() {
    return (
        <div>
            <div class="page-wrap d-flex flex-row align-items-center">
                <div class="container">
                    <div class="row justify-content-center">
                        <div class="col-md-12 text-center">
                            <span class="display-1 d-block">401</span>
                            <div class="mb-4 lead">Unauthorized Access Error.</div>
                            <Link to="/" class="btn btn-link">Back to Login</Link>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}
