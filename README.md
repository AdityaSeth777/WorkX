<p align="center">
  <a href="" rel="noopener">
 <img width=200px height=200px src="./WorkX.jpg" alt="WorkX Logo"></a>
</p>

<h3 align="center">WorkX</h3>

<div align="center">

![](https://komarev.com/ghpvc/?username=AdityaSeth777&color=blue)
[![Status](https://img.shields.io/badge/status-active-success.svg)]()
[![GitHub Issues](https://img.shields.io/github/issues/RohanTech231/WorkX.svg)](https://github.com/AdityaSeth777/WorkX/issues)
[![GitHub Pull Requests](https://img.shields.io/github/issues-pr/AdityaSeth777/WorkX.svg)](https://github.com/RohanTech231/WorkX/pulls)
[![License](https://img.shields.io/badge/license-MIT-blue.svg)](/LICENSE)

</div>

---

<p align="justify"> WorkX is a Django-based job portal that connects freelancers with businesses. It features separate authentication for freelancers and businesses, Google Sign-In integration, and dynamic dashboards for job listings and postings. The project also includes a React frontend with a sleek black-themed UI.
    <br> 
</p>

## 📝 Table of Contents

- [About](#about)
- [Setup](#setup)
- [Deployment](#deployment)
- [Built Using](#built)
- [Authors](#authors)
- [Acknowledgments](#acknowledgement)

## 🧐 About <a name = "about"></a>
<p align="justify">
The WorkX project is a comprehensive job platform designed to streamline the interaction between freelancers and businesses. Built with Django, React, and Firebase, it offers dual authentication systems—one for freelancers and another for businesses—integrated with Google Sign-In. The platform’s backend leverages Django Rest Framework (DRF) to provide a secure and scalable API, while the frontend, crafted with React, offers a sleek, black-themed user interface. The project integrates various APIs for dynamic content, such as live weather updates and currency conversion rates. 
</p><p align="justify">
Additionally, Elasticsearch is used for advanced search functionalities, making it easier to match freelancers with relevant job postings. The business dashboard allows companies to post jobs and manage their listings, which are stored in a robust database and retrieved by freelancers through their dedicated portal. The platform is optimized for performance and scalability, ensuring a smooth user experience.
</p>


## Setup
<a name = "setup"></a>
<p align="justify">
<details>
  <summary><strong>Frontend Setup Instructions</strong></summary>
  
- Fork and Clone the repo using
```bash
 git clone https://github.com/Rohantech231/WorkX.git
 cd WorkX
```

- Get the API key from [https://api.imgbb.com/](https://api.imgbb.com/) and replace it with `REACT_APP_IMGBB_API_KEY` in `.env.example`

- Get a new API key from [https://smtpjs.com/](https://smtpjs.com/) and replace it with `REACT_APP_API_KEY` in `.env.example`

- Rename the file `.env.example` to `.env`

- Install node dependencies
```bash
 npm install
```

- Run Server at localhost using
```bash
 npm start
```
  
</details>

<details>
  <summary><strong>Backend Setup Instructions</strong></summary>

- Fork and Clone the repo using
```bash
 git clone https://github.com/Rohantech231/WorkX.git
 cd WorkX
```

- Change Branch to `backend` using 
```bash
 git checkout backend
```

- Setup Virtual environment
```bash
 python3 -m venv env
```

- Activate the virtual environment
```bash
 source env/bin/activate
```

- Install dependencies using
```bash
 pip install -r requirements.txt
```

- Make migrations using
```bash
 python manage.py makemigrations
```

- Migrate Database
```bash
 python manage.py migrate
```

- Create a superuser
```bash
 python manage.py createsuperuser
```

- Run server using
```bash
 python manage.py runserver
``` 
</details>

## Deployment <a name = "deployment"></a>
<p align="justify">

<details>
  <summary><strong>Deploying the Application on AWS</strong></summary>

- **Sign up for AWS:** If you don't already have an AWS account, [sign up here](https://aws.amazon.com/).

- **Install AWS CLI:** Download and install the AWS CLI from [here](https://aws.amazon.com/cli/).

- **Configure AWS CLI:** Run the following command to configure your AWS CLI with your credentials:
```bash
 aws configure
```

- **Set up Elastic Beanstalk (EB):**
  - Install the EB CLI using pip:
    ```bash
     pip install awsebcli
    ```
  - Initialize your Elastic Beanstalk application:
    ```bash
     eb init -p python-3.8 WorkX
    ```
    Replace `python-3.8` with your Python version.
  
- **Deploy the application:**
  - Create an environment and deploy:
    ```bash
     eb create workx-env
     eb deploy
    ```
  - To open your application in the browser:
    ```bash
     eb open
    ```

- **Monitor and manage your application:**
  - View the status of your environment:
    ```bash
     eb status
    ```
  - View logs:
    ```bash
     eb logs
    ```

- **To terminate the environment:**
  ```bash
   eb terminate workx-env
  ```

For more detailed information, refer to the [AWS Elastic Beanstalk documentation](https://docs.aws.amazon.com/elasticbeanstalk/latest/dg/Welcome.html).
  
</details>


## ⛏️ Built Using <a name = "built"></a>

### Frontend:
- React: For building the user interface.
- JavaScript (ES6+): Core programming language for frontend development.
- HTML5 & CSS3: Markup and styling.
- React Router: For navigation and routing.
- Bootstrap/Tailwind CSS: For responsive and modern UI components.
- Firebase: For authentication and real-time data management.
- Google Sign-In: For social login functionality.

### Backend:
- Django: Python-based web framework for the backend.
- Django Rest Framework (DRF): For building RESTful APIs.
- Django-CORS-Headers: To handle Cross-Origin Resource Sharing (CORS) in the API.
- Django Simple JWT: For token-based authentication.
- Django-Phonenumber-Field: For handling and validating phone numbers.
- Django-Heroku: For deploying the application to Heroku.

### Database:
- PostgreSQL: Primary database for storing user data, job postings, and other persistent information.

### Search & Indexing:
- Elasticsearch: For advanced search functionalities.
- Elasticsearch DSL: High-level library for Elasticsearch.

### Deployment & DevOps:
- AWS: Used for deployment.
- Git: Version control system.
- GitHub: For code hosting and collaboration.

### Additional Tools & Libraries:
- Webpack: Module bundler for JavaScript.
- Babel: JavaScript compiler.
- Node.js & npm: For managing frontend dependencies and tools.
- ESLint: For linting and code quality.
- Prettier: Code formatting tool.



## ✍️ Authors <a name = "authors"></a>

- [@AdityaSeth777](https://github.com/AdityaSeth777)
- [@RohanTech231](https://github.com/RohanTech231) 

## 🎉 Acknowledgements <a name = "acknowledgement"></a>

- Inspiration
- References
