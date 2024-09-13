import { useEffect, useState } from "react";
import logo from "../src/assets/logo.png";
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
import Finding from "./components/Finding";
import Hadith from "./components/Hadith";

function App() {
  const [books, setBooks] = useState([]);
  const [book_id, setBook_id] = useState(null);
  const [hadith_id, setHadith_id] = useState(null);
  const [loading, setLoading] = useState(false);
  const [isFind, setIsFind] = useState(false);
  const [hadith,setHadith] = useState({})

  const fetchhadith = async () => {
    console.log('hello world')
    if(!book_id){
      return toast.error(
        'হাদিসের বই বাছাই করুন',
        {
          position: "bottom-right",
        }
      )
    }else if(!hadith_id){
      return toast.error(
        'হাদিসের নং লিখুন',
        {
          position: "bottom-right",
        }
      )
    }
    try {
      setLoading(true)
      fetch(
        `https://ihadis.vercel.app/api/book/hadith/find/${book_id}/${hadith_id}`
      )
        .then((res) => res.json())
        .then((data) => {
          setLoading(false)
          if(data.message === 'Hadiths found'){
            setIsFind(true)
            setHadith(data.data)
          }else{
            return toast.error(
              'হাদিস খুঁজে পাওয়া যায়নি। রেফারেন্স সঠিক ভাবে লিখুন।',
              {
                position: "bottom-right",
              }
            )
          }
        });
    } catch (e) {
      setLoading(false)
      return toast.error(
        'সার্ভারজনিত ত্রুটি\n'+e?.message,
        {
          position: "bottom-right",
        }
      )
    }
  };

  useEffect(() => {
    // fetch books from an API
    fetch("https://ihadis.vercel.app/api/book/")
      .then((response) => response.json())
      .then((data) => {
        const genBooks = data.data.books.map((book) => {
          return {
            id: book.id,
            title: book.title,
          };
        });
        setBook_id(1)
        setBooks(genBooks);
      })
      .catch((error) => console.error("Error:", error));
  }, []);
  
  return (
    <div className="relative font-display">
      <div
        className="p-4 space-y-6"
      >
      <img src={logo} className="mx-auto w-24" />
      <h2 className="text-center text-3xl font-bold text-green-600">
        আল হাদিস বাংলা বট
      </h2>
      <h2 className="p-2 bg-green-50 text-green-500 rounded-md">
        রেফারেন্স হাদিস খুঁজুন খুব সহজেই। হাদিসটি সঠিক কিনা যাচাই করে ফেলুন
      </h2>
      <div className="space-y-4">
        <div className="space-y-2">
          <label>হাদিসের বই বাছাই করুনঃ</label>
          <select
            onChange={(e) => setBook_id(e.target.value)}
            className="w-full p-2 border rounded"
          >
            {books.map((book) => (
              <option key={book.id} value={book.id}>
                {book.title}
              </option>
            ))}
          </select>
        </div>
        <div className="space-y-2">
          <label>হাদিসের নং লিখুনঃ</label>
          <input 
          onChange={(e) => setHadith_id(e.target.value)}
          type="number" 
          className="w-full p-2 border rounded" 
          />
        </div>
        <button
          onClick={fetchhadith}
          className="w-full p-2 bg-blue-500 text-white rounded-full"
        >
          খুঁজুন
        </button>
      </div>
      </div>
      {loading && <Finding/>}
      {
      isFind && 
      <Hadith setFind={setIsFind} data={hadith}/>
      }
      <ToastContainer autoClose={4000}/>
    </div>
  );
}

export default App;
