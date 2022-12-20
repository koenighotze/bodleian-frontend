import './LabelValue.css'
import PropTypes from 'prop-types'

const LabelValue = ({ label, value }) => (
  <div className="label-value-pair">
    <span className="label">{label}:</span>
    <span className="value">{value}</span>
  </div>
)

LabelValue.propTypes = {
  label: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
}

export default LabelValue
