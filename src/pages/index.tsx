import { useTranslation } from 'react-i18next';

const IndexPage = () => {
  const { t } = useTranslation();
  return (
    <>
      <h1>Welcome to nersm-boilerplate 👋</h1>
      <p>{t('account_block_page_card_block')}</p>
    </>
  );
};

export default IndexPage;
