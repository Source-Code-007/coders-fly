import { FaCheck } from "react-icons/fa";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';



const HeroSection = () => {

    // toast('Plan purchase successfully!', {
    //     position: "bottom-right",
    //     autoClose: 2000,
    //     hideProgressBar: false,
    //     closeOnClick: true,
    //     pauseOnHover: true,
    //     draggable: true,
    //     progress: undefined,
    //     theme: "colored",
    // });

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
                <div className="pt-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4">
                    {
                        plans.map((plan, ind) => {
                            const {planName, intro, price, features} = plan
                            return <div key={ind} className="text-white border-2 border-yellow-500 rounded space-y-4 p-5">
                                <h2 className="my-title-2">{planName}</h2>
                                <p>{intro}</p>
                                <span className="my-title">${price}</span>
                                <button className="my-btn-one">Buy now</button>
                                <ul className="pt-6 !mt-8 border-t border-dashed border-slate-700">
                                    {features.map((feature, ind)=> <li key={ind} className="flex items-center gap-2"> <FaCheck></FaCheck> {feature}</li>)}
                                </ul>
                            </div>
                        })
                    }
                </div>
            </div>


            <ToastContainer
                position="bottom-right"
                autoClose={2000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="colored"
            />
        </div>
    );
};

export default HeroSection;