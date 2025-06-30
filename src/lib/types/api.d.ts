declare type Pagination = {
  currentPage: number;
  numberOfPages: number;
  limit: number;
  nextPage: number;
  total: number;
};
declare type SuccessResponse<T> = {
  message: string;
  paginationInfo:Pagination;
}&T;

declare type ErrorResponse = {
  error: string;
};


declare type ApiResponse<T> = SuccessResponse<T> | ErrorResponse;

