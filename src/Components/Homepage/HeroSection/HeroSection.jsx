
const HeroSection = () => {

    const plans = [
        {
          planName: "Free",
          intro: "For your hobby project",
          price: 25,
          features: [
            "Free email alerts",
            "3 minutes checks",
            "10 monitors",
            "5 status pages",
          ],
        },
        {
          planName: "Starter",
          intro: "Great for small businesses",
          price: 50,
          features: [
            "Email and SMS alerts",
            "1-minute checks",
            "20 monitors",
            "10 status pages",
          ],
        },
        {
          planName: "Silver",
          intro: "Ideal for growing startups",
          price: 150,
          features: [
            "Email, SMS, and Slack alerts",
            "30-second checks",
            "50 monitors",
            "20 status pages",
          ],
        },
        {
          planName: "Gold",
          intro: "Perfect for established businesses",
          price: 250,
          features: [
            "Email, SMS, and Slack alerts",
            "15-second checks",
            "100 monitors",
            "50 status pages",
          ],
        },
        {
          planName: "Diamond",
          intro: "Enterprise-level performance",
          price: 500,
          features: [
            "Custom alert channels",
            "Real-time checks",
            "Unlimited monitors",
            "100 status pages",
          ],
        },
      ];

    return (
        <div className="min-h-[92vh] my-bg-one">
            <div className="myContainer">
            This is hero section!
            </div>
        </div>
    );
};

export default HeroSection;