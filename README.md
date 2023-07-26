# JavaScript Form Validation Project

Forms are an integral part of our website. We need to verify all the details so we know the person filling the form is human and not a bot. This project involves creating a form with the following required fields and performing validation on each field:

## Required Fields

- Full Name
- Email ID
- Phone Number
- Password
- Confirm Password

## Validation Criteria

The following validation criteria must be met for each field:

- **Name**: Must not be less than 5 characters.
- **Email ID**: Should have the '@' character in it.
- **Phone Number**: Should not be "123456789" and must be a 10-digit number.
- **Password**: Cannot be 'password' or the same as the user's name, and should be at least 8 characters long.
- **Confirm Password**: Must match the Password field.

Whenever any of the above criteria are not met, an appropriate error message should be displayed.

## Getting Started

1. Clone this repository or download the project files.

2. Open the `index.html` file in your web browser.

3. The form interface will be displayed, containing the required fields and validation logic.

## How It Works

1. Fill in the form fields as required.

2. The validation will be performed automatically when you click the "Submit" button.

3. If any field fails validation, an error message will be displayed next to the respective field.

4. To submit the form successfully, ensure that all fields meet the validation criteria.

## Important Note

This project focuses on client-side validation using JavaScript. In real-world scenarios, it's essential to also implement server-side validation to ensure data integrity and security.

## Customize and Extend

You can customize the form's appearance and add additional validation conditions or fields as per your project requirements.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.


---

