
# Maize leaf Disease classification

This repository contains a comprehensive Maize Leaf Disease classification project that includes data augumentation, machine learning implementation in a Django backend, and a React.js frontend. The project is containerized using Docker Compose for easy deployment and scalability.
## Table of Contents

- [Introduction](#introduction)
- [Project Scope and Features](#project-scope-and-features)
- [Project Structure](#project-structure)
- [Requirements](#requirements)
- [Installation and Setup](#installation-and-setup)
- [Demo](#demo)
- [Contributing](#contributing)
- [License](#license)
## Introduction
Maize is the second most widely cultivated crop after rice in Nepal. In 2020/21, the total area under maize was 979,776 ha with the production of 2,997,773 MT and productivity of 3.06 MT/ha. In past 10 years the yield of Maize has increased by 0.56 MT/ha .

#### Northen Leaf Blight
Northern leaf blight (NLB) is a fungal disease that affects maize crops worldwide. It is caused by the pathogen Exserohilum turcicum, which infects the leaves and reduces photosynthesis, grain yield and quality. NLB symptoms include elongated, tan or gray lesions on the leaves that may coalesce and cover large areas of the leaf surface.The fungus survives on infected plant debris and can be dispersed by wind or rain to new hosts. The disease is favored by moderate temperatures and high humidity, and can be controlled by using resistant varieties, crop rotation, fungicide application and proper residue management.

#### Rust
Rust is a fungal disease that affects maize and other cereal crops. It is caused by different species of Puccinia, which produce orange or brown spores on the leaves and stems of the plants. Rust can reduce yield and quality of maize by interfering with photosynthesis and transpiration, and by predisposing the plants to secondary infections. Rust can be managed by using resistant varieties, crop rotation, fungicides, and biological control agents.

## Project Scope and Features
The Maize Leaf Disease classification project comprises the following key features:

1. Data Preprocessing: The provided dataset, containing Maize leaf with three classes Blight, Rust and Healthy, undergoes Feature Engineering to handle  normalization, and feature engineering. This ensures that the data is suitable for training the Deep learning model.

2. Machine Learning Model: We implement a classification model using a suitable algorithm (CNN) to predict the potability of Maize Leaf Condition class based on the input parameters.

3. Django Backend: The backend, built with Django, serves as the foundation for the classification model. It handles data processing, prediction requests, and interactions with the frontend.

4. React.js Frontend: The frontend, developed with React.js, offers an intuitive web interface where users can input water quality parameters and view the predicted potability class.

5. Docker Compose: The project is containerized using Docker Compose, making it easy to deploy and run the entire application stack consistently across different environments.
## Project Structure
The project is organized into the following directories:

- `/Backend`: Django backend implementation.
- `/leaf`: React.js frontend implementation.
- `/notebook`: Ipunb files.
- `docker-compose.yml`: Docker Compose configuration file for orchestrating the entire application.
## Requirements
To run this project locally, you need to have the following installed on your system:
- [Docker](https://docs.docker.com/desktop/install/windows-install/)
- [Docker Compose](https://docs.docker.com/compose/)

## Installation and Setup

1. Clone the repository to your local machine:

```bash
git clone https://github.com/sankalpa-adhikari-sa/Maize-Leaf-Disease-Classification.git
```
2. Change directory to the project folder:
```bash
cd Maize-Leaf-Disease-Classification
```
3. Build the Docker images and set up the project:
```bash
docker-compose build
docker-compose up -d
```
4. Access the application:
- Frontend
```bash
http://localhost:5173
```
- Backend
```bash
http://localhost:5000
```
## Demo

Here's a Quick demo how webapp looks like


https://github.com/sankalpa-adhikari-sa/Maize-Leaf-Disease-Classification/assets/106131019/1b7e16d5-7fa7-4dd2-a25c-a0e8160c97dd


## Contributing

Contributions are always welcome!

If you find any issues or want to add new features, feel free to submit a pull request.


## License

This project is licensed under the [MIT](https://choosealicense.com/licenses/mit/) License. You are free to modify and distribute the code as long as you retain the original license and attribution.
