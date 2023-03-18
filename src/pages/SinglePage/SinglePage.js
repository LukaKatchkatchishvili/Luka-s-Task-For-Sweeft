import React, { useState, useEffect } from "react";
import { useParams, useLocation } from "react-router-dom";
import FriendsComponent from "../../components/FriendsComponent/FriendsComponent";
import Loading from "../../components/Loading/Loading";
import ScrollToTop from "react-scroll-to-top";
import Profile from "../../components/Profile/Profile";

const SinglePage = () => {
  let { id } = useParams();
  const [Data, setData] = useState([]);
  const [page, setPage] = useState(10);
  const [loading, setLoading] = useState(true);
  const [friends, setFriends] = useState([]);

  let location = useLocation();
  useEffect(() => {
    const getCardData = async () => {
      const res = await fetch(
        `http://sweeftdigital-intern.eu-central-1.elasticbeanstalk.com/user/${id}`
      );
      const resFriends = await fetch(
        `http://sweeftdigital-intern.eu-central-1.elasticbeanstalk.com/user/${id}/friends/1/${page}`
      );
      const data = await res.json();
      const dataFriends = await resFriends.json();
      setData(data);
      setFriends(dataFriends.list);
    };
    getCardData();
  }, [page, location, id]);
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
      <Profile Data={Data} />
      <div>
        {<FriendsComponent friendData={friends} />}
        {loading && <Loading />}
      </div>
    </>
  );
};

export default SinglePage;
