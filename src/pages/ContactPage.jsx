import PropTypes from 'prop-types'
import { withTranslation } from 'react-i18next'

const ContactPage = ({ t }) => (
  <div>
    <h1>{t('ContactPage.header')}</h1>
  </div>
)

ContactPage.propTypes = {
  t: PropTypes.func.isRequired,
}

export default withTranslation()(ContactPage)
