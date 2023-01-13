import { withTranslation } from 'react-i18next'
import './Footer.css'

const Footer = ({ t }) => (
  <footer className="page-footer">
    <span className="skew">{t('Footer.koenighotze')}</span>
    <span className="skew">{t('Footer.copyright')}</span>
  </footer>
)

export default withTranslation()(Footer)
