export const PATHS = {
  AUTH: {
    SIGNUP: '/api/auths/signup',
    CHECK_EMAIL: '/api/auths/check-email',
    SIGNIN: '/api/auths/signin',
    SIGNOUT: '/api/auths/signout',
    USER_INFO: '/api/auths/users',
    PROFILE_IMAGE: '/api/auths/profile',
    REFRESH_TOKEN: '/api/auths/reissue',
  },
  MEETING: {
    CREATE: '/api/meetings',
    JOIN: (meetingId: number) => `/api/meetings/${meetingId}`,
    LEAVE: (meetingId: number) => `/api/meetings/${meetingId}/joinCancel`,
    GET_ALL: '/api/meetings',
    GET_DETAIL: (meetingId: number) => `/api/meetings/${meetingId}`,
    GET_MEMBERS: (meetingId: number, pageNumber: number, size: number) =>
      `/api/meetings/${meetingId}/members?page=${pageNumber}&size=${size}`,
    GET_PLANS: (meetingId: number, pageNumber: number, size: number) =>
      `/api/meetings/${meetingId}/plans?page=${pageNumber}&size=${size}`,
    GET_REVIEWS: (meetingId: number, pageNumber: number, size: number) =>
      `/api/meetings/${meetingId}/reviews?page=${pageNumber}&size=${size}`,
    UPDATE: (meetingId: number) => `/api/meetings/${meetingId}`,
    DELETE: (meetingId: number) => `/api/meetings/${meetingId}`,
  },
  PLAN: {
    CREATE: (meetingId: number) => `/api/plans/${meetingId}`,
    GET_ALL: (params: string) => `/api/plans?${params}`,
    GET_DETAIL: (planId: number) => `/api/plans/${planId}`,
    CANCEL: (planId: number) => `/api/plans/${planId}/cancel`,
    ATTEND: (planId: number) => `/api/plans/${planId}/attendance`,
    LIKE: (planId: number) => `/api/plans/like/${planId}`,
    UNLIKE: (planId: number) => `/api/plans/like/${planId}`,
    GET_LIKED: (params: string) => `/api/plans/like?${params}`,
  },
  REVIEW: {
    CREATE: (planId: number) => `/api/reviews/${planId}`,
    UPDATE: (reviewId: number) => `/api/reviews/${reviewId}`,
    DELETE: (reviewId: number) => `/api/reviews/${reviewId}`,
    GET_ALL: (params: string) => `/api/reviews?${params}`,
  },
  REGION: {
    GET_PROVINCES: '/api/region/province',
    GET_DISTRICTS: (provinceId: number) =>
      `/api/region/district?provinceId=${provinceId}`,
  },
  MYPAGE: {
    GET_MY_MEETINGS: (pageNumber: number, size: number) =>
      `/api/users/meetings?page=${pageNumber}&size=${size}`,
    GET_MY_PLANS: (pageNumber: number, size: number) =>
      `/api/users/plans?page=${pageNumber}&size=${size}`,
    GET_MY_REVIEWS: (pageNumber: number, size: number) =>
      `/api/users/reviews?page=${pageNumber}&size=${size}`,
    GET_AVAILABLE_REVIEWS: (pageNumber: number, size: number) =>
      `/api/users/reviews/available?page=${pageNumber}&size=${size}`,
  },
  IMAGE: {
    UPLOAD: (count: number) => `/api/images?count=${count}`,
  },
} as const;
