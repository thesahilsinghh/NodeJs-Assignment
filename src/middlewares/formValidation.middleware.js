export const formValidator = (req, res, next) => {
  const { name, email, phoneNumber, isGraduate } = req.body;

  if (!name || !email || !phoneNumber || isGraduate === undefined) {
    return res.status(400).send({ error: "All fields are required" });
  }
  next();
};
