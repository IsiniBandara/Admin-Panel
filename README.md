
## Introduction

Welcome to the README file for my final year research project on "Sea Turtle Nesting Area Identification using Machine Learning." In this project, I aim to identify suitable nesting areas for sea turtles using a trained model based on the Random Forest algorithm. The project also includes the development of a Flask API for predicting nesting suitability areas and an admin dashboard using the MERN stack technology for conservation center owners.

## Project Overview

The project consists of the following components:

1. **Data Collection and Preprocessing:** I collected a comprehensive dataset containing various environmental factors that influence sea turtle nesting. The dataset has been preprocessed to remove any inconsistencies or outliers.

2. **Machine Learning Model:** A Random Forest machine learning model has been trained using the preprocessed dataset. The model has been optimized to predict nesting suitability areas based on the provided features.

3. **Flask API Development:** A Flask API has been developed to provide an interface for users to input environmental data and receive predictions about the suitability of a given area for sea turtle nesting. The API handles requests, communicates with the trained model, and returns predictions.

4. **Admin Dashboard (MERN Stack):** An admin dashboard has been built using the MERN (MongoDB, Express.js, React, Node.js) stack technology. This dashboard is designed for conservation center owners to manage and monitor sea turtle nesting areas, view predictions, and make informed decisions for conservation efforts.

## Project Structure

The project is organized as follows:

- **data**: Contains the dataset used for training the Random Forest model.
- **machine_learning**: Includes code for data preprocessing, model training, and model evaluation.
- **flask_api**: Contains the Flask API code for handling predictions based on user input.
- **admin_dashboard**: Includes the code for the MERN stack-based admin dashboard.
- **documentation**: Contains project-related documentation, diagrams, and additional resources.

## Getting Started

To set up and run different components of the project, follow these steps:

1. **Data Collection and Preprocessing:** Ensure the dataset is available in the `data` folder. Use the code in the `machine_learning` directory to preprocess and train the Random Forest model.

2. **Flask API:** Navigate to the `flask_api` directory. Install the required dependencies using `pip install -r requirements.txt`. Run the Flask server using `python app.py`.

3. **Admin Dashboard (MERN Stack):** Navigate to the `admin_dashboard` directory. Set up the MongoDB database and configure the backend and frontend components. Refer to the README within the `admin_dashboard` directory for detailed instructions.

## Hosting

The Flask API can be hosted on Render or any other suitable hosting platform. Ensure that the API endpoints are properly exposed and accessible.

## Conclusion

This research project successfully addresses the identification of sea turtle nesting areas using a Random Forest machine learning model. The developed Flask API and MERN stack-based admin dashboard provide valuable tools for predicting nesting suitability and managing conservation efforts. The project contributes to the conservation of sea turtles by leveraging modern technologies for data analysis and decision-making.

## Screens

1. Login Screen
<img width="1440" alt="Screenshot 2023-09-10 at 14 12 35" src="https://github.com/IsiniBandara/Admin-Panel/assets/67850663/16ed828d-8f89-41ab-8eaf-013bfc3b9bea">

2. Overview

<img width="1440" alt="Screenshot 2023-09-10 at 14 17 26" src="https://github.com/IsiniBandara/Admin-Panel/assets/67850663/8dfdacc9-cfc0-4bb3-b9c3-f3d93f44b998">
<img width="1440" alt="Screenshot 2023-09-10 at 14 17 51" src="https://github.com/IsiniBandara/Admin-Panel/assets/67850663/27d438f6-3c92-42d9-a8e1-5ad2afcb64f6">

3. Nesting Area Prediction

<img width="1440" alt="Screenshot 2023-09-10 at 14 17 32" src="https://github.com/IsiniBandara/Admin-Panel/assets/67850663/7e89a81f-e696-4ec1-ab2b-219320ce6cad">
<img width="1440" alt="Screenshot 2023-09-10 at 14 26 13" src="https://github.com/IsiniBandara/Admin-Panel/assets/67850663/6613df03-167d-4aa3-90b2-1b87462e02c4">

4. Details
   
<img width="1440" alt="Screenshot 2023-09-10 at 14 17 41" src="https://github.com/IsiniBandara/Admin-Panel/assets/67850663/112affc0-f954-4940-9cba-4d003cebaf93">







