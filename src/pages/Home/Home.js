import React, { useState, useEffect } from "react";
import Loading from "../../components/Loading/Loading";
import ItemComponent from "../../components/ItemComponent/ItemComponent";
import ScrollToTop from "react-scroll-to-top";

const Home = () => {
  const [card, setCard] = useState([]);
  const [page, setPage] = useState(15);
  const [pageNum, setPageNum] = useState(1);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getCardData = async () => {
      const res = await fetch(
        `http://sweeftdigital-intern.eu-central-1.elasticbeanstalk.com/user/${pageNum}/${page}`
      );
      const data = await res.json();
      setCard(data.list);
      setLoading(false);
    };
    getCardData();
  }, [page, pageNum]);

  const InfiniteScroll = async () => {
    try {
      if (
        document.documentElement.scrollTop + window.innerHeight + 1 >=
        document.documentElement.scrollHeight
      ) {
        setLoading(true);
        setPage((prev) => prev + 5);
      }
    } catch (error) {
      console.log("error");
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", InfiniteScroll);
    return () => window.removeEventListener("scroll", InfiniteScroll);
  }, []);

  useEffect(() => {
    if (page === 100) {
      setPage(0);
      setPageNum((prev) => prev + 1);
    }
  }, [page]);
  return (
    <>
      <ScrollToTop
        smooth
        style={{
          width: "50px",
          height: "50px",
          padding: "10px",
          borderRadius: "30px",
        }}
      />
      <ItemComponent movieInfo={card} />
      {loading && <Loading />}
    </>
  );
};

export default Home;
