from flask import Flask, jsonify, Response
app = Flask(__name__)


# mocked-up method where you would get your db data
def get_db_data():
    my_db = []

    rec1 = {
        'Id': 5445,
        "SessionStartTime":"2017-01-10T08:00:00",
        "Room":"Indigo Bay",
        "Title":"7 Languages in 7 Hours",
        "SessionType":"Pre-Compiler",
        "Category":"Programming Principles"}

    rec2 = {
        'Id': 5994,
        "SessionStartTime":"2017-01-10T09:00:00",
        "Room":"Orange",
        "Title":"Bring your Big Data to life using JavaScript and a browser using D3.js",
        "SessionType":"Pre-Compiler",
        "Category":"Data (big/small/otherwise)"}

    rec3 = {
        'Id': 5917,
        "SessionStartTime":"2017-01-10T09:00:00",
        "Room":"Sagewood",
        "Title":"Commutication: Moving Ideas with Words",
        "SessionType":"Pre-Compiler",
        "Category":"Project Leadership/Soft Skills"}

    rec4 = {
        'Id': 5901,
        "SessionStartTime":"2017-01-10T10:00:00",
        "Room":"Cypress",
        "Title":"Game Development with the Unity Game Engine",
        "SessionType":"Pre-Compiler",
        "Category":"Architecture"}

    rec5 = {
        'Id': 5366,
        "SessionStartTime":"2017-01-10T10:00:00",
        "Room":"Aloeswood",
        "Title":"Hacking & Hardening Java Web Applications Workshop",
        "SessionType":"Pre-Compiler",
        "Category":"Security"}

    my_db.append(rec1)
    my_db.append(rec2)
    my_db.append(rec3)
    my_db.append(rec4)
    my_db.append(rec5)

    return my_db

@app.route('/')
def hello_world():
    return 'Hello World'

@app.route('/api/sampledb', methods = ['GET'])
def sample_db_get():
    data = get_db_data()
    res = jsonify(data)
    res.status_code = 200
    return res




if __name__ == '__main__':
    app.run()
