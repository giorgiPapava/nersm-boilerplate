import { useTranslation } from 'react-i18next';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '@root/firebase/firebase.config';

export async function getStaticProps() {
  const queries: any = [];
  const querySnapshot = await getDocs(collection(db, 'images'));
  querySnapshot.forEach((doc) => {
    queries.push(doc.data());
  });
  return {
    props: {
      queries,
    }, // will be passed to the page component as props
  };
}

const IndexPage = (props: any) => {
  console.log(props, 123);
  const { t } = useTranslation();
  return (
    <>
      <h1>Welcome to nersm-boilerplate 👋</h1>
      <p>{t('account_block_page_card_block')}</p>
    </>
  );
};

export default IndexPage;
