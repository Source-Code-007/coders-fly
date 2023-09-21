import { FaCheck, FaFreebsd, FaLock, FaStar } from "react-icons/fa";
import { LuAlignHorizontalDistributeStart } from "react-icons/lu";
import { SiGoldenline } from "react-icons/si";
import { BiSolidDiamond } from "react-icons/bi";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import UsePlan from "../../../Hooks/UsePlan";


const HeroSection = () => {
    const [myPlans, setMyPlans] = UsePlan()


    // Handle buy now function
    const handlePurchaseFunc = (planName) => {
        // rest plan
        const restPlan = myPlans.filter(mp => mp.plan !== planName)
        // changing current plan status
        const currPlan = myPlans.find(cp => cp.plan === planName)
        currPlan.status = 'purchased'

        // add new plan in custom hook conditionally 
        const newEnablePlan = planName === "Free" ? { plan: 'Starter', status: 'readyForPurchase' } : planName === "Starter" ? { plan: 'Silver', status: 'readyForPurchase' } : planName === "Silver" ? { plan: 'Gold', status: 'readyForPurchase' } : planName === "Gold" ? { plan: 'Diamond', status: 'readyForPurchase' } : ''
        console.log(newEnablePlan);
        setMyPlans([...restPlan, currPlan, newEnablePlan])

        // toast a message
        toast(`${planName} plan purchase successfully!`, {
            position: "bottom-right",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
        });
    }

    const plans = [
        {
            icon: <FaFreebsd></FaFreebsd>,
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
            icon: <LuAlignHorizontalDistributeStart></LuAlignHorizontalDistributeStart>,
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
            icon: <FaStar></FaStar>,
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
            icon: <SiGoldenline></SiGoldenline>,
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
            icon: <BiSolidDiamond></BiSolidDiamond>,
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
                <div className="pt-8 md:pt-16 xl:pt-36 pb-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4">
                    {
                        plans.map((plan, ind) => {
                            const { icon, planName, intro, price, btnText, features } = plan
                            const isReadyForPurchased = myPlans.find(mp => mp.plan === planName)?.status === 'readyForPurchase'
                            const isPurchased = myPlans.find(mp => mp.plan === planName)?.status === 'purchased'
                            return <div key={ind} className="rounded-lg bg-white bg-opacity-5 text-white space-y-4 md:space-y-6 p-5">
                                <span className="text-3xl text-yellow-500">{icon}</span>
                                <div className="space-y-4">
                                    <h2 className="my-title-2">{planName}</h2>
                                    <p className="text-slate-300">{intro}</p>
                                </div>
                                <p className="my-title">${price} <span className="text-slate-400 text-sm font-normal">50$ Return</span></p>
                                <button className={`my-btn-one ${isReadyForPurchased ? '!bg-opacity-100' : '!bg-opacity-50'}`} disabled={isReadyForPurchased ? false : true} onClick={() => handlePurchaseFunc(planName)}>{isReadyForPurchased ? 'Buy Now' : isPurchased ? 'Purchased' : <span className="flex items-center gap-2"> <FaLock /> {btnText}</span>}</button>
                                <ul className={`pt-6 !mt-8 border-t-2 border-dashed border-slate-700 text-slate-400 space-y-3 ${(!isPurchased && !isReadyForPurchased) && 'blur'}`}>
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
                theme="light"
            />
        </div>
    );
};

export default HeroSection;