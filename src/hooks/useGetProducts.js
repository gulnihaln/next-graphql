import { useCallback } from "react";
import { useQuery } from "@apollo/client";
import { query } from "../gql/query";

const useGetProducts = (url) => {
  // const [data, setData] = React.useState(null);
  // const [loading, setLoading] = React.useState(false);
  // const [error, setError] = React.useState(null);
  // normalise data
  const format = useCallback((data) => {
    const products = data?.edges || null;

    return { products, data };
  }, []);

  const { data, loading, error } = useQuery(query.ALL_PRODUCTS, {
    variables: { channel: 'uk', first: 40 },
  });

  const action = async (body, actionOptions = {}) => {
    // setLoading(true);
    // setError(null);
    // setData(null);

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

  return [action, { data, loading, error, ...format(data?.edges) }];
};

export default useGetProducts;

// query yap
// hook ta call yap query i
