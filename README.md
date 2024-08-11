
## Setup

<details>
  <summary><strong>Frontend Setup Instructions</strong></summary>
  
- Fork and Clone the repo using
```bash
$ git clone https://github.com/Rohantech231/WorkX.git
$ cd WorkX
```

- Get the API key from [https://api.imgbb.com/](https://api.imgbb.com/) and replace it with `REACT_APP_IMGBB_API_KEY` in `.env.example`

- Get a new API key from [https://smtpjs.com/](https://smtpjs.com/) and replace it with `REACT_APP_API_KEY` in `.env.example`

- Rename the file `.env.example` to `.env`

- Install node dependencies
```bash
$ npm install
```

- Run Server at localhost using
```bash
$ npm start
```
  
</details>

<details>
  <summary><strong>Backend Setup Instructions</strong></summary>

- Fork and Clone the repo using
```bash
$ git clone https://github.com/Rohantech231/WorkX.git
$ cd WorkX
```

- Change Branch to `backend` using 
```bash
$ git checkout backend
```

- Setup Virtual environment
```bash
$ python3 -m venv env
```

- Activate the virtual environment
```bash
$ source env/bin/activate
```

- Install dependencies using
```bash
$ pip install -r requirements.txt
```

- Make migrations using
```bash
$ python manage.py makemigrations
```

- Migrate Database
```bash
$ python manage.py migrate
```

- Create a superuser
```bash
$ python manage.py createsuperuser
```

- Run server using
```bash
$ python manage.py runserver
``` 
</details>

## Deployment

<details>
  <summary><strong>Deploying the Application on AWS</strong></summary>

- **Sign up for AWS:** If you don't already have an AWS account, [sign up here](https://aws.amazon.com/).

- **Install AWS CLI:** Download and install the AWS CLI from [here](https://aws.amazon.com/cli/).

- **Configure AWS CLI:** Run the following command to configure your AWS CLI with your credentials:
```bash
$ aws configure
```

- **Set up Elastic Beanstalk (EB):**
  - Install the EB CLI using pip:
    ```bash
    $ pip install awsebcli
    ```
  - Initialize your Elastic Beanstalk application:
    ```bash
    $ eb init -p python-3.8 WorkX
    ```
    Replace `python-3.8` with your Python version.
  
- **Deploy the application:**
  - Create an environment and deploy:
    ```bash
    $ eb create workx-env
    $ eb deploy
    ```
  - To open your application in the browser:
    ```bash
    $ eb open
    ```

- **Monitor and manage your application:**
  - View the status of your environment:
    ```bash
    $ eb status
    ```
  - View logs:
    ```bash
    $ eb logs
    ```

- **To terminate the environment:**
  ```bash
  $ eb terminate workx-env
  ```

For more detailed information, refer to the [AWS Elastic Beanstalk documentation](https://docs.aws.amazon.com/elasticbeanstalk/latest/dg/Welcome.html).
  
</details>
