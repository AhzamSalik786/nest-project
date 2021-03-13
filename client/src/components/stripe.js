import Stripe from 'stripe';
const stripe = new Stripe('pk_test_51IJuokHxwLekD51a9W5LKvEmSgkl7aVedkjVR3xDqAuOMM6XJVgXp7a2vKfWZI6sTHO4KoJ9VLwIaO35cLuTHwVK00d6cyGvRe');

(async () => {
  const customer = await stripe.customers.create({
    email: 'ahzamsalik786@gmail.com',
  });

  console.log(customer.id);
})();