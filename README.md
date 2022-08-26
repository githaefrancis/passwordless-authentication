# Passwordless Authentication

## Description

A passwordless system created with Django and React

## Author

Francis Githae



## Tools and Technologies

- Python-Programming language
- Django - backedn.
- SQlite
- Material UI
- React - Frontend


## Setting up the project locally

1. Clone the repository
```bash
git clone git@github.com:githaefrancis/passwordless-authentication.git
```

2. Navigate to the project folder
```
cd passwordless-authentication/backend
```
3. Create and activate the virtual environment

```bash
python3 -m venv virtual

source virtual/bin/ activate
```

4. Install dependencies from the requirements.txt

```bash
pip install -r requirements.txt
```
5. Create database


6. Create .env file

```bash
export SENDGRID_API_KEY=<>

export TWILIO_SID=<>

export TWILIO_AUTH_TOKEN=<>

export secret=<>
```

7. Load .env

```bash 
source .env
```

8. Migrate models

```
python3 manage.py migrate
```
9. Run tests

```
python3 manage.py test
```

10. Run the app

```
python3 manage.py runserver

```


## Setup Frontend
1. Navigate to the project folder
```
cd passwordless-authentication/frontend/passworlessapp
```
2. Install dependencies

```
npm install 
```
3. Run

```
npm start
```


## Contact

Email: mureithigithae@gmail.com

## License

This project is under the MIT License [click here for more information](LICENSE)

&copy; 2022 Francis Githae

