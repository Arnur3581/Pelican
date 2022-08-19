import re
from flask import Flask, render_template

app = Flask(__name__)


@app.errorhandler(404)
def page_404(e):
  return render_template("error.html"), 404


@app.route("/")
@app.route("/home")
def index():
  return render_template('index.html')


@app.route("/menu")
def menu():
  return render_template("menu.html")


@app.route("/delivery")
def delivery():
  return render_template("delivery.html")

@app.route("/scam")
def scam():
  return render_template("scam.html")
if __name__ == '__main__':
  app.run(debug=True)