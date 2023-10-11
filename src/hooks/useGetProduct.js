import { useQuery } from "@apollo/client";
import { GET_PRODUCT } from "../gql/queries/product";

const useGetProducts = (url) => {

  const { data, loading, error } = useQuery(GET_PRODUCT, {
    variables: { channel: 'uk', slug: "420pm-perfume" },
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

