from flask import Flask
import randomw6
app = randomw6(__name__)
app = Flask(__name__)

@app.route('/')
def index():
    return 'hello man'
    
if __name__ == '__main__':
    app.debug = True
    app.run()