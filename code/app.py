from flask import Flask,request
import json
from flask_cors import CORS, cross_origin
from requests import post



app = Flask(__name__)
CORS(app)
entries = [{
    "Name":"Prem Bhajaj",
    "Project":"Hoist Finance",
    "Activity":"Training",
    "Date":"2022-05-08",
    "StartTime":"09:00",
    "EndTime":"18:00",
    "Duration":"09:00",
    "SubActivity":"Completed Cloud Computing Certification",
    "status":"submitted"
  }]

@app.route('/getentries')
def getEntries():
    return {"entries": entries}

@app.route('/addentry',methods=[ 'POST'])
def addEntry():
    # print(request.get_json()["Name"])
    entries.append(request.get_json())
    return {"entries": entries}

@app.route('/deleteentry/<id>',methods=[ 'DELETE'])
def deleteEntry(id):
    entries.pop(int(id))
    return {"entries": entries}

@app.route('/approveentry/<id>',methods=['POST'])
def approveEntry(id):
    entries[int(id)]["status"] = "approved"
    return {"entries": entries}

@app.route('/rejectentry/<id>',methods=['POST'])
def rejectEntry(id):
    entries[int(id)]["status"] = "rejected"
    return {"entries": entries}


if __name__ == '__main__':
    app.run()



# @app.route('/user')
# def user():
#     f = open('users.json')
#     efforts = json.loads(f.read())
#     efforts = {"prem":efforts["prem"]}
    
#     f.close()
#     return efforts


# @app.route('/approver')
# def approver():
#     f = open('efforts.json')
#     efforts = json.loads(f.read())

#     f.close()
#     return efforts


# @app.route('/submittimesheet')
# def submitTimesheet():
#     return {"status":"submitted"}


# @app.route('/approvetimesheet')
# def approveTimesheet():
#     return {"status":"approved"}

