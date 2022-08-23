import secrets,random,math

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

