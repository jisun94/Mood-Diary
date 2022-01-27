import { useNavigate, useSearchParams } from 'react-router-dom';

const Edit = () => {
  const navigate = useNavigate();

  const [searchParmas, setSearchParams] = useSearchParams();

  const id = searchParmas.get('id');
  console.log('id :', id);

  const mode = searchParmas.get('mode');
  console.log('mode :', mode);
  return (
    <div>
      <h1>Edit</h1>
      <p>이곳은 일기 수정 페이지 입니다.</p>
      <button onClick={() => setSearchParams({ id: 100, mode: 'dark' })}>
        QS바꾸기
      </button>
      <button
        onClick={() => {
          navigate('/home');
        }}
      >
        go to home
      </button>
      <button
        onClick={() => {
          navigate(-1);
        }}
      >
        뒤로가기
      </button>
    </div>
  );
};

export default Edit;
