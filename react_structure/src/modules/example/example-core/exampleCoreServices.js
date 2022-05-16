import endpoints from '~/configs/endpoints';

export const getHotelDeal = async ({restApi, Authorization, variables}) => {
  const {limit, page} = variables;

  const {data} = await restApi({
    fullService: endpoints.apis.v1.HOTEL_DEALS,
    method: 'GET',
    headers: {
      Authorization: Authorization,
    },
    headerParams: {
      limit,
      page,
    },
  });

  return data;
};

export default {
  getHotelDeal,
};
