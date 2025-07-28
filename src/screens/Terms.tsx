import React, { useState } from 'react';
import '../styles/Terms.css';

const steps = [
    {
        title: "Acceptance of Terms",
        content: "By accessing or using TaraG, you agree to be bound by these Terms and our Privacy Policy. If you do not agree, please do not use our services."
    },
    {
        title: "Use of the App",
        content: "You must be at least 13 years old to use TaraG.\nYou are responsible for your account and activities within the app.\nYou agree to use TaraG only for lawful purposes and respectful communication."
    },
    {
        title: "User Accounts",
        content: "You must provide accurate and complete information when creating an account.\nYou are responsible for keeping your password confidential.\nTaraG is not liable for any loss or damage arising from unauthorized access to your account."
    },
    {
        title: "Group Features and Content",
        content: "Users can create and join travel groups, plan itineraries, and share travel data.\nYou are responsible for any content you share, including itinerary notes and group messages.\nOffensive, abusive, or illegal content will be removed and may lead to account suspension."
    },
    {
        title: "Location and Notification Services",
        content: "TaraG uses your device’s location to provide real-time tracking, route suggestions, and emergency features.\nNotifications may include travel updates, group alerts, and weather warnings.\nYou may control permissions through your device settings."
    },
    {
        title: "Limitation of Liability",
        content: "TaraG provides travel suggestions and tracking tools, but we do not guarantee complete accuracy of routes, weather, or location services.\nWe are not liable for any travel delays, route issues, or personal disputes between users."
    },
    {
        title: "Modifications",
        content: "We may update these Terms at any time. Significant changes will be posted on this page. Continued use of the app means you accept any updates."
    },
    {
        title: "Contact Us",
        content: 'If you have any questions or concerns about these Terms, feel free to contact us at:\n📧 support@taragapp.com'
    }
];

export default function TermsScreen() {
    const [step, setStep] = useState(0);

    const handleNext = () => setStep((prev) => Math.min(prev + 1, steps.length - 1));
    const handlePrev = () => setStep((prev) => Math.max(prev - 1, 0));

    return (
        <div className="terms-gradient-bg">
            <div className="terms-content">
                <h1>Terms and Conditions</h1>
                <p className="terms-date">Last Updated: July 28, 2025</p>
                <p>
                    Welcome to TaraG, your companion for travel planning and group adventures! By using our website and mobile app, you agree to the following Terms and Conditions. Please read them carefully.
                </p>
                <ol>
                    <li key={step} style={{ listStyle: "none", position: "relative", paddingLeft: 48 }}>
                        <span
                            style={{
                                position: "absolute",
                                left: 0,
                                top: "0.2em",
                                width: 32,
                                height: 32,
                                background: "linear-gradient(135deg, #579CEA 0%, #2289FF 100%)",
                                color: "#fff",
                                fontWeight: "bold",
                                fontSize: "1.2rem",
                                borderRadius: "50%",
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                                boxShadow: "0 2px 8px rgba(34,137,255,0.10)"
                            }}
                        >
                            {step + 1}
                        </span>
                        <strong>{steps[step].title}</strong><br />
                        {steps[step].content.split('\n').map((line, i) => (
                            <span key={i}>{line}<br /></span>
                        ))}
                    </li>
                </ol>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: 24 }}>
                    <button
                        onClick={handlePrev}
                        disabled={step === 0}
                        className="terms-step-btn"
                    >
                        Previous
                    </button>
                    {step < steps.length - 1 ? (
                        <button onClick={handleNext} className="terms-step-btn">
                            Next
                        </button>
                    ) : (
                        <span style={{ color: '#2289FF', fontWeight: 500 }}>End of Terms</span>
                    )}
                </div>
            </div>
        </div>
    );
}