import {Elements} from '@stripe/react-stripe-js';
import {loadStripe} from '@stripe/stripe-js';

// Make sure to call `loadStripe` outside of a component’s render to avoid
// recreating the `Stripe` object on every render.
const stripePromise = loadStripe('pk_test_51NoiuxA0Wdj6YMZbxZ2YpHpr4GoYnqHrZSm1MURYmtu2Tdl2odtp4kPNdIDfyt7maFJwMYPAFJhqhUrFdhxnfkTG00i36KyXhA');

export default function App() {
  const options = {
    // passing the client secret obtained from the server
    clientSecret: '{{CLIENT_SECRET}}',
  };

  return (
    <Elements stripe={stripePromise} options={options}>
      <CheckoutForm />
    </Elements>
  );
};