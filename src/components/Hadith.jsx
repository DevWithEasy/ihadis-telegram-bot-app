import Details from "./hadith/Details";
import Table from "./hadith/Table";

export default function Hadith({ setFind, data }) {
  const { hadith, section } = data;
  return (
    <div className="absolute h-screen w-full flex justify-center items-center top-0 bg-gray-100/70">
      <div className="relative h-[calc(100vh-50px)] w-[calc(100%-16px)] p-4 space-y-3 bg-white rounded-md overflow-y-auto">
        <button
          onClick={() => setFind(false)}
          className="absolute right-5 px-4 py-2 bg-red-50 text-red-500 rounded-md"
        >
          X
        </button>
        <Table data={data} />
        <div className="space-y-3">
          <Details
            title={"আরবীঃ"}
            description={hadith?.ar}
            largeFont={true}
            color={'bg-gray-50/50 '}
          />
          <Details
            title={"বাংলা অনুবাদঃ"}
            description={hadith?.bn}
            color={'bg-green-50/50'}
          />
          <Details
            title={"হাদিসের ব্যাখাঃ"}
            description={section?.preface}
            color={'bg-blue-50/50 '}
          />
        </div>
      </div>
    </div>
  );
}
