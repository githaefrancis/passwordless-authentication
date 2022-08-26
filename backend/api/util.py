import secrets,random,math
import os
from sendgrid import SendGridAPIClient
from sendgrid.helpers.mail import Mail
from twilio.rest import Client 


def generate_magic_token():
    """
    Method to generate the token to be sent via email
    """
    token=secrets.token_hex(32)
    return token

def generate_otp():
    """
    Method to generate numeric OTP
    """

    digits=[0,1,2,3,4,5,6,7,8,9]
    OTP=""

    for i in range(6):
        OTP += str(digits[math.floor(random.random()*10)])

    return OTP


def send_email(address,token):
    message = Mail(
        from_email='francizgithae@gmail.com',
        to_emails=address,
        subject='Login Link',
        html_content='<p>Hello. Please use the below Link to confirm your Login <br> <a href="http://localhost:3000/verify?token={}"><button>Click To Verify<button></a></p>'.format(token),
        is_multiple=True)
    print(os.environ.get('SENDGRID_API_KEY'))
    try:
        sg = SendGridAPIClient(os.environ.get('SENDGRID_API_KEY'))
        response = sg.send(message)
        print(response.status_code)
        print(response.body)
        print(response.headers)
    except Exception as e:
        print(e.message)


def send_sms(phone,OTP): 
    account_sid = os.environ.get('TWILIO_SID') 
    auth_token = os.environ.get('TWILIO_AUTH_TOKEN') 
    client = Client(account_sid, auth_token) 
    
    message = client.messages.create(  
                                messaging_service_sid='MG02dfafb9fbe5009055834f4c940c522d', 
                                body="Your OTP is {}".format(OTP),      
                                to='+254711405235' 
                            ) 
    
    print(message.sid)