import tkinter as tk

def check_credentials():
    username = username_entry.get()
    password = password_entry.get()

    if username == "abc" and password == "abc":
        result_label.config(text="Sign-in successful")
    else:
        result_label.config(text="Invalid username or password")

# Create the main window
root = tk.Tk()
root.title("Sign In")

# Create and place username label and entry
username_label = tk.Label(root, text="Username:")
username_label.pack()
username_entry = tk.Entry(root)
username_entry.pack()

# Create and place password label and entry
password_label = tk.Label(root, text="Password:")
password_label.pack()
password_entry = tk.Entry(root, show="*")  # Use "show" to hide the password
password_entry.pack()

# Create and place sign-in button
signin_button = tk.Button(root, text="Sign In", command=check_credentials)
signin_button.pack()

# Create and place result label
result_label = tk.Label(root, text="")
result_label.pack()

# Start the GUI main loop
root.mainloop()
