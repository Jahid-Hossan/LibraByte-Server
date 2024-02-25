

const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);

// console.log(process.env.STRIPE_SECRET_KEY, 'here')

const payments = async (req, res) => {
    try {
        const price = req.body;
        const amount = parseInt(price.amount * 100)
        console.log(amount)
        const paymentIntent = await stripe.paymentIntents.create({
            amount: amount,
            currency: 'usd',
            payment_method_types: ['card']
        })



        res.send({
            clientSecret: paymentIntent.client_secret
        })


    } catch (error) {
        console.log(error)
    }
}

module.exports = payments;