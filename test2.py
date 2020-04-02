from flask import Flask
from flask import render_template

app = Flask(__name__)

@app.route('/')
def index():
    #路徑不須加 templates
    return render_template(r"hello.py")

if __name__ == '__main__':
    app.run(host='0.0.0.0',port=10200)
   