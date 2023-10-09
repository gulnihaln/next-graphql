import { useCallback } from "react";
import { useQuery } from "@apollo/client";
import { ALL_PRODUCTS } from "../gql/queries/products";

const useGetProducts = (url) => {


  const { data, loading, error } = useQuery(ALL_PRODUCTS, {
    variables: { channel: 'uk', first: 40 },
  });

  const action = async (body, actionOptions = {}) => {
    return fetch(url)
      .then(async (res) => {
        if (res.status >= 200 && res.status < 300) {
          const value = await res.json();
          return value;
        }
        const json = await res.json();
        const err = new Error(res.statusText || res.status);
        throw err;
      })
      .then((result) => {
        setData(result);
        return result;
      })
      .catch((err) => {
        setError(err);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return [action, { data, loading, error }];
};

export default useGetProducts;

