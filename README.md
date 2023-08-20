# Simple Web submitForm Application

This is a simple web application that allows users to submit their name and a message. The data is saved server-side and can be displayed back to the user upon submission.

## Technologies Used

- Node.js
- React.js (Next.js framework)
- Tailwind CSS

## Installation

1. Clone this repository to your local machine, Or unzip the zip file into a folder on your local machine.
2. Navigate to the project directory in your terminal with any code editor of your choice.
3. Install dependencies using the following command:

`npm install`

This will install all the node packages, tailwindcss and react next packages which was used for the web app development.


## The next stage

1. Start the development server with the following command:

2. Open your web browser and go to `http://localhost:3000`.
3. Fill in the name and message fields and click the "Submit" button.

A display message will be shown if all fields are filled in.

Also if any of the form field is empty, an error message will be displayed.

Using Nextjs as the react framework, the states are replaced automatically whenever one of the input fields is cleared and resubmitted.

## Project Structure

- The front-end code is located in the `pages` directory.
- The back-end API code is located in the `api` directory called 'submit.js'.

## API Endpoints

- `POST /api/submit`: Submits a name and message. Returns the submitted data.
- `GET /api/submit`: Fetches the latest submission 

## Please note

- This formsubmit-app application stores the latest submission in memory and does not use persistent storage nor database like mongodb.



