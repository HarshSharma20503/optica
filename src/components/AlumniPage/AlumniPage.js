import "./AlumniPage.scss";
import React from 'react'
import Card from "../Card/Card";
import SideHeading from "../ASideHeading/SideHeading";


function AlumniPage() {
    return (
        <div className="alumni">
            <div className="alumni_founders">
                <div className="alumni_founders_heading">
                    <SideHeading
                        side_heading="Founding Members"
                        side_content="The future belongs to those who believe in the beauty of their dreams."
                    />
                </div>
                <div className="alumni_founders_cards">
                    <Card
                        imgsrc="/images/sample.png"
                        name="Name"
                        designation="EX-president"
                        linkedinLink="/"
                        instaLink="/"
                    />
                    <Card
                        imgsrc="/images/sample.png"
                        name="Name"
                        designation="EX-president"
                        linkedinLink="/"
                        instaLink="/"
                    />
                    <Card
                        imgsrc="/images/sample.png"
                        name="Name"
                        designation="EX-president"
                        linkedinLink="/"
                        instaLink="/"
                    />
                    <Card
                        imgsrc="/images/sample.png"
                        name="Name"
                        designation="EX-president"
                        linkedinLink="/"
                        instaLink="/"
                    />
                </div>

            </div>
            <div className="alumni_founders">
                <div className="alumni_founders_heading">
                    <SideHeading
                        side_heading="Meet Our Alumni"
                        side_content="The future belongs to those who believe in the beauty of their dreams."
                    />
                </div>
                <div className="alumni_founders_cards">
                    <Card
                        imgsrc="/images/sample.png"
                        name="Name"
                        designation="EX-president"
                        linkedinLink="/"
                        instaLink="/"
                    />
                    <Card
                        imgsrc="/images/sample.png"
                        name="Name"
                        designation="EX-president"
                        linkedinLink="/"
                        instaLink="/"
                    />
                    <Card
                        imgsrc="/images/sample.png"
                        name="Name"
                        designation="EX-president"
                        linkedinLink="/"
                        instaLink="/"
                    />
                    <Card
                        imgsrc="/images/sample.png"
                        name="Name"
                        designation="EX-president"
                        linkedinLink="/"
                        instaLink="/"
                    />
                </div>

            </div>
        </div>

    )
}

export default AlumniPage