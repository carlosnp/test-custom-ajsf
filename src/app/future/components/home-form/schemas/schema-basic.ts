/**
 * Esquema basico
 */
export const schemaBasic = {
  type: "object",
  title: "Comment",
  "properties": {
    "name": {
      title: "Nombre",
      type: "string",
      notBlackListed: true,
    },
    "email": {
      title: "Email",
      type: "string",
      "pattern": "^\\S+@\\S+$",
      "description": "Email will be used for evil."
    },
    "comment": {
      title: "Comentario",
      type: "string",
      "maxLength": 20,
      "validationMessage": "Don't be greedy!"
    }
  },
  required: ["name", "email", "comment"]
};
