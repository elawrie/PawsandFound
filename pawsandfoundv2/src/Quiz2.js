import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Quiz.css';

// Font Awesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaw } from '@fortawesome/free-solid-svg-icons';

function Quiz2() {
  const [range, setRange] = useState({ min: 1, max: 100 }); // State for size range
  const [selectedGender, setSelectedGender] = useState(''); // State for gender selection
  const [trainingPreference, setTrainingPreference] = useState(''); // State for training preference

  const handleRangeChange = (e, type) => {
    const value = parseInt(e.target.value, 10);
    setRange((prev) => ({
      ...prev,
      [type]: type === 'min' ? Math.min(value, prev.max) : Math.max(value, prev.min),
    }));
  };

  const handleGenderChange = (e) => {
    setSelectedGender(e.target.value);
  };

  const handleTrainingChange = (e) => {
    setTrainingPreference(e.target.value);
  };

  return (
    <div className="quiz-container">
      {/* Header Section with Paw Icons */}
      <div className="quiz-header">
        <FontAwesomeIcon icon={faPaw} size="2x" color="white" />
        <FontAwesomeIcon icon={faPaw} size="2x" color="#183d34" />
        <FontAwesomeIcon icon={faPaw} size="2x" color="white" />
        <FontAwesomeIcon icon={faPaw} size="2x" color="white" />
      </div>

      {/* Note Section */}
      <div className="quiz-note">
        <p>Tell us what you're looking for in a furry friend!</p>
      </div>

      {/* Content Section */}
      <div className="quiz-content">
        {/* Question 1 */}
        <div className="quiz-item">
          <h3>What genders are you open to caring for?</h3>
          <div id="flex" className="d-flex justify-content-left">
            <div className="form-check me-3">
              <input
                className="form-check-input"
                type="radio"
                name="gender"
                id="flexRadioMale"
                value="Male"
                checked={selectedGender === 'Male'}
                onChange={handleGenderChange}
              />
              <label className="form-check-label" htmlFor="flexRadioMale">Male</label>
            </div>
            <div className="form-check ms-3">
              <input
                className="form-check-input"
                type="radio"
                name="gender"
                id="flexRadioFemale"
                value="Female"
                checked={selectedGender === 'Female'}
                onChange={handleGenderChange}
              />
              <label className="form-check-label" htmlFor="flexRadioFemale">Female</label>
            </div>
            <div className="form-check ms-3">
              <input
                className="form-check-input"
                type="radio"
                name="gender"
                id="flexRadioEither"
                value="Either"
                checked={selectedGender === 'Either'}
                onChange={handleGenderChange}
              />
              <label className="form-check-label" htmlFor="flexRadioEither">Either</label>
            </div>
          </div>
        </div>

        {/* Question 2 */}
        <div className="quiz-item">
          <h3> What size (in lbs.) furry friend are you open to caring for?</h3>
          <div className="range-slider-container">
            <div className="range-slider">
              <input
                type="range"
                min="1"
                max="100"
                value={range.min}
                onChange={(e) => handleRangeChange(e, 'min')}
              />
              <input
                type="range"
                min="1"
                max="100"
                value={range.max}
                onChange={(e) => handleRangeChange(e, 'max')}
              />
            </div>
            <div className="range-values">
              <span>{range.min}</span>
              <span>{range.max}</span>
            </div>
          </div>
        </div>

        {/* Question 3 */}
        <div className="quiz-item">
          <h3>Do you feel comfortable training your furry friend?</h3>
          <div id="flex" className="d-flex flex-column">
            <div className="form-check mb-2">
              <input
                className="form-check-input"
                type="radio"
                name="train"
                id="flexRadioTrained"
                value="Already Trained"
                checked={trainingPreference === 'Already Trained'}
                onChange={handleTrainingChange}
              />
              <label className="form-check-label" htmlFor="flexRadioTrained">
                Not comforitable
              </label>
            </div>
            <div className="form-check">
              <input
                className="form-check-input"
                type="radio"
                name="train"
                id="flexRadioCanTrain"
                value="I can train them"
                checked={trainingPreference === 'I can train them'}
                onChange={handleTrainingChange}
              />
              <label className="form-check-label" htmlFor="flexRadioCanTrain">
                Comfortiable
              </label>
            </div>
          </div>
        </div>
      </div>

      {/* Button Section */}
      <div className="quiz-button-container">
        <Link to="/Quiz">
          <button className="quiz-footer-button">Back</button>
        </Link>
        <Link to="/Quiz3">
          <button className="quiz-footer-button">Next</button>
        </Link>
      </div>
    </div>
  );
}

export default Quiz2;
