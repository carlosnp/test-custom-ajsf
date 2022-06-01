// These values are forbidden
const blacklist = ['forbidden', 'values'];
/**
 * Opciones
 */
export const options = {
  ajv: {
    keywords: {
      notBlackListed: {
        // Needs to be set to true for the validate function to be able to add custom errors
        errors: true,
        validate: (_schema: any, value: any) => {
          // This is what Ajv wants, and it's terrible.
          // There is no way to add custom error messages without
          // modifying the validate function's `errors` property
          const self = _schema.ajv.keywords.notBlackListed.validate;

          // Create an empty array to hold any errors
          self.errors = [];

          if (blacklist.indexOf(value) >= 0) {
            // This value is blacklisted
            self.errors.push({
              message: 'Value is blacklisted!',
              keyword: 'uniqueLabel',
              params: {
                keyword: 'uniqueLabel',
              },
            });
          }

          // Ajv needs a boolean value returned to determine if the validation was a success
          // If true is returned, no error is generated, even if the errors array is populated
          return self.errors.length === 0;
        },
      },
    },
  },
};
