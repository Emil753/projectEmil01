from flask import Flask, render_template

app = Flask(__name__) # Главная страница

@app.route('/')
def index():
    return render_template('index.html')

 # Вторая страница
@app.route('/page1')
def pag1():
    return render_template('page1.html')

@app.route('/page2')
def page2():
    return render_template('page2.html')

if __name__ == '__main__':
    app.run(debug=True)