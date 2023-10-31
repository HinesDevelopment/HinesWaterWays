
import tkinter as tk

def check_login():
    username = username_entry.get()
    password = password_entry.get()
    if username == "abc" and password == "abc":
        # Successful login, proceed to the slot machine game
        slot_machine_game()

root = tk.Tk()
root.title("Sign In")

username_label = tk.Label(root, text="Username:")
username_label.pack()
username_entry = tk.Entry(root)
username_entry.pack()

password_label = tk.Label(root, text="Password:")
password_label.pack()
password_entry = tk.Entry(root, show="*")  # Passwords should be hidden
password_entry.pack()

login_button = tk.Button(root, text="Login", command=check_login)
login_button.pack()

root.mainloop()
