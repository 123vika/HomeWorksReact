import { useParams } from 'react-router-dom'; //, useHistory

const UsersProfilePage = () => {
  const { userId } = useParams();
  // const history = useHistory();
  return (
    <>
      <p>Users Profile {userId}</p>
    </>
  );
};

export default UsersProfilePage;
