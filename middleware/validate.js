const pwMinLenght = 4;
const pwMaxLenght = 8;

const validate = (req, res, next) => {
  const { email, password } = req.body;
  const isValid = email.includes("@") && email.includes(".com");
  const isPwValid =
    password.length >= pwMinLenght && password.length <= pwMaxLenght;

  if (!isValid || !isPwValid) {
    if (req.path.includes("register")) {
      return res.status(400).json({ message: "invalid data" });
    }
    return res.status(400).json({ message: "email or password is incorrect" });
  }

  next();
};

module.exports = validate;
