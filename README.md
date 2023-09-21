# Coders Fly

# Live Link: https://coders-fly.netlify.app/

# Description
This project implements a subscription-based pricing model with multiple plans: Free, Starter, Silver, Gold, and Diamond. Each plan offers different features and capabilities.


# Free Plan:
- The Free plan is the initial plan available to users.
- The "Buy Now" button for the Free plan is locked by default.
- When a user selects and purchases the Free plan, it unlocks the "Buy Now" button for the Starter plan.

# Starter Plan:
- After purchasing the Free plan, users can select and purchase the Starter plan.
- The "Buy Now" button for the Starter plan is unlocked.
- When a user selects and purchases the Starter plan, it unlocks the "Buy Now" button for the Silver plan.

# Silver Plan:
- After purchasing the Starter plan, users can select and purchase the Silver plan.
- The "Buy Now" button for the Silver plan is unlocked.
- When a user selects and purchases the Silver plan, it unlocks the "Buy Now" button for the Gold plan.

# Gold Plan:
- After purchasing the Silver plan, users can select and purchase the Gold plan.
- The "Buy Now" button for the Gold plan is unlocked.
- When a user selects and purchases the Gold plan, it unlocks the "Buy Now" button for the Diamond plan.

# Diamond Plan:
- The Diamond plan is the highest-tier plan.
- After purchasing the Gold plan, users can select and purchase the Diamond plan.
- The "Buy Now" button for the Diamond plan is unlocked.


# Technical Details
This project is built using React and follows best practices in React development. It utilizes state management and component structure to implement the plan selection and "Buy Now" button behavior.