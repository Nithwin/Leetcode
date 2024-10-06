import win32security

try:
    # Check if a specific user account has administrative privileges
    user_sid = win32security.LookupAccountName(None, 'Administrator')[0]
    token = win32security.GetTokenInformation(win32security.GetCurrentProcess(), win32security.TokenUser)
    admin_group_sid = win32security.LookupAccountSid(None, win32security.TokenUser(token)[0])

    if admin_group_sid in win32security.GetGroupMembership(user_sid):
        print("Administrator account has administrative privileges.")
    else:
        print("Administrator account does not have administrative privileges.")
except Exception as e:
    print(f"An error occurred: {e}")
