import { useEffect } from 'react';
import { deletePost, getPost, postPost, updatePost } from './api/PostApi'
import './App.css'
import { useState } from 'react';
import { Data } from './components/Data';

function App() {

  // console.log(getPost());

  const [data, setData] = useState([]);
  const [postData, setPostData] = useState({
    id: null,
    title: "",
    body: "",
  });
  const [isEdit, setIsEdit] = useState(false);

  // handling get request
  async function getPostData(){
    const res = await getPost();
    setData(res.data);
  }

  // handling delete request
  async function handleDelete(id){
    try{
      const res = await deletePost(id);
      if(res.status === 200){
        const newData = data.filter((curData) => {
          return curData.id !== id
        })
        setData(newData);
      }
    }catch(error){
      console.log(error);
    }
  }

  function handleInputChange(e){
    const {name, value} = e.target;
    setPostData((prev) => {
      return {
        ...prev,
        [name]:value,
      }
    })
  }

  // handling post request
  async function handlePostData(e){
    e.preventDefault();
    const action = e.nativeEvent.submitter.value;
    try {
      if(action === "Add"){
        const res = await postPost(postData);
        console.log("res", res);
        if(res.status === 201){
          setData([...data, res.data]);
          setPostData({title:"", body:""});
        }
      }
      if(action === "Edit"){
        const res = await updatePost(postData.id, postData)
        console.log(res);
        setData((prev) => {
          return prev.map((curElem) => curElem.id === res.data.id? res.data : curElem);
        });
        setIsEdit(false);
      }
    }catch (error) {
      console.log(error);
    }
  }

  function handleUpdate(id, title, body){
    setIsEdit(true);
    setPostData({
      id: id,
      title: title || "",
      body: body || "",
    })
  }

  useEffect(()=>{
    getPostData();
  },[])

  // console.log(data);
  // console.log(postData.id)
  // console.log(postData.title);
  // console.log(postData.body);

  return (
    <div
    className='bg-gray-800 p-10 flex flex-col gap-10'
    >
      <form 
      className='flex gap-6 bg-gray-600 p-2 w-[fit-content] m-auto'
      onSubmit={handlePostData}
      >
        <div
        className='w-[300px]'
        >
          <input 
          type="text" 
          placeholder='enter title'
          className='w-[100%] p-2 text-lg'
          value={postData.title}
          onChange={handleInputChange}
          name='title'
          />
        </div>
        <div
        className='w-[300px]'
        >
          <input 
          type="text" 
          placeholder='enter news'
          className='w-[100%] p-2 text-lg'
          value={postData.body}
          onChange={handleInputChange}
          name='body'
          />
        </div>
        <button
        className='bg-green-500 text-white px-10 text-lg'
        type='submit'
        value={isEdit?"Edit":"Add"}
        >
          {isEdit?"Edit":"Add"}
        </button>
      </form>
      <div>
        <ol 
        className='grid grid-cols-3 gap-10 max-w-[90%] m-auto list-decimal list-inside'
        >
          {
            data.map((curData)=>{
              return <Data key={curData.id} data={curData} handleDelete={handleDelete} handleUpdate={handleUpdate}/>
            })
          }
        </ol>
      </div>
    </div>
  )
}

export default App
