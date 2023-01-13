import PropTypes from 'prop-types'
import { withTranslation } from 'react-i18next'

const HomePage = ({ t }) => (
  <div>
    <h1>{t('HomePage.header')}</h1>
  </div>
)

HomePage.propTypes = {
  t: PropTypes.func.isRequired,
}

export default withTranslation()(HomePage)
