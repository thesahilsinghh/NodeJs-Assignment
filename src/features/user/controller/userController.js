import Form from "../model/form.js";
import FormData from "../model/usersModel.js";
import { v4 as uuidv4 } from "uuid";

export default class UserController {
  // Create form
  async createForm(req, res) {
    const { title, name, email, phoneNumber, isGraduate } = req.body;

    try {
      const form = await Form.create({
        uniqueId: uuidv4(),
        title,
        name,
        email,
        phoneNumber,
        isGraduate,
      });

      return res.status(201).send(form);
    } catch (err) {
      console.log(err);
      return res.status(400).send(err);
    }
  }

  // Add to form
  async addToForm(req, res) {
    const { form_title } = req.query;
    const { name, email, phoneNumber, isGraduate } = req.body;

    try {
      const form = await Form.findOne({ where: { title: form_title } });
      if (!form) {
        return res.status(404).json({ error: "Form not found" });
      }
      const formData = await FormData.create({
        uniqueId: uuidv4(),
        formId: form.uniqueId,
        name,
        email,
        phoneNumber,
        isGraduate,
      });
      res.status(201).send(formData);
    } catch (err) {
      res.status(400).json({ error: err.message });
    }
  }

  // Get data
  async getData(req, res) {
    const { form_title } = req.query;

    try {
      const form = await Form.findOne({
        where: { title: form_title },
        include: FormData,
      });
      if (!form) {
        return res.status(404).json({ error: "Form not found" });
      }

      res.status(200).send(form.FormData);
    } catch (err) {
      res.status(400).send({ error: err.message });
    }
  }
}
