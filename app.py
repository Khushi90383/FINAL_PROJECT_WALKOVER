from flask import Flask,render_template
app = Flask(__name__)

@app.route('/')
def userlogin():
    return render_template("user_login.html")

@app.route('/admin-login')
def adminlogin():
    return render_template("admin_login.html")

@app.route('/quiz')
def quiz():
    return render_template("mcq.html")

@app.route('/admin')
def admin():
    return render_template("admin.html")
if __name__=="__main__":
    app.run(debug=True)