import React, { useState } from 'react';

function Form() {
  const [name, setName] = useState('');
  const [activity, setActivity] = useState('');
  const [age, setAge] = useState(0);
  const [period, setPeriod] = useState(0);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const userData = {
      name,
      activity,
      age,
      period,
    };

    try {
      const response = await fetch('http://localhost:9292/gyms', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(userData),
      });

      if (response.ok) {
        console.log('User created successfully');
        // Reset form fields
        setName('');
        setActivity('');
        setAge(0);
        setPeriod(0);
      } else {
        console.log('Error creating user');
      }
    } catch (error) {
      console.log('Error:', error);
    }
  };

  return (
    <>
      <div className="content-body">
        <div className="container-fluid">
          <div className="row">
            <div className="col-xl-3 col-xxl-4">
              <div className="row">
                <div className="col-xl-12">
                  <div className="card flex-xl-column flex-md-row flex-column">
                    <div className="card">
                      <div className="card-header">
                        <h4 className="card-title">Add Users</h4>
                      </div>
                      <div className="card-body">
                        <div className="basic-form">
                          <form onSubmit={handleSubmit}>
                            <div className="form-group row">
                              <label className="col-sm-3 col-form-label">Name</label>
                              <div className="col-sm-9">
                                <input
                                  type="text"
                                  className="form-control"
                                  placeholder="Name"
                                  value={name}
                                  onChange={(e) => setName(e.target.value)}
                                />
                              </div>
                            </div>
                            <div className="form-group row">
                              <label className="col-sm-3 col-form-label">Activity</label>
                              <div className="col-sm-9">
                                <input
                                  type="text"
                                  className="form-control"
                                  placeholder="Activity"
                                  value={activity}
                                  onChange={(e) => setActivity(e.target.value)}
                                />
                              </div>
                            </div>
                            <div className="form-group row">
                              <label className="col-sm-3 col-form-label">Age</label>
                              <div className="col-sm-9">
                                <input
                                  type="number"
                                  className="form-control"
                                  placeholder="Age"
                                  value={age}
                                  onChange={(e) => setAge(parseInt(e.target.value))}
                                />
                              </div>
                            </div>
                            <div className="form-group row">
                              <label className="col-sm-3 col-form-label">Period</label>
                              <div className="col-sm-9">
                                <input
                                  type="number"
                                  className="form-control"
                                  placeholder="Period"
                                  value={period}
                                  onChange={(e) => setPeriod(parseInt(e.target.value))}
                                />
                              </div>
                            </div>
                            <div className="form-group row">
                              <div className="col-sm-9 offset-sm-3">
                                <button type="submit" className="btn btn-primary">Submit</button>
                              </div>
                            </div>
                          </form>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Form;
