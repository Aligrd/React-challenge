import { useState } from "react";
import fetchSyn from "../api/fetchSyn";
export const useGetSyns = () => {
  const [syns, setSyns] = useState([]);
  const [Loading, setLoading] = useState(false);

  const getSyns = (worddata) => {
    setLoading(true);
    fetchSyn(worddata)
      .then(setSyns)
      .then(() => setLoading(false));
  };

  return { Loading, syns, getSyns };
};
