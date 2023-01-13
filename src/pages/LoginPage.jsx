import PropTypes from 'prop-types'
import { withTranslation } from 'react-i18next'

const LoginPage = ({ t }) => <div>{t('LoginPage.login')}</div>

LoginPage.propTypes = {
  t: PropTypes.func.isRequired,
}

export default withTranslation()(LoginPage)
