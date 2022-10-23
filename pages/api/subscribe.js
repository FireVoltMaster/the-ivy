import mailchimp from '@mailchimp/mailchimp_marketing';

mailchimp.setConfig({
  apiKey: process.env.MAILCHIMP_API_KEY,
  server: process.env.MAILCHIMP_API_SERVER
});

export default async function subscribe (req, res) {
  const { email } = req.body;

  if (!email) {
    return res.status(400).json({ error: 'You need an email address to join a newsletter' });
  }

  try {
    await mailchimp.lists.addListMember(process.env.MAILCHIMP_AUDIENCE_ID, {
      email_address: email,
      status: 'subscribed'
    });

    return res.status(201).json({ error: '' });
  } catch (error) {
    return res.status(500).json({ error: error.message || error.toString() });
  }
};

// import axios from 'axios'

// export default async function subscribe (req, res) {
//   const { email } = req.body

//   if (!email || !email.length) {
//     return res.status(400).json({ error: 'Email is required' })
//   }

//   const API_KEY = process.env.MAILCHIMP_API_KEY
//   const API_SERVER = process.env.MAILCHIMP_API_SERVER
//   const AUDIENCE_ID = process.env.MAILCHIMP_AUDIENCE_ID
  
//   const url = `https://${API_SERVER}.api.mailchimp.com/3.0/lists/${AUDIENCE_ID}/members`

//   const data = {
//     email_address: email,
//     status: 'subscribed'
//   }

//   const options = {
//     headers: {
//       'Content-Type': 'application/json',
//       Authorization: `api_key ${API_KEY}`
//     }
//   }

//   try {
//     const response = await axios.post(url, data, options)
//     if (response.status >= 400) {
//       return res.status(400).json({
//         error: `There was an error subscribing to the newsletter. Shoot me an email and I'll add you to the list.`
//       })
//     }
//     return res.status(201).json({ message: 'success' })
//   } catch (error) {
//     console.log(error)
//     return res.status(500).json({ error: error.message })
//   }
// }