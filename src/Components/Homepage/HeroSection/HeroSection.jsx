import { FaCheck, FaIcons, FaLock } from "react-icons/fa";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import UsePlan from "../../../Hooks/UsePlan";



const HeroSection = () => {
    const [myPlans, setMyPlans] = UsePlan()

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
            btnText: '',
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
            btnText: 'Buy Free to unlock',
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
            btnText: 'Buy Starter to unlock',
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
            btnText: 'Buy Silver to unlock',
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
            btnText: 'Buy Gold to unlock',
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
                            const { planName, intro, price, btnText, features } = plan
                            const isReadyForPurchased = myPlans.find(mp => mp.plan === planName)?.status === 'readyForPurchase'
                            const isPurchased = myPlans.find(mp => mp.plan === planName)?.status === 'purchased'
                            
                            return <div key={ind} className="text-white border-2 border-yellow-500 rounded space-y-4 p-5">
                                <FaIcons className="text-yellow-500 text-3xl"></FaIcons>
                                <h2 className="my-title-2">{planName}</h2>
                                <p>{intro}</p>
                                <p className="my-title">${price} <span className="text-slate-400 text-sm font-normal">50$ Return</span></p>
                                <button className={`my-btn-one ${isReadyForPurchased || isPurchased ? '!bg-opacity-100' : '!bg-opacity-50'}`} disabled={isReadyForPurchased ? false : isPurchased ? 'Purchased' : btnText}>{isReadyForPurchased ? 'Buy Now' : isPurchased ? 'Purchased' : <span className="flex items-center gap-2"> <FaLock/> {btnText}</span>}</button>
                                <ul className="pt-6 !mt-8 border-t border-dashed border-slate-700 text-slate-400">
                                    {features.map((feature, ind) => <li key={ind} className="flex items-center gap-2"> <FaCheck></FaCheck> {feature}</li>)}
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