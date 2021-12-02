# CannabisMD

CannabisMD is a web application for patients and doctors to manage medical records. The app is built to support the doctors' workflow by providing the most convenient and intuitive interaction of multiple features.

# Demo

Here is a working live demo: https://cannabismd-demo.firebaseapp.com/

# Instructions

- Features for patients:
  - No need to log in
  - Submit an online evaluation form
  - Submit an appointment form
- Features for doctors or managers:
  - To access managment features, you need to log in through the Doctor Portal page
  - Either sign up for a new account or use provided test account
  - After logging in, there are four features available: managing new inquiries, managing returning patients, searching for a specific patient, and download patient records
  - Managing new inquiries:
    On the left side of this page, it displays the latest 20 new inquiry records. You can open a modal to see detailed information or add new certifications. On the right side are two forms - A. an intake form to manually add a patient's information if the doctor received an inquiry call B. a form to add inquiries received through online form submission from patients into the database. While adding the entry, an excel form will be automatically generated and downloaded for the doctor to import into Google contacts
  - Managing returning patients:
    This feature is built to accomendate doctors’ tasks to contact patients who got certified last year to get their certification renewed. By default, the app retrieves the information of all patients certified from the same month last year. You can also select a specific month.
  - Searching for patients's records by either name, ID number or medical code
  - Download excel files of patients who make inquires or get certified within a month

# Tech/Frameworks/Libraries

- React.js
- Firestore
- Firebase
- Material-UI
- Formik
