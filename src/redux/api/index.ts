import { create } from "apisauce";
import { UserDataType } from "../../common/types";
const API = create({
  baseURL: "https://unelmamovie.com/api/v1",
});

const registerUserApi = (userData: UserDataType) => {
  return API.post("/auth/register", userData);
};

const loginUserApi = (data: {
  email: string;
  password: string;
  token_name: string;
}) => {
  return API.post("/auth/login", data);
};

const getMovieListApi = (
  token: any,
  order: any,
  currentPage: any,
  type: any,
  genre: any,
  country: any,
  released: any,
  score: any
) => {
  return API.get(
    "/titles",
    { order, page: currentPage, type, genre, country, released, score },
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );
};

const getSingleMovieApi = (id: string, token: any) => {
  return API.get(
    `/titles/${id}`,
    {},
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );
};

const getRelatedMovieListApi = (id: string, token: any) => {
  return API.get(
    `/titles/${id}/related`,
    {},
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );
};

const getUserInfoApi = (id: string, token: any) => {
  return API.get(
    `/user-profile/${id}`,
    {},
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );
};

const getSearchResultsApi = (query: any, token: any) => {
  return API.get(
    `/search/${query}`,
    { limit: 10 },
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );
};

export {
  registerUserApi,
  loginUserApi,
  getMovieListApi,
  getSingleMovieApi,
  getRelatedMovieListApi,
  getUserInfoApi,
  getSearchResultsApi,
};
