import axios from 'axios';

const client = axios.create({
  withCredentials: true,
  baseURL: process.env.NEXT_PUBLIC_BASE_URL,
});

export const getProductDetail = async (id: number | undefined) => {
  const res = await client.get(`/products/${id}`, {
    params: {
      productId: id,
    },
  });
  return res.data;
};

export const postProducts = async (
  title: string,
  categoryName: string,
  content: string,
  price: number,
  images?: FileList | null,
) => {
  const formData = new FormData();
  formData.append('title', title);
  formData.append('categoryName', categoryName);
  formData.append('content', content);
  formData.append('price', price.toString()); // 숫자를 문자열로 변환

  // 여러 이미지를 처리하는 경우
  if (images) {
    for (let i = 0; i < images.length; i++) {
      formData.append('images', images[i]);
    }
  }

  const config = {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  };

  const res = await client.post('/products', formData, config);
  return res.data;
};

export const getProductCategory = async () => {
  const res = await client.get(`/products/categories`);
  return res.data;
};

export const getProducts = async (searchWord?: string, category?: string) => {
  const res = await client.get('/products?pageSize=100', {
    params: {
      searchWord,
      categoryNames: category,
    },
  });
  return res.data;
};

export const postSignUp = async (
  email: string,
  password: string,
  phone: string,
  nickname: string,
) => {
  const res = await client.post('/signup', {
    email: email,
    password: password,
    phone: phone,
    nickname: nickname,
  });
  return res;
};

export const postAuth = async (email: string, password: string) => {
  const res = await client.post('/login', {
    email: email,
    password: password,
  });
  return res;
};

export const updateProductState = async (
  productStateId: number | undefined,
  changeStateCode: number,
) => {
  const res = await client.put(`/products/${productStateId}/status`, {
    status: changeStateCode,
  });
  return res;
};

export const getMyInfo = async () => {
  const res = await client.get('/myInfo');
  return res.data;
};

// 내 판매 상품 리스트 조회
export const getMyProduct = async () => {
  const res = await client.get('/myPage/products');
  return res.data;
};

export const getMyChatList = async () => {
  const res = await client.get('/myPage/chats');
  return res.data;
};

export const getProductChatList = async (id: number | null) => {
  const res = await client.get(`/products/${id}/chats`);
  return res.data;
};

export const getSellerProduct = async (id: number | null) => {
  const res = await client.get(`/products/${id}/list`);
  return res.data;
};

// 위시상품 추가 / 삭제

export const addWishProduct = async (id: number | undefined) => {
  const res = await client.post(`wish/${id}`);
  return res;
};

export const deleteWishProduct = async (id: number | undefined) => {
  const res = await client.delete(`wish/${id}`);
  return res;
};

export const putEditProfile = async (nickname: string, profileImg: string) => {
  const res = await client.put('/myPage/profile', {
    nickname: nickname,
    profileImg: profileImg,
  });
  return res;
};
