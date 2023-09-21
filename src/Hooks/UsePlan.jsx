import { useState } from "react";

const UsePlan = () => {
    const [myPlans, setMyPlans] = useState([{plan:'Free', status:'readyForPurchase'}])
    return [myPlans, setMyPlans]
};

export default UsePlan;