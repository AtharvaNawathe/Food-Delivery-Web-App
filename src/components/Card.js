import React from 'react';

export default function Card() {
  return (
    <div>
      <div className="card mt-3" style={{ width: '15rem' }}>
        <img
          src="https://media.istockphoto.com/id/693931188/photo/paneer-tikka-kabab-tandoori-indian-cheese-skewers-or-barbecue-paneer-selective-focus.jpg?s=612x612&w=0&k=20&c=K9M-9dK3e8xtTiqgXJ1msx993XhO1KF3rswKXl74-ho="
          className="card-img-top"
          alt="..."
          style={{ maxHeight: '200px', objectFit: 'cover' }}
        />
        <div className="card-body text-center">
          <h5 className="card-title">Card title</h5>
          <p className="card-text">Card Text</p>
          <div className="container w-100">
            <select className="m-2 h-100 bg-success">
              {Array.from({ length: 6 }, (_, i) => (
                <option key={i + 1} value={i + 1}>
                  {i + 1}
                </option>
              ))}
            </select>
            <select className="m-2 h-100 bg-success rounded">
              <option value="Half">Half</option>
              <option value="Full">Full</option>
            </select>

            <div className="d-inline h-100 fs-5">Total Price</div>
          </div>
        </div>
      </div>

      <div className="card mt-3" style={{ width: '15rem' }}>
        <img
          src="https://media.istockphoto.com/id/693931188/photo/paneer-tikka-kabab-tandoori-indian-cheese-skewers-or-barbecue-paneer-selective-focus.jpg?s=612x612&w=0&k=20&c=K9M-9dK3e8xtTiqgXJ1msx993XhO1KF3rswKXl74-ho="
          className="card-img-top"
          alt="..."
          style={{ maxHeight: '200px', objectFit: 'cover' }}
        />
        <div className="card-body text-center">
          <h5 className="card-title">Card title</h5>
          <p className="card-text">Card Text</p>
          <div className="container w-100">
            <select className="m-2 h-100 bg-success">
              {Array.from({ length: 6 }, (_, i) => (
                <option key={i + 1} value={i + 1}>
                  {i + 1}
                </option>
              ))}
            </select>
            <select className="m-2 h-100 bg-success rounded">
              <option value="Half">Half</option>
              <option value="Full">Full</option>
            </select>

            <div className="d-inline h-100 fs-5">Total Price</div>
          </div>
        </div>
      </div>
    </div>
  );
}
