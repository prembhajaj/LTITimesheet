from flask import Flask
import json

app = Flask(__name__)

@app.route('/user')
def user():
    f = open('users.json')
    efforts = json.loads(f.read())
    efforts = {"prem":efforts["prem"]}
    
    f.close()
    return efforts


@app.route('/approver')
def approver():
    f = open('efforts.json')
    efforts = json.loads(f.read())

    f.close()
    return efforts


@app.route('/submittimesheet')
def submitTimesheet():
    return {"status":"submitted"}


@app.route('/approvetimesheet')
def approveTimesheet():
    return {"status":"approved"}




if __name__ == '__main__':
    app.run()
