import '../styles/Container3.css'

const Container3 = () => {
    return(
        <div className="container-3">
            <div className="con3-header">
                <h2>Benefits of <span>Quickg</span></h2>
                <p> Struggling with your online presence ? accelerate your growth ffortlessly with Quickg ! We simplify , enhance , and enpower your online journey in one custumizable digital hub</p>
            </div>
            <div className="con3 page">
                <img src="https://www.quickg.eu/images/desktop.png" alt="Personal Page "/>
                <div className="content-body">
                    <h3><span>Personal</span> Page</h3>
                    <p>Craft a digital handshake that leaves a lasting impression . With Quickg. your personal page becomes a narrative of your unique journey.</p>
                    <div className="body-buttons">
                        <button>Procuct hunter</button>
                        <button>Standart</button>
                        <button>Professional</button>
                        <button>Premium</button>
                    </div>
                </div>
            </div>
            <div className="con3 support">
                <div className="content-body">
                    <h3><span>Support</span> Me</h3>
                    <p>This feature provides a simmple and direct way for your followers to contribute to your journey , fueling you passion and createive endoavors .</p>
                    <div className="body-buttons">
                        <button>Phone</button>
                        <button>Custumer care</button>
                    </div>
                </div>
                <img src="https://www.quickg.eu/images/supportMe.png" alt="Support me"/>
            </div>
            <div className="con3 affiliate">
                <img src="https://www.quickg.eu/images/affiliate.png" alt="Affiliate links"/>
                <div className="content-body">
                    <h3><span>Affiliate</span> Links</h3>
                    <p>Unlock a new revenue stream with Quickg's Affiliate Links/Coupons feature. Seamlessly integrate your affiliate links, turning your digital presence into a profitable venture </p>
                    <div className="body-buttons">
                        <button>Doc</button>
                        <button>New tab</button>
                    </div>
                </div>
            </div>
            {/* Metrics Dashboard */}
            <div className="con3 metrics">
                <div className="content-body">
                    <h3><span>Metrics</span> (Dashboard)</h3>
                    <p>Unlock the power of data with Quickg's Metrics Dashboard. Track engagement, measure performance, and understand your audience better with our Metrics Dashboard.</p>
                    <div className="body-buttons">
                        <button>Profile</button>
                        <button>Metrics</button>
                    </div>
                </div>
                <img src="https://www.quickg.eu/images/metrics.png" alt="Metrics dashboard"/>
            </div>
            {/* Email Subscriptions */}
            <div className="con3 subscriptions">
                <img src="https://www.quickg.eu/images/emailSending.png" alt="Email Subscriptions"/>
                <div className="content-body">
                    <h3><span>Email</span> Subscriptions</h3>
                    <p>Boost your audience enagagement with Quickg's Email Subscriptions features. Encourage you visitors to Subscriptions features. Encourage your visitors to subscribe and keep them engaged with regular updates and personalized content. it's your voice, amplified.</p>
                    <div className="body-buttons">
                        <button>Share</button>
                        <button>Inbox</button>
                    </div>
                </div>
            </div>

        </div>
    );
}


export default Container3;