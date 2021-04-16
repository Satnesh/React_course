import React from 'react'
import { CardBody,Card } from 'reactstrap'

function Header() {
    return (
        <div>
            <Card className="md-4 bg-warning">
                <CardBody>
                    <h1>Welcome to Courses Application</h1>
                </CardBody>
            </Card>
        </div>
    )
}

export default Header
