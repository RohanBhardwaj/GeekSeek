import React from 'react';
import PropTypes from 'prop-types';
import formatDate from '../../utils/formatDate';

const ProfileEducation = ({
    education: { college, branch, course, current, to, from, description }
}) => (
    <div>
        <h3 className="text-dark">{college}</h3>
        <p>
            {formatDate(from)} - {to ? formatDate(to) : 'Now'}
        </p>
        <p>
            <strong>Branch: </strong> {branch}
        </p>
        <p>
            <strong>Course: </strong> {course}
        </p>
        <p>
            <strong>Description: </strong> {description}
        </p>
    </div>
);

ProfileEducation.propTypes = {
    education: PropTypes.object.isRequired
};

export default ProfileEducation;