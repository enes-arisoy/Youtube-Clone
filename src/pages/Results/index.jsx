import { useEffect, useState } from "react";
import api from "../../utils/api";
import { useSearchParams } from "react-router-dom";
import VideoCard from "../../components/VideoCard";
import Error from "../../components/Error";
const Results = () => {
  // state kurulumları
  const [videos, setVideos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [token, setToken] = useState(null);
  const [page, setPage] = useState(1);

  // url deki search_query parametresine erişmek için useSearchParams kullanıyoruz
  const [searchParams] = useSearchParams();
  const query = searchParams.get("query");

  const params = {
    query,
    token,
  };

  // ! api isteği atmak için useEffect kullanıyoruz
  useEffect(() => {
    api
      .get("/search", { params })
      .then((res) => {
        // Sayfa 1 ise doğrudan set et
        if (page === 1) {
          setVideos(res.data);
        } else {
          // önceki veriyi koru, yenileri ekle
          setVideos((prev) => ({
            ...res.data,
            data: [...(prev?.data || []), ...res.data.data],
          }));
        }
        setToken(res.data.continuation);
      })
      .catch((err) => setError(err.message))
      .finally(() => setLoading(false));
  }, [query, page]);

  // gelen verilerden sadece video olanları al
  videos.data = videos.data?.filter((video) => video?.type === "video") || [];

  return (
    <div className="p-4 sm:p-6 md:p-10 overflow-y-auto ">
      <h2 className="text-2xl">
        {" "}
        <span className="font-bold">{query}</span> için sonuçlar
      </h2>

      {loading ? (
        <h1>Loading</h1>
      ) : error ? (
        <Error info={error} />
      ) : (
        <>
          <div className="result-videos">
            {videos.data.map((i, key) => (
              <VideoCard key={key} video={i} isRow />
            ))}
          </div>

          <div className="flex justify-center">
            <button
              onClick={() => setPage(page + 1)}
              className="bg-zinc-600 py-2 px-5 rounded-md my-10 cursor-pointer hover:bg-zinc-800 transition duration-300"
            >
              Daha Fazla
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default Results;
