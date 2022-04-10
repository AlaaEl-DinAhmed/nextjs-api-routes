export default function handler(req, res) {
  if (req.method === 'POST') {
    const { firstName, lastName, email, password, confirmPassword } = req.body;
    const user = {
      firstName,
      lastName,
      email,
      password,
      confirmPassword,
    };
    res.status(201).json({ message: 'Signup Successfully', user });
  }
}
