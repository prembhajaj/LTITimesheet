from flask import Flask,request
import json
from flask_cors import CORS, cross_origin
from requests import post



app = Flask(__name__)
CORS(app)
entries = [{
    "Name":"Prem Bhajaj",
    "Project":"Hoist Finance",
    "CostCode":"1001",
    "Activity":"Training",
    "Date":"2022-05-08",
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
    entries[int(id)]["comments"] = request.get_json()["comments"]
    print(request.get_json())

    return {"entries": entries}

@app.route('/signin',methods=['POST'])
def signin():
    cred = request.get_json()
    print(cred)
    if cred["username"] == "prem.bhajaj@lntinfotech.com" and cred["password"]=="password@123":
        return {"role": "user","name":"Prem Bhajaj"}
    elif cred["username"] == "ashishkumar.singh@lntinfotech.com" and cred["password"]=="password@123":
        return {"role": "user","name":"AshishKumar Singh"}
    elif cred["username"] == "ajay.mohad@lntinfotech.com" and cred["password"]=="password@123":
        return {"role": "approver","name":"Ajay Mohad"}
    else:
        return {"role":"unauthorized"}


if __name__ == '__main__':
    app.run(host="0.0.0.0")



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

